// js/overview.js

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('master-timeline-body')) return;
  // Restore uploaded documents metadata from localStorage for rich real-time sync
  const savedStateStr = localStorage.getItem('dx_dashboard_persisted_state');
  if (savedStateStr) {
    try {
      const savedState = JSON.parse(savedStateStr);
      if (savedState.uploadedDocuments) {
        // Merge metadata into store.uploadedDocuments for display
        Object.keys(savedState.uploadedDocuments).forEach(key => {
          store.uploadedDocuments[key] = {
            id: key,
            file: { name: savedState.uploadedDocuments[key].name || '업로드된 파일.pdf' },
            status: savedState.uploadedDocuments[key].status || 'idle'
          };
        });
      }
      if (savedState.additionalDocuments) {
        store.additionalDocuments = savedState.additionalDocuments;
      }
    } catch (e) {
      console.error('Error parsing persisted state:', e);
    }
  }

  // Initial Render
  renderOverview();
});

function renderOverview() {
  calculateAndRenderMetrics();
  renderMasterTimeline();
  renderDocumentSignalLights();
}

function calculateAndRenderMetrics() {
  // 1. Process Progress
  // Dynamically compute step status based on data & uploaded docs
  const stepStatuses = {};
  steps.forEach(s => {
    // Default is from data.js
    let status = s.status; // 'done', 'progress', 'pending'
    
    // Check if any matching doc is uploaded and done
    const matchedDocs = documentData.filter(d => {
      const hasUploaded = store.uploadedDocuments[d.id];
      if (!hasUploaded || hasUploaded.status !== 'done') return false;
      return doesDocMatchStepOutputs(d.title, s.outputs);
    });

    if (matchedDocs.length > 0) {
      status = 'done';
    }
    
    stepStatuses[s.id] = status;
  });

  // 현재 진행 중인 단계(stage) 식별
  let currentStage = 1;
  const progressStep = steps.find(s => s.status === 'progress');
  if (progressStep) {
    currentStage = progressStep.stage;
  } else {
    const lastDoneStep = [...steps].reverse().find(s => stepStatuses[s.id] === 'done');
    if (lastDoneStep) currentStage = lastDoneStep.stage;
  }
  const currentStageSteps = steps.filter(s => s.stage === currentStage);
  const doneInStage = currentStageSteps.filter(s => stepStatuses[s.id] === 'done').length;
  const processPercent = Math.round((doneInStage / currentStageSteps.length) * 100);

  document.getElementById('kpi-process-percent').textContent = `${processPercent}%`;
  document.getElementById('kpi-process-detail').textContent = `${currentStage}단계 ${currentStageSteps.length}개 공정 중 ${doneInStage}개 완료`;

  // 2. Document Checklist Progress
  const totalDocs = documentData.length; // 28
  const doneDocsCount = Object.values(store.uploadedDocuments).filter(d => d.status === 'done').length;
  const docPercent = Math.round((doneDocsCount / totalDocs) * 100);

  document.getElementById('kpi-doc-percent').textContent = `${docPercent}%`;
  document.getElementById('kpi-doc-detail').textContent = `필수 ${totalDocs}개 중 ${doneDocsCount}개 완료`;

  // 3. Next Milestones & D-Day
  let nextMilestoneDday = 'D-15';
  let nextMilestoneName = '주무관청 설립허가 신청';
  
  if (doneStepsCount >= 9) { // Stage 1 finished
    nextMilestoneDday = 'D-45';
    nextMilestoneName = '국세청 공익법인 추천 신청';
  }
  if (doneStepsCount >= 14) { // Stage 2 finished
    nextMilestoneDday = 'D-180';
    nextMilestoneName = '공익법인 사후 결산 및 공시';
  }
  
  document.getElementById('kpi-milestone-dday').textContent = nextMilestoneDday;
  document.getElementById('kpi-milestone-name').textContent = nextMilestoneName;

  // 4. Warnings and Alerts
  const warningCount = Object.values(store.uploadedDocuments).filter(d => d.status === 'idle' || d.status === 'checking').length;
  const warningCountText = document.getElementById('kpi-warning-count');
  const warningDetailText = document.getElementById('kpi-warning-detail');

  if (warningCount > 0) {
    warningCountText.style.color = '#f59e0b';
    warningCountText.textContent = `${warningCount}건`;
    warningDetailText.textContent = '업로드 서류 감수 대기 중';
  } else {
    warningCountText.style.color = '#10b981';
    warningCountText.textContent = '0건';
    warningDetailText.textContent = '규제 및 안전 요건 안전 범위';
  }
}

