// SVG icon helpers
const icons = {
  maximize2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  minimize2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  layoutDashboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  gitMerge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
  fileCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>`,
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  landmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  gavel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 13 8.5 7.5l1-1L15 12z"/><path d="m20 20-5.5-5.5"/><path d="M4 21 2 19l7-7"/><path d="m9 3 2 2-7 7-2-2z"/><path d="m15 9 2 2"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="10" x2="16" y1="13" y2="13"/><line x1="10" x2="16" y1="17" y2="17"/><line x1="10" x2="12" y1="9" y2="9"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  checkCircle2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
  checkSquare: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  uploadCloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" x2="12" y1="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  trash2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`
};

function doesDocMatchStepOutputs(docTitle, stepOutputs) {
  if (!stepOutputs || stepOutputs.length === 0) return false;
  const cleanStr = (s) => s.toLowerCase().replace(/\s+/g, '').replace(/[\/\-·,\._()\[\]]/g, '');
  const docParts = docTitle.split('/');
  for (const part of docParts) {
    const cleanedPart = cleanStr(part);
    if (cleanedPart.length < 2) continue;
    for (const out of stepOutputs) {
      const cleanedOutput = cleanStr(out);

      // Long-form includes match: only apply for terms >= 5 chars to avoid false positives
      if (cleanedPart.length >= 5 && cleanedOutput.length >= 5) {
        if (cleanedOutput.includes(cleanedPart) || cleanedPart.includes(cleanedOutput)) {
          return true;
        }
      }

      // Exact match for short terms
      if (cleanedPart === cleanedOutput) return true;

      // Compound keyword matching (both sides must contain the same compound term)
      // Intentionally excludes broad terms like '계획서', '예산서', '신청서', '보고서'
      const compoundKeywords = [
        '이력서', '회의록', '특수관계인', '계좌', '공시',
        '설립허가신청서', '추천신청서', '사업계획서', '수지예산서',
        '재산목록', '잔고증명', '취임승낙서', '세무확인서', '결산서',
        '발기인', '인적사항', '정수표'
      ];
      for (const kw of compoundKeywords) {
        if (cleanedPart.includes(kw) && cleanedOutput.includes(kw)) return true;
      }

      // "정관" special case: match only when output STARTS WITH 정관,
      // excluding '정관적합성', '확정정관...' (those are different documents)
      if (cleanedPart === '정관') {
        if (cleanedOutput.startsWith('정관') && !cleanedOutput.startsWith('정관적합성')) return true;
      }

      // Other targeted special cases
      if (cleanedPart.includes('승낙서') && cleanedOutput.includes('승낙서')) return true;
      if (cleanedPart.includes('재산증명') && cleanedOutput.includes('재산')) return true;
      if (cleanedPart.includes('잔고증명') && cleanedOutput.includes('잔고')) return true;
      if (cleanedPart.includes('사무실') && cleanedOutput.includes('사무소')) return true;
    }
  }
  return false;
}

function handleAdditionalFileUpload(event, stepId) {
  const file = event.target.files[0];
  if (!file) return;
  const docId = store.uploadAdditionalDocument(stepId, file);
  fileDB.save(docId, file);
}
window.handleAdditionalFileUpload = handleAdditionalFileUpload;

function renderApp() {
  renderSidebar();
  renderMainContent();
}

function renderSidebar() {
  const el = document.getElementById('sidebar');
  if (!el) return;
  el.innerHTML = `
    <div class="sidebar-nav">
      <div class="sidebar-label">카테고리</div>
      <div class="nav-buttons">
        <button class="nav-btn ${store.activeTab === 'plan' ? 'active' : 'inactive'}" onclick="store.setActiveTab('plan')">
          <span>${icons.layoutDashboard}</span><span>설립 기획</span>
        </button>
        <button class="nav-btn ${store.activeTab === 'progress' ? 'active' : 'inactive'}" onclick="store.setActiveTab('progress')">
          <span>${icons.gitMerge}</span><span>추진 경과</span>
        </button>
        <button class="nav-btn ${store.activeTab === 'docs' ? 'active' : 'inactive'}" onclick="store.setActiveTab('docs')">
          <span>${icons.fileCheck}</span><span>서류 준비</span>
        </button>
      </div>
    </div>
    <div class="sidebar-overview">
      <div class="overview-card">
        <div class="label">프로젝트 개요</div>
        <div class="overview-info">
          <div class="info-row"><span class="info-key">담당부서</span><span class="info-val">경영기획팀</span></div>
          <div class="info-row"><span class="info-key">담당PM</span><span class="info-val">김우진</span></div>
          <div class="info-row"><span class="info-key">목표 완료일<br><small style="font-size:0.625rem;color:#94a3b8;font-weight:400;">(공익법인등)</small></span><span class="info-val">2026. 12. 31</span></div>
        </div>
        <div class="progress-row" style="margin-top:0.5rem"><span class="text-slate-500">진행률</span><span class="pct" style="font-size:0.75rem;background:#dbeafe;color:#1e40af;padding:2px 10px;border-radius:20px;font-weight:700;">착수 준비중</span></div>
        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:5%"></div></div>
        <div class="current-stage-hl">
          <span class="current-stage-hl-label">현재 진행 단계</span>
          <span class="current-stage-hl-text">1단계. 재단법인 설립단계</span>
        </div>
      </div>
    </div>
    <div class="sidebar-spacer"></div>
    <div class="sidebar-simulators">
      <div class="sidebar-label">설립 시뮬레이터 연계</div>
      <button class="sim-btn${store.openSimulations.includes('fund') ? ' sim-btn-active' : ''}" onclick="store.toggleSimulation('fund')">
        <span>${icons.calculator}</span>
        <div><div class="sim-btn-title">자금 시뮬레이션</div><div class="sim-btn-desc">기금 출연 및 예산 수지 계산</div></div>
        ${store.openSimulations.includes('fund') ? '<span class="sim-btn-dot"></span>' : ''}
      </button>
      <button class="sim-btn${store.openSimulations.includes('stock') ? ' sim-btn-active' : ''}" onclick="store.toggleSimulation('stock')">
        <span>${icons.trendingUp}</span>
        <div><div class="sim-btn-title">비상장주식 가치평가</div><div class="sim-btn-desc">출연 예정 주식 가치 산정</div></div>
        ${store.openSimulations.includes('stock') ? '<span class="sim-btn-dot"></span>' : ''}
      </button>
    </div>
  `;
}

