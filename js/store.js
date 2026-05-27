// ── IndexedDB: Blob 영구 저장 (용량 제한 없음) ─────────────────────
const fileDB = (() => {
  let _db = null;
  const open = () => new Promise((res, rej) => {
    if (_db) return res(_db);
    const req = indexedDB.open('dx-dashboard-files', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('blobs', { keyPath: 'id' });
    req.onsuccess = e => { _db = e.target.result; res(_db); };
    req.onerror = rej;
  });
  return {
    save(id, blob) {
      return open().then(db => new Promise((res, rej) => {
        const tx = db.transaction('blobs', 'readwrite');
        tx.objectStore('blobs').put({ id, blob });
        tx.oncomplete = res; tx.onerror = rej;
      })).catch(() => {});
    },
    async load(id) {
      try {
        const db = await open();
        return await new Promise(res => {
          const req = db.transaction('blobs', 'readonly').objectStore('blobs').get(id);
          req.onsuccess = () => res(req.result ? req.result.blob : null);
          req.onerror = () => res(null);
        });
      } catch { return null; }
    },
    del(id) {
      return open().then(db => new Promise(res => {
        const tx = db.transaction('blobs', 'readwrite');
        tx.objectStore('blobs').delete(id);
        tx.oncomplete = res; tx.onerror = res;
      })).catch(() => {});
    }
  };
})();

// ── 애플리케이션 상태 ──────────────────────────────────────────────
const store = {
  activeTab: 'plan',
  viewMode: 'detail',
  openSimulations: [],
  activeConceptModal: null,
  activeStepId: '1-2',
  activeProgressStage: 1,
  activeDocStageId: 1,
  activeDocId: '1-1',
  uploadedDocuments: {
    '1-1': { id: '1-1', file: { name: '1. 법인설립허가신청서.pdf' }, status: 'done', path: '서류서식/1. 법인설립허가신청서.pdf' },
    '1-2': { id: '1-2', file: { name: '2. 설립취지서.pdf' }, status: 'done', path: '서류서식/2. 설립취지서.pdf' },
    '1-7': { id: '1-7', file: { name: '(예시) 정관.pdf' }, status: 'done', path: '서류서식/(예시) 정관.pdf' },
    '1-13': { id: '1-13', file: { name: '(예시) 사업계획서.pdf' }, status: 'done', path: '서류서식/(예시) 사업계획서.pdf' }
  },

  setViewMode(mode) {
    this.viewMode = mode;
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.classList.toggle('active',
        (mode === 'overview' && btn.dataset.mode === 'overview') ||
        (mode === 'detail'   && btn.dataset.mode === 'detail')
      );
    });
    renderApp();
  },
  setActiveTab(tab) {
    this.activeTab = tab;
    renderApp();
  },
  toggleSimulation(type) {
    const idx = this.openSimulations.indexOf(type);
    if (idx >= 0) {
      this.openSimulations.splice(idx, 1);
    } else {
      this.openSimulations.push(type);
    }
    renderSimulationArea();
    renderSidebar();
  },
  closeSimulation(type) {
    this.openSimulations = this.openSimulations.filter(t => t !== type);
    renderSimulationArea();
    renderSidebar();
  },
  setActiveConceptModal(modal) {
    this.activeConceptModal = modal;
    renderConceptModal();
  },
  setActiveStepId(id) {
    this.activeStepId = id;
    const step = steps.find(s => s.id === id);
    if (step) this.activeProgressStage = step.stage;
    renderProgressSection();
  },
  setActiveProgressStage(stageNum) {
    this.activeProgressStage = stageNum;
    const first = steps.find(s => s.stage === stageNum);
    if (first) this.activeStepId = first.id;
    renderProgressSection();
  },
  setActiveDocStageId(id) {
    this.activeDocStageId = id;
    const first = documentData.find(d => d.stageId === id);
    if (first) this.activeDocId = first.id;
    renderDocsSection();
  },
  setActiveDocId(id) {
    this.activeDocId = id;
    renderDocsSection();
    renderVerificationView();
  },
  uploadDocument(id, file) {
    this.uploadedDocuments[id] = { id, file, status: 'idle' };
    this.saveState();
  },
  updateDocumentStatus(id, status) {
    if (this.uploadedDocuments[id]) {
      this.uploadedDocuments[id].status = status;
    }
    this.saveState();
    renderDocsSection();
    renderVerificationView();
  },
  deleteDocument(id) {
    delete this.uploadedDocuments[id];
    fileDB.del(id);
    this.saveState();
    renderDocsSection();
    renderVerificationView();
  },
  additionalDocuments: {},
  uploadAdditionalDocument(stepId, file) {
    if (!this.additionalDocuments[stepId]) {
      this.additionalDocuments[stepId] = [];
    }
    const docId = `add-${stepId}-${Date.now()}`;
    this.additionalDocuments[stepId].push({ id: docId, name: file.name, file: file });
    this.saveState();
    renderProgressSection();
    return docId;
  },
  deleteAdditionalDocument(stepId, docId) {
    if (this.additionalDocuments[stepId]) {
      this.additionalDocuments[stepId] = this.additionalDocuments[stepId].filter(d => d.id !== docId);
    }
    fileDB.del(docId);
    this.saveState();
    renderProgressSection();
  },
  saveState() {
    const serializedDocs = {};
    Object.keys(this.uploadedDocuments).forEach(key => {
      const doc = this.uploadedDocuments[key];
      serializedDocs[key] = {
        id: doc.id,
        name: doc.file ? doc.file.name : '업로드된 파일.pdf',
        status: doc.status,
        path: doc.path || null
      };
    });
    // additionalDocuments: file(Blob)은 직렬화 안 됨 — name만 보존
    const serializedAdditional = {};
    Object.keys(this.additionalDocuments).forEach(k => {
      serializedAdditional[k] = (this.additionalDocuments[k] || []).map(d => ({
        id: d.id, name: d.name
      }));
    });
    try {
      localStorage.setItem('dx_dashboard_persisted_state', JSON.stringify({
        uploadedDocuments: serializedDocs,
        additionalDocuments: serializedAdditional
      }));
    } catch (e) { /* 저장 불가 시 무시 */ }
  },
  loadState() {
    const saved = localStorage.getItem('dx_dashboard_persisted_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.uploadedDocuments) {
          Object.keys(state.uploadedDocuments).forEach(key => {
            const doc = state.uploadedDocuments[key];
            this.uploadedDocuments[key] = {
              id: doc.id,
              file: { name: doc.name },
              status: doc.status,
              path: doc.path || null
            };
          });
        }
        if (state.additionalDocuments) {
          // file은 없지만 id·name은 복원 (Blob은 IndexedDB에서 로드)
          Object.keys(state.additionalDocuments).forEach(k => {
            this.additionalDocuments[k] = (state.additionalDocuments[k] || []).map(d => ({
              id: d.id, name: d.name, file: null
            }));
          });
        }
      } catch (e) {
        console.error('Error loading persisted state:', e);
      }
    }
  }
};

// Auto load state at startup
store.loadState();