// Title matcher fallback (only define if not already loaded from app.js)
if (typeof doesDocMatchStepOutputs === 'undefined') {
  window.doesDocMatchStepOutputs = function(docTitle, stepOutputs) {
    if (!stepOutputs || stepOutputs.length === 0) return false;
    const cleanStr = (s) => s.toLowerCase().replace(/\s+/g, '').replace(/[\/\-·,\._()\[\]]/g, '');
    const docParts = docTitle.split('/');
    for (const part of docParts) {
      const cleanedPart = cleanStr(part);
      if (cleanedPart.length < 2) continue;
      for (const out of stepOutputs) {
        const cleanedOutput = cleanStr(out);
        if (cleanedPart.length >= 5 && cleanedOutput.length >= 5) {
          if (cleanedOutput.includes(cleanedPart) || cleanedPart.includes(cleanedOutput)) return true;
        }
        if (cleanedPart === cleanedOutput) return true;
        const compoundKeywords = [
          '이력서', '회의록', '특수관계인', '계좌', '공시',
          '설립허가신청서', '추천신청서', '사업계획서', '수지예산서',
          '재산목록', '잔고증명', '취임승낙서', '세무확인서', '결산서',
          '발기인', '인적사항', '정수표'
        ];
        for (const kw of compoundKeywords) {
          if (cleanedPart.includes(kw) && cleanedOutput.includes(kw)) return true;
        }
        if (cleanedPart === '정관') {
          if (cleanedOutput.startsWith('정관') && !cleanedOutput.startsWith('정관적합성')) return true;
        }
        if (cleanedPart.includes('승낙서') && cleanedOutput.includes('승낙서')) return true;
        if (cleanedPart.includes('재산증명') && cleanedOutput.includes('재산')) return true;
        if (cleanedPart.includes('잔고증명') && cleanedOutput.includes('잔고')) return true;
        if (cleanedPart.includes('사무실') && cleanedOutput.includes('사무소')) return true;
      }
    }
    return false;
  };
}

function renderMasterTimeline() {
  const container = document.getElementById('master-timeline-body');
  
  // Calculate dynamic step statuses
  const stepStatuses = {};
  steps.forEach(s => {
    let status = s.status;
    const matchedDocs = documentData.filter(d => {
      const hasUploaded = store.uploadedDocuments[d.id];
      return hasUploaded && hasUploaded.status === 'done' && doesDocMatchStepOutputs(d.title, s.outputs);
    });
    if (matchedDocs.length > 0) {
      status = 'done';
    }
    stepStatuses[s.id] = status;
  });

  const stages = [
    { id: 1, name: '1단계: 재단법인 설립단계' },
    { id: 2, name: '2단계: 공익법인등 지정단계' },
    { id: 3, name: '3단계: 공익법인등 운영단계' }
  ];

  let html = '';
  stages.forEach(stg => {
    const stageSteps = steps.filter(s => s.stage === stg.id);
    const completedCount = stageSteps.filter(s => stepStatuses[s.id] === 'done').length;
    const totalCount = stageSteps.length;

    html += `
      <div class="master-stage-box">
        <h3 class="master-stage-title">
          <span>${stg.name}</span>
          <span style="font-size: 0.8125rem; font-weight: 600; color: #64748b; margin-left: auto;">
            (${completedCount}/${totalCount} 완료)
          </span>
        </h3>
        <div class="master-steps-grid">
    `;

    stageSteps.forEach(s => {
      const status = stepStatuses[s.id];
      let statusClass = 'pending';
      let iconHtml = '';

      if (status === 'done') {
        statusClass = 'done';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
      } else if (status === 'progress') {
        statusClass = 'progress';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
      } else {
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`;
      }

      html += `
        <div class="master-step-node ${statusClass}" onclick="goToStep('${s.id}')" title="상세 대시보드로 이동">
          <div class="step-status-icon">${iconHtml}</div>
          <div class="step-node-info">
            <span class="step-node-id">${s.id}</span>
            <span class="step-node-name">${s.title}</span>
            <span class="step-node-meta">${s.owner} · ${s.duration}</span>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderDocumentSignalLights() {
  const container = document.getElementById('doc-signals-body');
  
  const groups = [
    { name: '설립 등기 준비 서류 (1단계)', stageId: 1 },
    { name: '공익법인 지정 신청 서류 (2단계)', stageId: 2 },
    { name: '사후 운영 관리 의무 서류 (3단계)', stageId: 3 }
  ];

  let html = '';
  groups.forEach(grp => {
    const docs = documentData.filter(d => d.stageId === grp.stageId);
    
    html += `
      <div class="doc-group">
        <div class="doc-group-title">${grp.name}</div>
    `;

    docs.forEach(d => {
      const uploadState = store.uploadedDocuments[d.id];
      let lightClass = 'red';
      let badgeClass = 'red';
      let statusText = '미작성';

      if (uploadState) {
        if (uploadState.status === 'done') {
          lightClass = 'green';
          badgeClass = 'green';
          statusText = '준비 완료';
        } else {
          lightClass = 'orange';
          badgeClass = 'orange';
          statusText = '검증/대기';
        }
      }

      html += `
        <div class="doc-status-item">
          <div class="doc-name-area">
            <span class="doc-signal-light ${lightClass}"></span>
            <span class="doc-name-text" title="${d.title}">${d.title}</span>
          </div>
          <span class="doc-badge ${badgeClass}">${statusText}</span>
        </div>
      `;
    });

    html += `
      </div>
    `;
  });

  container.innerHTML = html;
}

function goToStep(stepId) {
  localStorage.setItem('activeStepId', stepId);
  localStorage.setItem('activeTab', 'progress');
  window.location.href = 'index.html';
}