function renderMainContent() {
  const el = document.getElementById('main-content');
  if (!el) return;

  if (store.viewMode === 'overview') {
    document.body.classList.add('overview-mode');
    renderOverviewSection();
    return;
  }

  document.body.classList.remove('overview-mode');
  if (store.activeTab === 'plan') {
    el.innerHTML = `<div class="content-wrapper" id="concept-section"></div>`;
    renderConceptSection();
  } else if (store.activeTab === 'progress') {
    el.innerHTML = `<div class="content-wrapper" id="progress-section"></div>`;
    renderProgressSection();
  } else if (store.activeTab === 'docs') {
    el.innerHTML = `<div class="content-wrapper" id="docs-section"></div>`;
    renderDocsSection();
  }
}

// ── OVERVIEW SECTION (inline 종합현황) ───────────────────────────
function renderOverviewSection() {
  const el = document.getElementById('main-content');
  if (!el) return;
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#f8fafc;">
      <div class="overview-grid">
        <div class="kpi-card">
          <div class="overview-card-accent progress"></div>
          <div class="overview-card-title">1단계 재단법인 설립 진척률</div>
          <div class="overview-card-val" id="kpi-process-percent">0%</div>
          <div class="overview-card-desc" id="kpi-process-detail"></div>
        </div>
        <div class="kpi-card">
          <div class="overview-card-accent document"></div>
          <div class="overview-card-title">의무 서류 확보율</div>
          <div class="overview-card-val" id="kpi-doc-percent">0%</div>
          <div class="overview-card-desc" id="kpi-doc-detail"></div>
        </div>
        <div class="kpi-card">
          <div class="overview-card-accent milestone"></div>
          <div class="overview-card-title">차기 마일스톤 기한</div>
          <div class="overview-card-val" id="kpi-milestone-dday">D-15</div>
          <div class="overview-card-desc" id="kpi-milestone-name">설립허가 신청 예정</div>
        </div>
        <div class="kpi-card">
          <div class="overview-card-accent alert"></div>
          <div class="overview-card-title">보완 및 주의 필요</div>
          <div class="overview-card-val" style="color:#ef4444" id="kpi-warning-count">0건</div>
          <div class="overview-card-desc" id="kpi-warning-detail">규제 리스크 안전 범위</div>
        </div>
      </div>
      <div class="overview-panels">
        <div class="panel-container">
          <div class="panel-header">
            <h2 class="panel-title">통합 마스터 추진 경과 지도</h2>
            <span style="font-size:0.75rem;font-weight:700;color:#64748b">활성 공정 실시간 발광(Pulse)</span>
          </div>
          <div class="panel-body scrollbar-thin" id="master-timeline-body"></div>
        </div>
        <div style="display:flex;flex-direction:column;height:100%;overflow:hidden;">
          <div class="panel-container" style="flex:1;min-height:0;overflow:hidden;">
            <div class="panel-header">
              <h2 class="panel-title">
                <span class="doc-signal-light green" style="width:12px;height:12px;flex-shrink:0;"></span>
                필수 서류 신호등
              </h2>
            </div>
            <div class="panel-body scrollbar-thin" id="doc-signals-body"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  if (typeof renderMasterTimeline === 'function') renderMasterTimeline();
  if (typeof renderDocumentSignalLights === 'function') renderDocumentSignalLights();
  if (typeof calculateAndRenderMetrics === 'function') calculateAndRenderMetrics();
}

// ── CONCEPT SECTION ──────────────────────────────────────────────
function renderConceptSection() {
  const el = document.getElementById('concept-section');
  if (!el) return;
  el.innerHTML = `
    <div class="section-banner concept-banner">
      <div class="banner-bg" style="background-image:url('road_drone_view_banner.png'); background-position:58% 42%; background-size:cover;"></div>
      <div class="concept-banner-overlay"></div>
      <div class="banner-content" style="width:52%;">
        <div class="concept-banner-tag">PROJECT DX-FOUNDATION</div>
        <h2 class="banner-title">교육재단법인 설립 기획</h2>
        <p class="banner-desc">성공적인 비영리법인 설립을 위한 기본 개념 및 사업 범위를 정의합니다.<br>디지털 전환과 스마트 건설을 선도할 융합 인재 육성의 토대를 마련합니다.</p>
      </div>
    </div>
    <div class="concept-grid">
      <div class="concept-col left">
        <div class="concept-icon-row">${icons.bookOpen}<h4>비영리법인 개념</h4></div>
        <p class="concept-desc">학술, 종교, 자선, 기예, 사교 기타 영리 아닌 사업을 목적으로 하는 <strong>법인 (민법 제32조)</strong></p>
        <ul class="concept-list">
          <li><strong>설립:</strong> 주무관청 허가 후 법원 설립등기를 통해 법인격 취득</li>
          <li><strong>운영:</strong> 주무관청 지도·감독, 사업/결산보고서 제출 의무</li>
        </ul>
        <button class="concept-btn" onclick="store.setActiveConceptModal('law')">
          <span class="concept-btn-icon">${icons.gavel} 관련 법령 및 RULE</span>
          <span class="chevron">${icons.chevronRight}</span>
        </button>
      </div>
      <div class="concept-col right">
        <div class="concept-icon-row">${icons.building}<h4>법인 형태</h4></div>
        <p class="concept-desc">주목적 "연구"와 핵심사업인 "교육"이 통합된 <span class="highlight-sky">교육연구법인 형태</span></p>
        <ul class="concept-list">
          <li><strong>연구부문:</strong> BIM 원천기술 고도화, 국산 S/W 표준화, 연구 용역</li>
          <li><strong>교육부문:</strong> 엔지니어링 및 미래 인재 교육‧장학 사업</li>
        </ul>
        <button class="concept-btn" onclick="store.setActiveConceptModal('form')">
          <span class="concept-btn-icon">${icons.fileText} 법인 설립 기획(안)</span>
          <span class="chevron">${icons.chevronRight}</span>
        </button>
      </div>
      <div class="concept-col bottom-left">
        <div class="concept-icon-row">${icons.target}<h4>설립 목적 및 사업</h4></div>
        <ul class="concept-list" style="flex:1; margin-bottom:2rem">
          <li>통합형 스마트 건설기술 연구 개발 및 실용화를 통한 건설산업 생산성/안전성 향상</li>
          <li>BIM, Digital Twin 등 디지털전환 핵심기술 국산화 및 현장 확산</li>
          <li>실무형 전문 인력 양성 및 엔지니어링 분야 디지털전환 적용 역량 지원</li>
        </ul>
        <button class="concept-btn primary" onclick="store.setActiveConceptModal('business')">
          <span>법인 사업 상세 보기</span>
          <span class="chevron">${icons.chevronRight}</span>
        </button>
      </div>
      <div class="concept-col bottom-right">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem">
          <div class="concept-icon-row" style="margin-bottom:0">${icons.landmark}<h4>주무관청</h4></div>
          <span class="authority-badge">국토교통부 기술정책과</span>
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:0.625rem 0.875rem;margin-bottom:1rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 8h.01"/><path d="M11 12h1v4h1"/></svg>
          <span style="font-size:0.8rem;color:#1e40af;line-height:1.5;"><strong>기술정책과 박선희 주무관</strong> | BIM·스마트건설 분야의 연구·교육사업이 국토교통부 소관에 해당</span>
        </div>
        <p style="font-size:0.9375rem;color:#1f2937;font-weight:700;margin-bottom:1rem">주요 역할</p>
        <ul class="concept-list" style="flex:1">
          <li><strong>설립 단계:</strong> 사업 공익성 심사, 정관 검토, 설립 허가서 발급</li>
          <li><strong>운영 단계:</strong> 사업계획/결산보고 접수, 임원 취임 승인, 사업 지도·감독</li>
        </ul>
      </div>
    </div>
  `;
  renderConceptModal();
}

function renderConceptModal() {
  let el = document.getElementById('concept-modal');
  if (!store.activeConceptModal) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('div');
    el.id = 'concept-modal';
    document.body.appendChild(el);
  }
  const modal = store.activeConceptModal;
  const tagMap = { law: 'Law & Rule', form: 'Preview', business: 'Business' };
  const titleMap = { law: '관련 법령 및 RULE', form: '법인 설립 기획(안) 요약', business: '법인 사업 상세' };

  let bodyHtml = '';
  if (modal === 'law') {
    bodyHtml = `
      <div style="margin-bottom:2rem">
        <div class="slide-section-title">관련 법령 <span style="font-size:0.75rem;font-weight:500;color:#6b7280;margin-left:0.5rem">클릭 시 법제처 원문으로 이동</span></div>
        <div class="law-card law-card-link" onclick="openLawPopup('https://www.law.go.kr/법령/민법')">
          <div class="law-card-title">민법 제32조 (비영리법인의 설립과 허가) <span class="law-link-icon">${icons.externalLink}</span></div>
          <div class="law-card-desc">학술, 종교, 자선, 기예, 사교 기타 영리 아닌 사업을 목적으로 하는 사단 또는 재단은 주무관청의 허가를 얻어 이를 법인으로 할 수 있다.</div>
        </div>
        <div class="law-card law-card-link" onclick="openLawPopup('https://www.law.go.kr/법령/비영리법인의설립및감독에관한규칙')">
          <div class="law-card-title">비영리법인의 설립 및 감독에 관한 규칙 <span class="law-link-icon">${icons.externalLink}</span></div>
          <div class="law-card-desc">주무관청별 비영리법인 설립허가 절차, 제출 서류, 심사 기준 및 감독에 관한 세부 사항을 규정.</div>
        </div>
        <div class="law-card law-card-link" onclick="openLawPopup('https://www.law.go.kr/법령/상속세및증여세법')">
          <div class="law-card-title">상속세 및 증여세법 <span class="law-link-icon">${icons.externalLink}</span></div>
          <div class="law-card-desc">공익법인에 출연하는 재산에 대한 증여세 비과세 요건 및 의무사항 규정.</div>
        </div>
      </div>
      <div>
        <div class="slide-section-title">비영리법인 주요 RULE</div>
        <div class="rule-card">
          <div class="rule-card-title">1. 주식 보유 한도 (5%, 10%, 20% Rule)</div>
          <div class="rule-card-desc">
            <p style="font-weight:600;color:#1f2937;margin-bottom:0.75rem">재단을 통한 특정 회사의 지배권 행사를 방지하는 것이 주목적 (내국법인의 발행주식총수 대비)</p>
            <ul><li><strong>5% Rule (기본):</strong> 의결권 있는 주식 5% 초과 취득 시 증여세 부과</li><li><strong>10% Rule (성실공익법인):</strong> 운용소득 80% 이상 사용, 특수관계인 임원 제한 등 투명성 요건 충족 시 확대</li><li><strong>20% Rule (의결권 제한):</strong> 정관 내 '의결권 미행사' 명시 시 한도 확대 적용</li></ul>
          </div>
        </div>
        <div class="rule-card">
          <div class="rule-card-title">2. 자산 구성 비율 (30%, 50% Rule)</div>
          <div class="rule-card-desc">
            <p style="font-weight:600;color:#1f2937;margin-bottom:0.75rem">현금 비율을 높여 재단의 안정적 운영을 도모하는 것이 주목적 (총재산가액 대비)</p>
            <ul><li><strong>30% Rule (기본):</strong> 전체 총재산가액 중 특정 내국법인 주식이 30%를 초과 불가</li><li><strong>50% Rule (완화):</strong> 외부 회계감사, 전용계좌 개설 등 의무사항 이행 시 지분 비중 50%까지 확대</li></ul>
          </div>
        </div>
      </div>`;
  } else if (modal === 'form') {
    bodyHtml = `
      <div style="height:100%;display:flex;flex-direction:column;gap:0.75rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
          <span style="font-size:0.8125rem;color:#6b7280;">비영리법인 설립 기획(안)(2026.03.12).pdf</span>
          <button onclick="openSimNewWindow('01. 수행 완료 문서/비영리법인 설립 기획(안)(2026.03.12).pdf')" style="display:inline-flex;align-items:center;gap:5px;font-size:0.75rem;color:#1e3a8a;background:none;border:1px solid #bfdbfe;border-radius:5px;padding:4px 12px;cursor:pointer;white-space:nowrap;flex-shrink:0;"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> 새 창</button>
        </div>
        <iframe
          src="01. 수행 완료 문서/비영리법인 설립 기획(안)(2026.03.12).pdf"
          style="width:100%;flex:1;border:1px solid #e5e7eb;border-radius:6px;"
          title="비영리법인 설립 기획(안)">
        </iframe>
      </div>`;
  } else if (modal === 'business') {
    bodyHtml = `
      <div style="margin-bottom:2rem">
        <div class="biz-section-title-blue">${icons.target} 목적사업</div>
        <ul class="biz-list blue">
          <li><strong>①</strong> <span>신기술⋅신공법 개발, 지능형 엔지니어링 S/W 연구 개발</span></li>
          <li><strong>②</strong> <span>실무화 가능한 "제조형 건설업" 전환 연구 개발 (DfMA 등)</span></li>
          <li><strong>③</strong> <span>Digital Transformation 실현을 위한 건설기술(Digital Twin 등) 연구 개발</span></li>
          <li><strong>④</strong> <span>제4차산업과 스마트건설기술 국산화를 위한 연구 개발</span></li>
          <li><strong>⑤</strong> <span>국내외 인프라기술 분석 및 도입과 산업간 융·복합 연구 개발</span></li>
          <li><strong>⑥</strong> <span>스마트 건설기술 인증제 시행을 위한 운영/인증기관 업무 대행</span></li>
          <li><strong>⑦</strong> <span>건설기술자 대상 스마트 건설기술 양성 및 자질향상 교육⋅훈련</span></li>
          <li><strong>⑧</strong> <span>대학⋅연구소⋅기업 대상 스마트 건설기술 교육⋅훈련</span></li>
          <li><strong>⑨</strong> <span>스마트 건설기술 홍보 및 교육 활동 등</span></li>
        </ul>
      </div>
      <div>
        <div class="biz-section-title-amber">${icons.landmark} 수익사업</div>
        <ul class="biz-list amber">
          <li><strong>①</strong> <span>연구 성과물(S/W 및 도서 등) 판매 사업</span></li>
          <li><strong>②</strong> <span>민간 발주 설계 및 시공 관련 용역·컨설팅</span></li>
          <li><strong>③</strong> <span>정부/공공 발주 ENG. 사업 관련 설계용역</span></li>
          <li><strong>④</strong> <span>정부/공공 발주 제4차산업 관련 국가R&D 사업·용역</span></li>
          <li><strong>⑤</strong> <span>기타 스마트 건설기술 전반 용역 및 컨설팅</span></li>
          <li><strong>⑥</strong> <span>기타 경비조달을 위해 이사회의 승인을 받은 수익사업</span></li>
        </ul>
      </div>`;
  }

  const panelExtra = modal === 'form' ? ' slide-panel-wide' : '';
  el.innerHTML = `
    <div class="slide-modal-backdrop" id="concept-backdrop" onclick="handleBackdropClick(event)">
      <div class="slide-panel${panelExtra}" onclick="event.stopPropagation()">
        <div class="slide-header">
          <div>
            <span class="slide-tag">${tagMap[modal]}</span>
            <h2 class="slide-title">${titleMap[modal]}</h2>
          </div>
          <button class="slide-close" onclick="store.setActiveConceptModal(null)">${icons.x}</button>
        </div>
        <div class="slide-body${modal === 'form' ? ' slide-body-pdf' : ''}">${bodyHtml}</div>
      </div>
    </div>`;
}

function handleBackdropClick(e) {
  if (e.target.id === 'concept-backdrop') {
    store.setActiveConceptModal(null);
  }
}

// ── PROGRESS SECTION ─────────────────────────────────────────────
function renderProgressSection() {
  const el = document.getElementById('progress-section');
  if (!el) return;

  const activeStep = steps.find(s => s.id === store.activeStepId) || steps[1];
  const currentStage = store.activeProgressStage || activeStep.stage;

  const grouped = {};
  steps.forEach(s => {
    if (!grouped[s.stage]) grouped[s.stage] = { stageName: s.stageName, steps: [] };
    grouped[s.stage].steps.push(s);
  });

  const stageLabels = {
    1: '재단법인 설립단계',
    2: '공익법인등 지정단계',
    3: '공익법인등 운영단계'
  };
  const REAL_CURRENT_STAGE = 1;

  // ── Stage track (3 clickable nodes)
  let stageTrackHtml = '';
  [1, 2, 3].forEach((num, idx) => {
    const isSelected = num === currentStage;
    const grp = grouped[num] || { steps: [] };
    const total = grp.steps.length;
    const done = grp.steps.filter(s => s.status === 'done').length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isRealCurrent = num === REAL_CURRENT_STAGE;

    stageTrackHtml += `
      ${idx > 0 ? `<div class="stage-track-arrow">${icons.chevronRight}</div>` : ''}
      <button class="stage-node${isSelected ? ' selected' : ''}${isRealCurrent ? ' real-current' : ''}"
              onclick="store.setActiveProgressStage(${num})">
        ${isRealCurrent ? '<span class="stage-now-pin">● 현재 진행 중</span>' : ''}
        <div class="stage-node-num">${num}단계 (${pct}% 완료)</div>
        <div class="stage-node-name">${stageLabels[num]}</div>
      </button>`;
  });

  // ── Step cards for selected stage (slide-in from right)
  const stageSteps = (grouped[currentStage] || { steps: [] }).steps;
  let stepsHtml = '';
  stageSteps.forEach((step, idx) => {
    const isActive = step.id === store.activeStepId;
    const isDone = step.status === 'done';
    const isProgress = step.status === 'progress';
    const isPriority = step.id === '2-2' || step.id === '2-4';
    const dotClass = isDone ? 'done' : (isProgress ? 'progress' : 'pending');
    const contentClass = isActive ? 'active' : (isProgress ? 'progress' : 'pending');
    const connectColor = isDone ? '#0ea5e9' : '#e5e7eb';

    stepsHtml += `
      <div class="step-card${isActive ? ' active' : ''}${isPriority ? ' priority' : ''}" onclick="store.setActiveStepId('${step.id}')">
        <div class="step-indicator">
          ${idx < stageSteps.length - 1 ? `<div class="step-connect-line" style="background:${connectColor}"></div>` : ''}
          <div class="step-dot ${dotClass}${isPriority && !isDone && !isProgress ? ' priority' : ''}">
            ${isDone ? icons.checkCircle2 : `<span>${idx + 1}</span>`}
          </div>
        </div>
        <div class="step-content ${contentClass}${isPriority && !isActive ? ' priority' : ''}">
          ${isProgress ? `<div class="step-current-badge">✓ 현재</div>` : ''}
          <div class="step-name-row">
            <div class="step-name">${step.title}</div>
            ${isPriority ? `<span class="priority-badge">★ 핵심</span>` : ''}
          </div>
          <div class="step-duration">${step.duration}</div>
          ${step.deadline ? `<div class="step-deadline-label">${step.deadline}</div>` : ''}
        </div>
      </div>`;
  });

  // ── Detail panel content
  // Include same-stage docs + cross-stage docs whose title matches this step's outputs
  const stageDocs = documentData.filter(d =>
    d.stageId === activeStep.stage || doesDocMatchStepOutputs(d.title, activeStep.outputs)
  );

  // Smart document matching: filter documents that actually match this step's outputs
  const uploadedItems = stageDocs
    .map(d => ({ docData: d, upload: store.uploadedDocuments[d.id] }))
    .filter(item => item.upload && item.upload.status === 'done' && doesDocMatchStepOutputs(item.docData.title, activeStep.outputs));
  const hasUploads = uploadedItems.length > 0;

  const tasksHtml = activeStep.tasks.map(t => `
    <li class="task-item">${icons.checkSquare}<span>${t}</span></li>`).join('');

  const notesHtml = activeStep.notes && activeStep.notes.length > 0 ? `
    <div class="notes-box" style="margin-top:2rem">
      <div class="notes-title"><span class="notes-excl">!</span>유의사항</div>
      <ul class="notes-list">${activeStep.notes.map(n => `<li>${n}</li>`).join('')}</ul>
    </div>` : '';

  const outputsHtml = activeStep.outputs.map(out => {
    const matchedItem = uploadedItems.find(item => doesDocMatchStepOutputs(item.docData.title, [out]));
    const matched = !!matchedItem;
    const previewBtn = matched
      ? `<button class="upload-doc-preview-btn" onclick="showDocPreview('${matchedItem.docData.id}')" title="미리보기" style="flex-shrink:0;">${icons.eye}</button>`
      : '';
    return `
      <div class="output-item ${matched ? 'matched' : 'normal'}" style="justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:0.75rem;flex:1;min-width:0;">
          <div class="output-icon ${matched ? 'matched' : 'normal'}">${matched ? icons.checkCircle2 : icons.fileText}</div>
          <span class="output-name ${matched ? 'matched' : 'normal'}">${out}</span>
        </div>
        ${previewBtn}
      </div>`;
  }).join('');

  let docPreviewHtml = '';
  if (hasUploads) {
    docPreviewHtml = `<ul class="upload-doc-list">${uploadedItems.map(({ docData, upload }) => `
      <li class="upload-doc-item">
        <div class="upload-doc-file-icon">${icons.fileText}</div>
        <div class="upload-doc-info">
          <div class="upload-doc-title">${docData.title}</div>
          <div class="upload-doc-filename">${upload.file.name}</div>
        </div>
        <button class="upload-doc-preview-btn" onclick="showDocPreview('${docData.id}')" title="미리보기">${icons.eye}</button>
      </li>`).join('')}</ul>`;
  } else {
    docPreviewHtml = `
      <div class="doc-empty" style="aspect-ratio:auto;padding:1.25rem;border-style:dashed;">
        <div class="doc-empty-title" style="font-size:0.8125rem;color:#9ca3af;">연계된 공식 준비 서류가 없습니다.</div>
      </div>`;
  }

  // Additional Uploads (추가 업로드 산출물)
  const stepId = activeStep.id;
  const additionalItems = store.additionalDocuments[stepId] || [];
  const hasAdditional = additionalItems.length > 0;

  let additionalDocsHtml = '';
  if (hasAdditional) {
    additionalDocsHtml = `<ul class="upload-doc-list" style="margin-bottom: 0.75rem;">${additionalItems.map(d => `
      <li class="upload-doc-item">
        <div class="upload-doc-file-icon" style="background:#f0fdf4;border-color:#bbf7d0;">${icons.fileText}</div>
        <div class="upload-doc-info">
          <div class="upload-doc-title">${d.name}</div>
          <div class="upload-doc-filename">추가 산출물</div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="upload-doc-preview-btn" onclick="showDocPreview('${d.id}')" title="미리보기">${icons.eye}</button>
          <button class="upload-doc-preview-btn" onclick="store.deleteAdditionalDocument('${stepId}', '${d.id}')" title="삭제" style="color:#ef4444;border-color:#fca5a5;">${icons.trash2}</button>
        </div>
      </li>`).join('')}</ul>`;
  } else {
    additionalDocsHtml = `
      <div class="doc-empty" style="aspect-ratio:auto;padding:1.25rem;margin-bottom:0.75rem;border-style:dashed;">
        <div class="doc-empty-title" style="font-size:0.8125rem;color:#9ca3af;">추가 업로드된 문서가 없습니다.</div>
      </div>`;
  }

  const additionalUploadBoxHtml = `
    <div class="additional-upload-section" style="margin-top:1.25rem;border-top:1px dashed #e5e7eb;padding-top:1.25rem;">
      <div class="upload-section-header" style="margin-bottom:0.75rem;">
         <span class="upload-section-title" style="font-size:0.875rem;font-weight:700;">기타 단계별 서류 (추가 업로드)</span>
         <span class="upload-status-badge ${hasAdditional ? 'done' : 'none'}">${hasAdditional ? `${additionalItems.length}건 업로드됨` : '없음'}</span>
      </div>
      
      ${additionalDocsHtml}
      
      <div class="dropzone" id="additional-dropzone-${stepId}" 
           onclick="document.getElementById('additional-file-input-${stepId}').click()"
           style="padding:1rem;min-height:auto;aspect-ratio:auto;border-width:1.5px;border-style:dashed;border-radius:8px;background:#fafafa;transition:all 0.2s;">
        <input type="file" id="additional-file-input-${stepId}" style="display:none" accept=".pdf,.docx,.txt,.hwp"
          onchange="handleAdditionalFileUpload(event,'${stepId}')"
          onclick="this.value=''">
        <div style="display:flex;align-items:center;gap:8px;color:#4b5563;justify-content:center;">
          <span style="color:#3b82f6;display:flex;align-items:center;">${icons.uploadCloud}</span>
          <span style="font-size:0.8125rem;font-weight:600;color:#4b5563;">클릭하여 추가 서류 업로드</span>
        </div>
        <span style="font-size:0.6875rem;color:#9ca3af;margin-top:2px;display:block;text-align:center;">제출서류 이외의 개별 발생 문서 보관</span>
      </div>
    </div>
  `;

  el.innerHTML = `
    <div class="stage-track-wrapper">
      <div class="stage-track">${stageTrackHtml}</div>
    </div>
    <div class="stage-steps-wrapper">
      <div class="stage-steps-scroll scrollbar-thin" id="stage-steps-anim">${stepsHtml}</div>
    </div>
    <div class="progress-detail">
      <div class="detail-left">
        <div class="detail-header">
          <div class="detail-icon">${icons.target}</div>
          <div>
            <span class="detail-step-tag">STEP ${activeStep.id}</span>
            <div class="detail-step-title">${activeStep.title}</div>
          </div>
        </div>
        <p class="detail-overview">${activeStep.overview}</p>
        <div class="detail-meta">
          <div class="meta-item"><span class="meta-key">담당</span><span class="meta-val">${activeStep.owner}</span></div>
          <div class="meta-item"><span class="meta-key">예상 기간</span><span class="meta-val">${activeStep.duration}</span>${activeStep.deadline ? `<span class="deadline-chip">${activeStep.deadline}</span>` : ''}</div>
          <div class="meta-item"><span class="meta-key">법적 근거</span><span class="meta-val">${activeStep.basis}</span></div>
        </div>
        <div class="tasks-title"><div class="tasks-bar"></div>주요 과업</div>
        <ul class="task-list">${tasksHtml}</ul>
        ${notesHtml}
      </div>
      <div class="doc-panel">
        <div class="doc-card">
          <div class="doc-card-header">
            <span>관련 산출물</span>
            <span class="doc-count-badge">공식 산출물 ${activeStep.outputs.length}건</span>
          </div>
          <div class="output-list">${outputsHtml}</div>
          <div class="upload-section" style="border-top:1px solid #f3f4f6;padding-top:1.25rem;">
            <div class="upload-section-header" style="margin-bottom:0.75rem;">
              <span class="upload-section-title" style="font-size:0.875rem;font-weight:700;">공식 준비 서류 연계</span>
              <span class="upload-status-badge ${hasUploads ? 'done' : 'none'}">${hasUploads ? `${uploadedItems.length}건 연계됨` : '미제출'}</span>
            </div>
            ${docPreviewHtml}
          </div>
          
          ${additionalUploadBoxHtml}
        </div>
      </div>
    </div>`;
}

// ── DOCS SECTION ─────────────────────────────────────────────────
function renderDocsSection() {
  const el = document.getElementById('docs-section');
  if (!el) return;

  const currentDocs = documentData.filter(d => d.stageId === store.activeDocStageId);

  const tabsHtml = documentStages.map(s => `
    <button class="stage-tab ${store.activeDocStageId === s.id ? 'active' : 'inactive'}"
      onclick="store.setActiveDocStageId(${s.id})">
      ${s.name}
      ${store.activeDocStageId === s.id ? '<span class="stage-tab-line"></span>' : ''}
    </button>`).join('');

  const docsListHtml = currentDocs.map((doc, idx) => {
    const isActive = doc.id === store.activeDocId;
    const uploadState = store.uploadedDocuments[doc.id];
    const isDone = uploadState?.status === 'done';
    return `
      <div class="doc-item ${isActive ? 'active' : 'inactive'}" onclick="store.setActiveDocId('${doc.id}')">
        <div class="doc-item-left">
          <div class="doc-item-status">
            ${isDone ? `<span class="done-icon">${icons.checkCircle2}</span>` : `<span class="pending-icon">${icons.circle}</span>`}
          </div>
          <span class="doc-item-num">${String(idx + 1).padStart(2, '0')}</span>
          <span class="doc-item-name ${isDone ? 'done' : 'pending'}">${doc.title}</span>
        </div>
        <div class="doc-item-right">
          <span class="${isDone ? 'doc-item-done-text' : 'doc-item-pending-text'}">${isDone ? '완료' : '미완료'}</span>
          <div class="doc-actions" style="opacity:${isDone || isActive ? '1' : '0'}">
            <button class="doc-action-btn view" title="미리보기" onclick="event.stopPropagation(); showDocPreview('${doc.id}')">${icons.eye}</button>
            <button class="doc-action-btn del" title="삭제" onclick="event.stopPropagation(); ${isDone ? `store.deleteDocument('${doc.id}')` : ''}" style="opacity:${isDone ? '1' : '0.4'};cursor:${isDone ? 'pointer' : 'not-allowed'}">${icons.trash2}</button>
          </div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="docs-split">
      <div class="docs-left">
        <div class="stage-tabs">${tabsHtml}</div>
        <div class="checklist-header">
          <span class="checklist-title">서류 체크리스트</span>
          <span class="checklist-count">총 ${currentDocs.length}종</span>
        </div>
        <div class="checklist-list scrollbar-thin">${docsListHtml}</div>
      </div>
      <div class="docs-right" id="verify-container"></div>
    </div>`;

  renderVerificationView();
}

function renderVerificationView() {
  const el = document.getElementById('verify-container');
  if (!el) return;

  const activeDoc = documentData.find(d => d.id === store.activeDocId);
  const docState = store.uploadedDocuments[store.activeDocId];
  const valStatus = docState?.status || 'idle';

  const statusText = valStatus === 'idle' ? '대기 중' : valStatus === 'checking' ? '분석 중...' : '검증 완료';
  const statusClass = valStatus;

  let mainText = valStatus === 'done' && docState?.file
    ? `<span class="dropzone-main uploaded">업로드 완료: ${docState.file.name}</span>`
    : `<span class="dropzone-main">여기를 클릭하여 문서 업로드</span>`;

  el.innerHTML = `
    <div>
      <div class="verify-title">${activeDoc ? `'${activeDoc.title}' 검증` : '문서 자동 검증'}</div>
      <p class="verify-desc">지정된 문서를 업로드하여 필수 요건 누락 및 법적 기준 준수 여부를 검증합니다.</p>
      <div class="dropzone" id="dropzone-${store.activeDocId}" onclick="document.getElementById('file-input-${store.activeDocId}').click()">
        <input type="file" id="file-input-${store.activeDocId}" style="display:none" accept=".pdf,.docx,.txt,.hwp"
          onchange="handleFileUpload(event,'${store.activeDocId}')"
          onclick="this.value=''">
        ${icons.uploadCloud}
        ${mainText}
        <span class="dropzone-sub">PDF, DOCX, HWP 지원</span>
      </div>
      <div class="log-box" id="log-box">
        <div class="log-header">
          <span class="log-header-title">검증 현황 로그</span>
          <span class="log-status-badge ${statusClass}">${statusText}</span>
        </div>
        <div class="log-entries" id="log-entries"></div>
        ${valStatus === 'done' ? (() => {
        const comp = store.complianceData && store.complianceData[store.activeDocId];
        const rate = comp ? comp.rate : 98;
        const grade = rate >= 90 ? 'A (적합)' : rate >= 70 ? 'B (보완 필요)' : 'C (재검토 필요)';
        return `
        <div class="compliance-footer">
          <div><span class="compliance-rate">준수율</span><span class="compliance-num">${rate}<small>%</small></span></div>
          <div class="compliance-result"><span class="compliance-label">예상 결과</span><span class="compliance-grade">${grade}</span></div>
        </div>
        <button class="doc-preview-open-btn" onclick="showDocPreview('${store.activeDocId}')">${icons.eye} 업로드 문서 미리보기</button>`;
      })() : ''}
      </div>
    </div>`;

  renderLogs(store.activeDocId);
}

function renderLogs(docId) {
  const logEl = document.getElementById('log-entries');
  if (!logEl) return;
  const logs = store.verifyLogs && store.verifyLogs[docId];
  const docState = store.uploadedDocuments[docId];
  const activeDoc = documentData.find(d => d.id === docId);

  let defaultLogs;
  if (!docState) {
    defaultLogs = [`[system] '${activeDoc?.title}' 문서를 업로드하면 세부 규칙 검증 프로세스가 시작됩니다.`];
  } else if (docState.status === 'done') {
    defaultLogs = [`[info] 파일 분석 완료: "${docState.file?.name}"`, `[pass] 필수 조항 확인됨`, `[pass] 요건 부합`];
  } else {
    defaultLogs = logs || [`[system] 문서를 업로드하면 세부 규칙 검증 프로세스가 시작됩니다.`];
  }

  const toShow = logs || defaultLogs;
  logEl.innerHTML = toShow.map(log => {
    let type = 'system';
    if (log.startsWith('[info]')) type = 'info';
    else if (log.startsWith('[pass]')) type = 'pass';
    else if (log.startsWith('[warn]')) type = 'warn';
    const text = log.substring(log.indexOf(']') + 1).trim();
    return `<div class="log-entry"><span class="log-dot ${type}"></span><span class="log-text ${type}">${text}</span></div>`;
  }).join('');
}

function handleFileUpload(event, docId) {
  const file = event.target.files[0];
  if (!file) return;

  if (!store.verifyLogs) store.verifyLogs = {};
  if (!store.complianceData) store.complianceData = {};

  store.uploadDocument(docId, file);
  store.uploadedDocuments[docId].status = 'checking';
  store.verifyLogs[docId] = [`[info] 파일 업로드: "${file.name}" — 검증 시작`];
  fileDB.save(docId, file); // Blob → IndexedDB (새로고침 후 미리보기 지원)

  renderDocsSection();
  renderLogs(docId);

  const rules = (docValidationRules && docValidationRules[docId]) || [
    { type: 'info', msg: '문서 형식 분석 중...' },
    { type: 'pass', msg: '필수 항목 기재 확인됨' },
    { type: 'pass', msg: '관련 법령 요건 부합 확인' },
    { type: 'warn', msg: '세부 텍스트 검증은 모의 검증 단계입니다.' }
  ];

  let delay = 600;
  rules.forEach((rule, idx) => {
    setTimeout(() => {
      store.verifyLogs[docId].push(`[${rule.type}] ${rule.msg}`);
      renderLogs(docId);

      if (idx === rules.length - 1) {
        const passCount = rules.filter(r => r.type === 'pass').length;
        const warnCount = rules.filter(r => r.type === 'warn').length;
        const rate = Math.round((passCount / (passCount + warnCount)) * 100);
        store.complianceData[docId] = { rate, passCount, warnCount };
        store.updateDocumentStatus(docId, 'done');
      }
    }, delay);
    delay += 500;
  });
}

async function showDocPreview(docId) {
  let doc;
  let title = '문서 미리보기';
  let filename = '';

  if (typeof docId === 'string' && docId.startsWith('add-')) {
    const parts = docId.split('-');
    const stepId = `${parts[1]}-${parts[2]}`;
    const stepDocs = store.additionalDocuments[stepId] || [];
    doc = stepDocs.find(d => d.id === docId);
    if (doc) {
      title = `추가 산출물: ${doc.name}`;
      filename = doc.name;
    }
  } else {
    doc = store.uploadedDocuments[docId];
    const docData = documentData.find(d => d.id === docId);
    if (docData) title = docData.title;
    if (doc) filename = (doc.file && doc.file.name) ? doc.file.name : '';
  }

  if (!doc) {
    if (typeof docId === 'string' && !docId.startsWith('add-')) {
      store.setActiveTab('docs');
      store.setActiveDocId(docId);
    }
    return;
  }

  const PRELOADED_PATHS = {
    '1-1': '서류서식/1. 법인설립허가신청서.pdf',
    '1-2': '서류서식/2. 설립취지서.pdf',
    '1-7': '서류서식/(예시) 정관.pdf',
    '1-13': '서류서식/(예시) 사업계획서.pdf'
  };

  let url = null;
  if (doc.path) {
    url = encodeURI(doc.path);
  } else if (doc.file instanceof Blob) {
    url = URL.createObjectURL(doc.file);
  } else {
    // 새로고침 후: IndexedDB에서 Blob 복원
    const blob = await fileDB.load(docId);
    if (blob) {
      url = URL.createObjectURL(blob);
    } else if (PRELOADED_PATHS[docId]) {
      // 사용자 업로드로 path가 덮어씌워진 경우 기본 경로 복원
      url = encodeURI(PRELOADED_PATHS[docId]);
    }
  }

  const existing = document.getElementById('doc-viewer-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.id = 'doc-viewer-modal';

  const newWindowBtn = url
    ? `<button onclick="openSimNewWindow('${url}')" title="새 창에서 열기"
        style="display:inline-flex;align-items:center;gap:4px;font-size:0.75rem;color:white;
               background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.35);
               border-radius:5px;padding:3px 10px;cursor:pointer;white-space:nowrap;flex-shrink:0;">
        새 창
      </button>`
    : '';

  const bodyHtml = url
    ? `<iframe class="doc-viewer-frame" src="${url}"></iframe>`
    : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                   height:100%;color:#6b7280;gap:1rem;padding:2rem;text-align:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none"
             stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
          <line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="11" x2="15" y2="11"/>
        </svg>
        <p style="font-size:0.9375rem;font-weight:700;color:#374151;margin:0;">미리보기를 사용할 수 없습니다</p>
        <p style="font-size:0.8125rem;line-height:1.7;margin:0;color:#6b7280;">
          페이지 새로고침 후에는 업로드 파일에 접근할 수 없습니다.<br>
          파일을 <strong>다시 업로드</strong>하면 미리보기가 가능합니다.
        </p>
        <button onclick="closeDocViewer(); store.setActiveTab('docs'); store.setActiveDocId('${docId}');"
                style="margin-top:0.5rem;padding:8px 20px;background:#1e3a8a;color:white;border:none;
                       border-radius:8px;font-size:0.875rem;font-weight:600;cursor:pointer;">
          서류 준비로 이동
        </button>
      </div>`;

  modal.innerHTML = `
    <div class="doc-viewer-backdrop" onclick="closeDocViewer()"></div>
    <div class="doc-viewer-panel">
      <div class="doc-viewer-header">
        <div class="doc-viewer-header-info">
          <span class="doc-viewer-icon">${icons.fileText}</span>
          <div>
            <div class="doc-viewer-title">${title}</div>
            ${filename ? `<div class="doc-viewer-filename">${filename}</div>` : ''}
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          ${newWindowBtn}
          <button class="doc-viewer-close" onclick="closeDocViewer()">${icons.x}</button>
        </div>
      </div>
      ${bodyHtml}
    </div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.querySelector('.doc-viewer-panel').classList.add('open'));
}

function closeDocViewer() {
  const modal = document.getElementById('doc-viewer-modal');
  if (!modal) return;
  const panel = modal.querySelector('.doc-viewer-panel');
  panel.classList.remove('open');
  setTimeout(() => modal.remove(), 300);
}

// ── SIMULATION AREA (header·sidebar 유지, 콘텐츠 영역 전체) ──────
function renderSimulationArea() {
  const el = document.getElementById('sim-area');
  if (!el) return;

  const sims = store.openSimulations;
  if (sims.length === 0) {
    el.innerHTML = '';
    el.classList.remove('open');
    return;
  }

  el.classList.add('open');
  el.innerHTML = sims.map((type, idx) => {
    const isFund = type === 'fund';
    const title = isFund ? '자금 수지 시뮬레이션' : '비상장주식 가치평가';
    const tagLabel = isFund ? 'FUND SIM' : 'STOCK VAL';
    const tagClass = isFund ? 'fund' : 'stock';
    const srcUrl = isFund
      ? 'sim-fund.html'
      : 'sim-stock.html?embed=1';
    return `
      ${idx > 0 ? '<div class="sim-pane-divider"></div>' : ''}
      <div class="sim-pane">
        <div class="sim-pane-header">
          <span class="sim-panel-tag ${tagClass}">${tagLabel}</span>
          <span class="sim-panel-title">${title}</span>
          <div class="sim-panel-controls">
            <button class="sim-ctrl-btn" title="새 창에서 열기" onclick="openSimNewWindow('${srcUrl}')">${icons.externalLink}</button>
          </div>
          <button class="sim-panel-close" title="닫기" onclick="store.closeSimulation('${type}')">${icons.x}</button>
        </div>
        <div class="sim-pane-body">
          <iframe class="sim-panel-iframe" src="${srcUrl}" allowfullscreen></iframe>
        </div>
      </div>`;
  }).join('');
}

function openSimNewWindow(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openLawPopup(url) {
  window.open(url, 'lawPopup', 'width=1100,height=760,scrollbars=yes,resizable=yes,location=yes,toolbar=yes');
}

function previewDocument(docId) {
  const doc = store.uploadedDocuments[docId];
  if (!doc || !doc.file) return;
  const url = URL.createObjectURL(doc.file);
  window.open(url, 'docPreview', 'width=1000,height=750,scrollbars=yes,resizable=yes');
}

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const persistedTab = localStorage.getItem('activeTab');
  const persistedStepId = localStorage.getItem('activeStepId');
  if (persistedTab) {
    store.activeTab = persistedTab;
    localStorage.removeItem('activeTab');
  }
  if (persistedStepId) {
    store.activeStepId = persistedStepId;
    const step = steps.find(s => s.id === persistedStepId);
    if (step) store.activeProgressStage = step.stage;
    localStorage.removeItem('activeStepId');
  }
  renderApp();
});
