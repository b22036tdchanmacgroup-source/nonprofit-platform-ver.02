/* ============================================================
   한국인프라기술연구원 - 비영리법인 설립 기획 플랫폼
   Interaction script (v2 : 3-stage hierarchical progress)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 탭 전환 ---------- */
  const tabs   = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.id === `panel-${target}`));
    });
  });

  /* ====================================================
     단계별 데이터 (PDF "연구·교육재단 설립 프로세스" 기반)
     ==================================================== */
  const stageMeta = {
    '1': { no: 'STAGE 01', name: '재단법인 설립단계' },
    '2': { no: 'STAGE 02', name: '공익법인등 지정단계' },
    '3': { no: 'STAGE 03', name: '공익법인등 운영단계' }
  };

  const stepData = {

    /* ============ STAGE 1 : 재단법인 설립단계 ============ */
    '1-1': {
      title: '설립 계획 수립',
      status: 'done',
      overview: '법인의 설립 목적·사업 계획을 기획하고, 출연재산 조건 및 특수관계인 해당여부 등 법인 설립 주요 요건을 사전에 점검하는 단계입니다.',
      owner:    '설립추진 TF',
      duration: '3 ~ 6주',
      basis:    '민법 제32조',
      tasks: [
        '법인의 설립 목적 및 사업 계획 기획',
        '법인 설립 주요 요건 확인 (출연재산 조건, 특수관계인 해당여부 사전상담 등)',
        '설립하려는 목적사업을 관할하는 <strong>주무관청 확인</strong> (국토교통부 가정)',
        '재단법인으로 추진하고자 하는 논리적 근거 정립 — 중립적 표준화, 공익적 기술 나눔 등',
        '설립 이후 3~5년에 대한 중기 안정적 운영 시나리오 수립'
      ],
      outputs: [
        '<strong>재단법인 설립 계획서</strong> (설립 취지서)',
        '상세 사업계획서 (목적사업·수익사업, 대상·범위·예산 등)',
        '공익법인등을 위한 규제 리스크 점검 보고서',
        '홈페이지 기획(안)'
      ],
      notes: [
        '"재단법인" 추진의 명분 — 영리 조직이 수행하기 어려운 중립적 표준화·공익적 기술 나눔에 대한 논리 필요',
        '목적성에 따라 주무관청이 결정되므로 사업의 성격을 명확히 정의할 것',
        '"기업의 보조 수단" 오해 불식 장치 — 출연자·출연기관의 영업/매출/경영권을 보조하지 않는다는 내부 합의서 준비'
      ]
    },

    '1-2': {
      title: '재산 출연 계획 및 세무점검',
      status: 'progress',
      overview: '출연재산 종류와 비율에 따른 납세 시나리오를 작성하고, 주식 보유 한도·공익목적사용 의무 등을 고려한 출연 계획을 수립하는 단계입니다.',
      owner:    '설립추진 TF · 세무 자문',
      duration: '2 ~ 4주',
      basis:    '상속세 및 증여세법 제48조',
      tasks: [
        '출연재산의 종류·비율에 따른 <strong>납세 시나리오 작성</strong>',
        '주식 보유 한도 점검 (출연 5%, 의무이행 미충족 시 10%, 자산·장학·사회복지 20%)',
        '주식/현금 비율 및 공익목적사용 의무 사항 고려한 출연 계획 수립',
        '출연 주식의 주식 평가 (보수적 산정 → 세무 리스크 최소화)',
        '안정적 운영을 위한 충분한 현금(보통재산) 보유 여부 검토'
      ],
      outputs: [
        '출연 시나리오별 리스크 최소화 계획서',
        '<strong>주식평가서</strong> (전문가 자문)',
        '특수관계인 구성명세서',
        '수익용 재산 수익률 입증 서류 (최근 3년 배당 성향)'
      ],
      notes: [
        '출연 5%를 초과하는 주식 출연 시 의무이행 사항 강화 — 외부감사·전용계좌개설 및 사용·결산서류 공시',
        '재단법인의 총재산가액 대비 계열기업 주식 30% (외부감사·전용계좌 등 이행 시 50%) 이내',
        '주식의 기본재산 귀속 여부, 보통재산과의 비율을 사전에 결정'
      ]
    },

    '1-3': {
      title: '발기인 및 임원 구성',
      status: 'pending',
      overview: '재단의 발기인을 모집하고 임원진(이사장·이사·감사)을 구성하며, 국세청 특수관계인 사전상담제를 활용해 구성의 적법성을 점검하는 단계입니다.',
      owner:    '설립추진 TF',
      duration: '3 ~ 5주',
      basis:    '공익령 제7조, 상증령 제38조',
      tasks: [
        '발기인 모집 (개인 / 법인) 및 약력 정리',
        '임원 명부 작성 — 이사장, 이사, 감사',
        '국세청의 <strong>특수관계인 해당여부 사전상담제</strong> 활용',
        '이사진의 전문 분야별 역할 분담 (기술·재무·법무·운영 등)',
        '임원 취임 예정자별 동의 수령 및 인적사항 확인'
      ],
      outputs: [
        '발기인 인적사항 서류 (성명·생년월일·주소·약력)',
        '임원 취임 예정자 인적사항 및 이력서',
        '<strong>임원 취임승낙서</strong>',
        '인감증명서, 주민등록등본'
      ],
      notes: [
        '이사회 명단 중 <strong>특수관계인 비율 1/5 미만</strong> 필수 — 위반 시 공익법인 지정 불가',
        '임원의 임직원으로의 취임 제한 규정 확인',
        '주요 약력은 법인의 목적사업과 관련된 것 중심으로 3~4개 기재'
      ]
    },

    '1-4': {
      title: '정관 작성',
      status: 'pending',
      overview: '법인의 기본 규범인 정관과 사업계획서·수지예산서를 작성합니다. 공익법인 지정을 위한 필수 조항을 사전에 반영해야 합니다.',
      owner:    '설립추진 TF · 법무 자문',
      duration: '4 ~ 6주',
      basis:    '민법 제40조, 제43조',
      tasks: [
        '법인의 목적·명칭·사무소 소재지·자산 등 정관 작성 및 기명날인',
        '이사의 임면, 사원 자격의 득실, 존립시기·해산사유 조항 반영',
        '<strong>공익법인 필수 의무사항을 정관에 삽입</strong>',
        '사업계획서 작성 (목적사업·수익사업, 시행시기·장소·내용·소요예산)',
        '수지예산서 작성 (수입·지출 항목별, 사업계획과 연계)'
      ],
      outputs: [
        '<strong>정관</strong> (법인의 기본규범)',
        '사업계획서',
        '수지예산서 (사업 제1차년도 출연금·기본재산 편입액 일치)'
      ],
      notes: [
        '소득의 사용 비율 명시 — <strong>운용소득의 80% 이상 공익목적사업 사용</strong>',
        '목적사업·수익사업의 개념적 분리와 회계 별도 계정 항목 명시',
        '홈페이지 공시 의무, 자기내부거래 금지, 해산 시 잔여재산 귀속 사항',
        '의결권 행사 금지 조항 (주식 출연 한도 20%인 경우)',
        '하반기 신청 시 다음 연도를 설립연도로 간주하여 작성'
      ]
    },

    '1-5': {
      title: '창립총회 개최',
      status: 'pending',
      overview: '발기인 총회를 개최하여 정관·임원·사업계획·예산 등 설립에 필요한 모든 의안을 의결하는 단계입니다.',
      owner:    '발기인 일동',
      duration: '1 ~ 2주',
      basis:    '공익령 제4조 제1항 제8호',
      tasks: [
        '총회 의장 선출 및 설립취지 채택',
        '법인 공식 명칭 결정',
        '<strong>정관(안) 심의 및 승인</strong>',
        '출연재산(안) 채택 (기본재산·보통재산 구분)',
        '임원 선임 및 임기 결정, 이사장 선출',
        '사업계획서·수지예산서(안) 심의 및 승인',
        '사무소 설치 및 법인조직·상근임직원 정수 책정'
      ],
      outputs: [
        '<strong>창립(발기인) 총회 회의록</strong>',
        '총회 사진 및 참석자 서명부',
        '확정 정관 및 임원 명부'
      ],
      notes: [
        '회의록 <strong>장마다 인감 간인</strong>, 마지막 장에 전원 성명 기재 후 인감 날인 필수',
        '의결 사항은 안건별로 명확히 기재 — 전원 찬성 / 다수결 등',
        '결석 회원 명단도 회의록에 기재'
      ]
    },

    '1-6': {
      title: '주무관청 확인 및 사전 점검',
      status: 'pending',
      overview: '설립 허가 신청 전 주무관청(국토교통부) 담당부서와 사전 협의를 진행하여 정관 및 신청 서류를 사전 점검하는 단계입니다.',
      owner:    '설립추진 TF',
      duration: '2 ~ 3주',
      basis:    '국토부 비영리법인 설립 및 감독 규칙 제3조',
      tasks: [
        '주무관청 담당부서와의 사전 협의 (사업 목적성, 적합성 확인)',
        '정관 중심의 재단법인 설립 관련 사전 검토',
        '신청 서류 일체에 대한 주무관청의 사전 점검 요청',
        '보완 요청 사항에 대한 대응 계획 수립'
      ],
      outputs: [
        '주무관청 사전 협의 결과서',
        '신청 서류 사전 점검 의견 반영본'
      ],
      notes: [
        '국토교통부를 주무관청으로 하는 경우, 담당부서와의 사전 협의가 필수',
        '사업 목적성·주무관청 적합성에 대한 명확한 논리 준비',
        '사전 점검에서 지적된 사항은 정관·사업계획서 등에 반영'
      ]
    },

    '1-7': {
      title: '주무관청 설립 허가 신청',
      status: 'pending',
      overview: '주무관청(국토교통부)에 설립 허가 신청 서류 일체를 제출하고 실사·심사 절차를 거치는 핵심 단계입니다.',
      owner:    '설립추진 TF · 법무사',
      duration: '약 14 ~ 20일 (심사기간)',
      basis:    '국토교통부 및 그 소속청 소관 비영리법인의 설립 및 감독에 관한 규칙',
      tasks: [
        '주무관청 요구 신청 서류 일체 준비 및 제출',
        '주무관청 실사 및 심사 대응 (약 14~20일 소요)',
        '보완 요청 대응 및 추가 자료 제출',
        '설립 허가증 수령'
      ],
      outputs: [
        '<strong>① 법인 설립허가 신청서</strong> (별지 제1호 서식)',
        '② 설립발기인 인적사항',
        '③ 정관',
        '④ 재산목록 및 증명서류 (기본재산·운영재산 구분, 출연증서·잔고증명서 포함)',
        '⑤ 사업계획서 및 수지예산서',
        '⑥ 임원 취임 예정자 인적사항 및 취임승낙서',
        '⑦ 창립총회(발기인총회) 회의록',
        '⑧ 설립취지서',
        '⑨ 법인조직 및 상근임직원 정수표',
        '⑩ 회원명부',
        '⑪ 사무실 확보 증명서'
      ],
      notes: [
        '재산목록은 기본재산과 운영재산으로 <strong>반드시 구분</strong>하여 제출',
        '재산출연증서·잔고증명서·토지(건물) 등기부등본 등 증빙 첨부',
        '사업계획서는 상반기 신청 시 당해연도, 하반기 신청 시 익년도 기준'
      ]
    },

    '1-8': {
      title: '재단법인 설립 등기',
      status: 'pending',
      overview: '주무관청 허가 수령 후 3주 이내에 소재지 등기소에 법인 설립 등기를 완료하고 사업자 고유번호증을 발급받는 단계입니다.',
      owner:    '법무사 위임',
      duration: '2 ~ 3주',
      basis:    '민법 제49조 (법인의 등기)',
      tasks: [
        '주무관청 설립 허가증 수령 확인',
        '<strong>3주 이내</strong> 관할 등기소에 법인 설립 등기 신청',
        '등기 완료 후 법인 등기부등본 발급',
        '관할 세무서에서 고유번호증 발급 신청'
      ],
      outputs: [
        '법인 등기부등본',
        '고유번호증 (세무서 발급)',
        '법인 인감카드 및 인감증명서'
      ],
      notes: [
        '설립 허가증 수령 후 <strong>3주 이내 등기 필수</strong>',
        '등기 지연 시 주무관청 허가 효력 문제 발생 가능',
        '법인 통장 개설 및 회계 시스템 구축 병행'
      ]
    },

    '1-9': {
      title: '출연재산 이전 및 보고',
      status: 'pending',
      overview: '출연재산을 법인 명의로 이전하고 그 결과를 주무관청에 보고하는 단계로, 비영리법인 설립단계의 마지막 절차입니다.',
      owner:    '설립추진 TF · 회계 자문',
      duration: '2 ~ 4주',
      basis:    '민법 제48조 (출연재산의 귀속시기)',
      tasks: [
        '출연재산의 법인 명의 이전 절차 진행',
        '부동산: 소유권 이전 등기',
        '주식: 명의개서 및 주주명부 등재',
        '현금: 법인 계좌 입금 및 잔고 확인',
        '이전 결과 주무관청 보고'
      ],
      outputs: [
        '출연재산 이전 결과 보고서',
        '재산 이전 증빙서류 (등기부등본·주주명부·잔고증명 등)'
      ],
      notes: [
        '출연재산이 법인 명의로 이전되지 않으면 추후 세무·법적 문제 발생',
        '주식 출연 시 명의개서 시점에 따라 평가액·세무처리 영향'
      ]
    },

    /* ============ STAGE 2 : 공익법인등 지정단계 ============ */
    '2-1': {
      title: '비영리재단법인 운영 점검',
      status: 'pending',
      overview: '공익법인등 추천 신청 전에 주식보유 한도·의무이행사항 등을 전체 재점검하고 신청 준비를 완료하는 단계입니다.',
      owner:    '사무국 · 세무 자문',
      duration: '2 ~ 3주',
      basis:    '법인세법 시행령 제39조',
      tasks: [
        '공익법인등의 추천 신청 준비',
        '공익법인등 <strong>주식보유 한도</strong> 재점검 (5% / 10% / 20% 기준)',
        '의무이행사항 전체 재점검',
        '정관 명시 사항 점검 (해산 시 잔여재산 귀속, 홈페이지 개설 등)'
      ],
      outputs: [
        '공익법인등 지정요건 자가점검표',
        '정관 적합성 검토 의견서'
      ],
      notes: [
        '신청대상 법인 적정 여부 확인 (민법상 비영리법인, 사회적협동조합, 공공기관 등)',
        '홈페이지 개설 필수 — 한글 독립 홈페이지, 대표자 인사말·설립취지·연혁·조직도·사업내용',
        '인터넷 카페·블로그, 영문 홈페이지·페이스북은 원칙적으로 인정 불가'
      ]
    },

    '2-2': {
      title: '공익법인등 추천 신청 (국세청)',
      status: 'pending',
      overview: '국세청(관할 지방국세청)에 공익법인등 지정을 위한 추천 신청서와 구비서류를 제출하는 단계입니다.',
      owner:    '사무국',
      duration: '신청 기한: 매분기 첫달 10일 (1/10, 4/10, 7/10, 10/10)',
      basis:    '법인세법 시행령 제39조 제1항 제1호 바목',
      tasks: [
        '공익법인등 추천 신청서 작성 (별지 제63호의5 서식)',
        '신청 구분 선택 — 최초/2년 경과 신청 (3년) / 재지정 (6년)',
        '기부금 모집 목적·기간·목표액 정리 (3년 또는 5년)',
        '관할 세무서에 서류 일체 제출'
      ],
      outputs: [
        '① 공익법인등 추천신청서',
        '② 법인설립허가서',
        '③ 정관',
        '④ 결산서 및 사업연도 예산서 (설립 1년 미만 시 월별 수입·지출 내역서)',
        '⑤ 기부금을 통한 사업계획서 (신규 3년 / 재지정 5년)',
        '⑥ 공익법인등 의무이행준수 서약서 (신규 신청 시)',
        '⑦ 선거운동 사실 여부 확인서',
        '⑧ 공익활동보고서 (재지정 시)'
      ],
      notes: [
        '<strong>신청기한: 매분기 첫달 10일까지</strong> (1/10, 4/10, 7/10, 10/10)',
        '정관에 "수입의 공익목적 사용", "불특정다수 수혜자", "해산 시 잔여재산의 국가/유사 비영리법인 귀속" 명시 필수',
        '홈페이지에 연간 기부금 모금액 및 활용실적 공개 명시',
        '국세청·국민권익위원회·주무관청 중 1개 이상 홈페이지와 연결(링크)'
      ]
    },

    '2-3': {
      title: '요건 검토 및 추천',
      status: 'pending',
      overview: '국세청(관할 지방국세청)에서 신청 법인의 공익법인 요건을 검토한 후 재정경제부로 지정 추천하는 단계입니다.',
      owner:    '국세청 (수동 대응)',
      duration: '추천 기한: 매분기 두번째 달 10일 (2/10, 5/10, 8/10, 11/10)',
      basis:    '법인세법 시행령 제39조',
      tasks: [
        '국세청의 요건 검토 대응 (자료 보완 등)',
        '재정경제부로의 지정 추천 결정 확인',
        '미흡 시 사유 분석 및 다음 분기 재신청 준비'
      ],
      outputs: [
        '국세청 추천 결과 통지',
        '(미흡 시) 보완 요청 사항 회신'
      ],
      notes: [
        '<strong>추천기한: 매분기 두번째 달 10일</strong>',
        '국세청에서 미추천 시 사유를 분석하여 다음 분기 재신청 가능',
        '추천 단계에서 정관·홈페이지 등 요건 재확인 요청이 빈번'
      ]
    },

    '2-4': {
      title: '공익법인 지정 (기획재정부)',
      status: 'pending',
      overview: '기획재정부의 최종 지정 심사 후 공익법인등으로 지정·고시되는 단계입니다. 신규 3년, 재지정 6년의 지정 기간을 부여받습니다.',
      owner:    '기획재정부 (수동 대응)',
      duration: '고시일자: 매분기 마지막달 말일 (3/31, 6/30, 9/30, 12/31)',
      basis:    '법인세법 시행령 제39조',
      tasks: [
        '기획재정부 최종 지정 심사 대응',
        '지정 결과 확인 (홈페이지 고시)',
        '지정 통지서 수령 후 홈페이지에 공익법인 표시 반영'
      ],
      outputs: [
        '공익법인등 지정 통지서',
        '기획재정부 고시문'
      ],
      notes: [
        '신규 지정: 지정일 속하는 사업연도 1월 1일부터 <strong>3년간</strong> 인정',
        '재지정: 지정기간 종료 후 2년 이내 신청 시 <strong>6년간</strong> 인정',
        '지정 취소 시 <strong>3년 경과</strong> 후 재신청 가능'
      ]
    },

    '2-5': {
      title: '전용계좌 개설 신고',
      status: 'pending',
      overview: '공익법인등 지정 후 3개월 이내에 전용계좌를 개설하고 관할 세무서에 신고해야 하는 의무 단계입니다.',
      owner:    '사무국 · 회계 담당',
      duration: '지정 후 3개월 이내',
      basis:    '상속세 및 증여세법 시행령 제43조의2',
      tasks: [
        '공익법인등 <strong>전용 계좌 개설</strong>',
        '관할 세무서에 전용계좌 개설 신고',
        '사용 대상 거래에 대한 전용계좌 사용 절차 수립'
      ],
      outputs: [
        '전용계좌 개설 신고서',
        '전용계좌 통장 사본'
      ],
      notes: [
        '<strong>지정 이후 3개월 이내 신고 필수</strong>',
        '사용 대상 거래에 전용계좌 미사용 시 가산세 — 미사용 금액의 0.5% (1억원 한도)',
        '직접 공익목적 사용 거래는 전용계좌로 일원화'
      ]
    },

    /* ============ STAGE 3 : 공익법인등 운영단계 ============ */
    '3-1': {
      title: '출연재산 보고서 제출',
      status: 'pending',
      overview: '매 사업연도 종료일부터 4개월 이내에 출연재산의 사용 현황을 정리한 보고서를 제출해야 하는 의무 사항입니다.',
      owner:    '사무국 · 회계 담당',
      duration: '사업연도 종료일 4개월 이내 (반복)',
      basis:    '상속세 및 증여세법 제48조 제5항',
      tasks: [
        '출연재산의 사용 현황 정리',
        '직접 공익목적 사용 비율 점검',
        '출연재산 보고서 작성 및 관할 세무서 제출'
      ],
      outputs: [
        '출연재산 보고서',
        '출연재산 사용 증빙서류'
      ],
      notes: [
        '미제출 또는 불분명한 금액에 대해 <strong>증여세 1% (1억원 한도)</strong> 부과',
        '출연재산은 <strong>3년 이내 100% 직접 공익목적+수익사업 투자</strong>',
        '매각대금: 1년 30%, 2년 60%, 3년 90% 이상 사용',
        '운용소득: 1년 80% 이상 (잔여 20% 축적 가능)'
      ]
    },

    '3-2': {
      title: '결산서류 공시',
      status: 'pending',
      overview: '매 사업연도 종료일 4개월 이내에 결산서류 일체를 홈페이지에 공시해야 하는 의무 사항입니다.',
      owner:    '사무국 · 회계 담당',
      duration: '사업연도 종료일 4개월 이내 (반복)',
      basis:    '상속세 및 증여세법 제50조의3',
      tasks: [
        '재무상태표·운영성과표·현금흐름표 등 결산서류 작성',
        '홈페이지 공시 및 국세청 홈택스 공시',
        '공익법인 회계기준 적용 여부 점검'
      ],
      outputs: [
        '결산서류 공시 자료',
        '공시 완료 확인서'
      ],
      notes: [
        '시정요구 미이행 시 <strong>가산세 — 자산총액의 0.5%</strong>',
        '홈페이지와 국세청 홈택스 양쪽에 공개해야 함',
        '재지정의 경우 종전 최초 지정연도부터 신청 직전연도까지 공개'
      ]
    },

    '3-3': {
      title: '외부전문가 세무확인서',
      status: 'pending',
      overview: '총자산가액 5억원 이상 또는 수입·출연재산 합계 3억원 이상인 공익법인이 사업연도 종료일 4개월 이내에 제출해야 하는 의무 사항입니다.',
      owner:    '외부 세무사 · 사무국',
      duration: '사업연도 종료일 4개월 이내 (해당 시)',
      basis:    '상속세 및 증여세법 제50조',
      tasks: [
        '대상 여부 점검 (총자산가액 5억원 이상 또는 수입·출연재산 합계 3억원 이상)',
        '외부전문가(세무사·회계사) 선임',
        '세무확인서 작성 및 제출'
      ],
      outputs: [
        '외부전문가 세무확인서',
        '세무 점검 결과 보고서'
      ],
      notes: [
        '미제출 시 <strong>가산세 — MAX [(수입+출연재산)의 0.07%, 100만원]</strong>',
        '회계기준 준수 여부, 출연재산 사용 적정성 등 점검'
      ]
    },

    '3-4': {
      title: '외부 회계감사 보고서',
      status: 'pending',
      overview: '주식보유 관련 의무이행 신고 대상이거나 총자산가액 100억원 이상인 공익법인이 제출해야 하는 외부 회계감사 보고서입니다.',
      owner:    '외부 회계법인',
      duration: '사업연도 종료일 4개월 이내 (해당 시)',
      basis:    '상속세 및 증여세법 제50조',
      tasks: [
        '대상 여부 점검 (주식보유 의무이행 신고대상 또는 총자산가액 100억원 이상)',
        '외부 회계법인 선임 및 감사 진행',
        '감사보고서 제출'
      ],
      outputs: [
        '외부 회계감사 보고서',
        '감사인 의견서'
      ],
      notes: [
        '미제출 시 <strong>가산세 — (수입+출연재산)의 0.07%</strong>',
        '외부 회계법인은 독립성을 갖춘 곳으로 선임'
      ]
    },

    '3-5': {
      title: '주식보유 의무이행 신고',
      status: 'pending',
      overview: '주식을 5% 초과 또는 총재산가액의 30%(50%) 초과 보유한 공익법인이 의무이행 사항을 신고해야 하는 절차입니다.',
      owner:    '사무국 · 세무 자문',
      duration: '사업연도 종료일 4개월 이내 (해당 시)',
      basis:    '상속세 및 증여세법 제48조',
      tasks: [
        '주식 보유 비율 점검 (5% 초과 여부 / 총재산가액 30%(50%) 초과 여부)',
        '의무이행 사항 정리 (외부감사·전용계좌·결산서류 공시)',
        '주식보유 의무이행 신고서 작성 및 제출'
      ],
      outputs: [
        '주식보유 의무이행 신고서',
        '의무이행 증빙서류'
      ],
      notes: [
        '미신고 시 <strong>가산세 — 자산총액의 0.5% (1억원 한도)</strong>',
        '재단법인의 총재산가액 대비 계열기업 주식 30% 이내 (외부감사·전용계좌·결산공시·의결권 미사용 시 50%)',
        '의결권 미사용 시 주식 한도 20% 적용'
      ]
    }
  };

  /* ====================================================
     단계 상세 렌더링
     ==================================================== */
  const $detailStage    = document.getElementById('detailStage');
  const $detailStep     = document.getElementById('detailStep');
  const $detailTitle    = document.getElementById('detailTitle');
  const $detailStatus   = document.getElementById('detailStatus');
  const $detailOverview = document.getElementById('detailOverview');
  const $detailOwner    = document.getElementById('detailOwner');
  const $detailDuration = document.getElementById('detailDuration');
  const $detailBasis    = document.getElementById('detailBasis');
  const $detailTasks    = document.getElementById('detailTasks');
  const $detailOutputs  = document.getElementById('detailOutputs');
  const $detailNotes    = document.getElementById('detailNotes');

  const statusLabel = {
    done:     '완료',
    progress: '진행 중',
    pending:  '예정'
  };

  function renderStep(stepId) {
    const data = stepData[stepId];
    if (!data) return;

    const stageNum = stepId.split('-')[0];
    const meta = stageMeta[stageNum];

    $detailStage.textContent  = `${meta.no} · ${meta.name}`;
    $detailStep.textContent   = `STEP ${stepId}`;
    $detailTitle.textContent  = data.title;

    // 상태 배지
    $detailStatus.className   = `status-badge ${data.status}`;
    $detailStatus.textContent = statusLabel[data.status];

    $detailOverview.textContent = data.overview;
    $detailOwner.textContent    = data.owner;
    $detailDuration.textContent = data.duration;
    $detailBasis.textContent    = data.basis;

    $detailTasks.innerHTML   = data.tasks  .map(t => `<li>${t}</li>`).join('');
    $detailOutputs.innerHTML = data.outputs.map(t => `<li>${t}</li>`).join('');
    $detailNotes.innerHTML   = data.notes  .map(t => `<li>${t}</li>`).join('');

    // 우측 패널 스크롤을 위로
    const detailEl = document.getElementById('stepDetail');
    if (detailEl) detailEl.scrollTop = 0;
  }

  /* ---------- 사이드 단계 클릭 ---------- */
  const substeps = document.querySelectorAll('.substep');
  substeps.forEach(item => {
    item.addEventListener('click', () => {
      substeps.forEach(s => s.classList.toggle('selected', s === item));
      renderStep(item.dataset.step);
    });
  });

  // 초기 활성 단계 선택 (active 클래스가 있는 것)
  const initStep = document.querySelector('.substep.active');
  if (initStep) {
    initStep.classList.add('selected');
    renderStep(initStep.dataset.step);
  }

  /* ---------- 전체 추진 프로세스 다이어그램 토글 ---------- */
  const btnViewAll = document.getElementById('btnViewAll');
  const btnGoBack = document.getElementById('btnGoBack');
  const timelineHeadDefault = document.getElementById('timelineHeadDefault');
  const timelineHeadDiagram = document.getElementById('timelineHeadDiagram');
  const stageList = document.getElementById('stageList');
  const processDiagramContainer = document.getElementById('processDiagramContainer');

  if (btnViewAll && btnGoBack && timelineHeadDefault && timelineHeadDiagram && stageList && processDiagramContainer) {
    btnViewAll.addEventListener('click', () => {
      timelineHeadDefault.style.display = 'none';
      stageList.style.display = 'none';
      timelineHeadDiagram.style.display = 'flex';
      processDiagramContainer.style.display = 'flex';
    });

    btnGoBack.addEventListener('click', () => {
      timelineHeadDiagram.style.display = 'none';
      processDiagramContainer.style.display = 'none';
      timelineHeadDefault.style.display = 'flex';
      stageList.style.display = 'flex';
    });
  }

  /* ====================================================
     설립 기획 카드 클릭 (자리만 잡아둠)
     ==================================================== */
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('click', () => {
      console.log('[설립 기획] 카드 클릭:', card.dataset.plan);
      if (card.dataset.plan === 'business') {
        const modal = document.getElementById('modalBusiness');
        if (modal) modal.classList.add('open');
      }
    });
  });

  /* ====================================================
     모달
     ==================================================== */
  const modalFund  = document.getElementById('modalFund');
  const modalStock = document.getElementById('modalStock');

  function openModal(modal)  { modal.classList.add('open'); }
  function closeModal(modal) {
    modal.classList.remove('open');
    if (modal.id === 'modalPreview') {
      const iframe = document.getElementById('globalPreviewFrame');
      if (iframe) iframe.src = '';
    }
  }

  document.getElementById('btnFundSim') .addEventListener('click', () => openModal(modalFund));
  document.getElementById('btnStockSim').addEventListener('click', () => openModal(modalStock));

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal-backdrop')));
  });
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', e => { if (e.target === bd) closeModal(bd); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
    }
  });

    /* ====================================================
     준비 사항 (설립 일정 및 참고문서 보완)
     ==================================================== */
  let currentStage = 1;

  const docData = [
    // STAGE 1: 비영리법인 설립 단계 (14종)
    {
      id: 1, stage: 1, title: '법인설립허가신청서', law: '민법 제32조 / 규칙 제3조', alert: '발기인 대표자의 서명 및 등록 인감 날인 필수', desc: '주무관청 제출용 공식 신청서 서식',
      simhwa: `<div style="margin-top: 12px; padding: 12px 14px; background: rgba(164,117,81,0.03); border: none; border-left: 3px solid var(--gold); border-radius: 0; font-size: var(--fs-xs); line-height: 1.6;">
        <strong style="color: var(--gold); display: block; margin-bottom: 4px;">⭐ 설립허가신청서 실무 가이드</strong>
        <ul style="margin: 0; padding-left: 16px; color: var(--ink-soft);">
          <li><strong>신청인란</strong>: 창립총회 선임 대표자의 인적사항을 기재하고 등록 인감 날인 확인</li>
          <li><strong>소재지</strong>: 향후 법원 설립등기를 고려하여 정관상의 주소와 일원화(도로명 최소단위 명시)</li>
        </ul>
      </div>`
    },
    { id: 2, stage: 1, title: '설립취지서', law: '공익령 제4조 제1항 제2호', alert: '주무관청의 공익/목적 부합성 심사 기준', desc: '비영리법인 설립 목적과 사회적 배경 명시' },
    { id: 3, stage: 1, title: '설립발기인 인적사항', law: '규칙 제3조 제1호 / 공익령 제4조', alert: '발기인은 최소 3인 이상으로 구성 권장', desc: '발기인 전원의 이름, 주소, 연락처 및 주요 약력 기재' },
    { id: 4, stage: 1, title: '임원이력서', law: '규칙 제3조 제5호 / 공익령 제7조', alert: '임원 결격사유 조회를 위해 상세히 작성', desc: '취임 예정 임원(이사, 감사)의 주요 학력 및 경력' },
    { id: 5, stage: 1, title: '임원취임승낙서', law: '민법 제57조', alert: '임원 전원의 인감 날인 및 인감증명서 첨부 필수', desc: '임원 전원의 법인 취임 동의 서면' },
    {
      id: 6, stage: 1, title: '창립총회회의록', law: '규칙 제3조 제6호 / 공익령 제4조', alert: '발기인 전원의 기명 날인(간인 포함) 및 개최 사진 첨부', desc: '법인 설립 및 정관 채택, 임원 선출 논의록',
      simhwa: `<div style="margin-top: 12px; padding: 12px 14px; background: rgba(164,117,81,0.03); border: none; border-left: 3px solid var(--gold); border-radius: 0; font-size: var(--fs-xs); line-height: 1.6;">
        <strong style="color: var(--gold); display: block; margin-bottom: 4px;">⭐ 총회회의록 간인 규정 가이드</strong>
        <p style="margin:0; color: var(--ink-soft);">발기인 전원이 회의록 각 장의 경계선마다 <strong>인감 간인</strong>을 완료해야 하며, 최종 문서 종결 면에 성명 기재 후 인감 날인 상태가 확보되어야 반려를 방지할 수 있습니다.</p>
      </div>`
    },
    {
      id: 7, stage: 1, title: '정관', law: '민법 제40조 / 제43조', alert: '주무관청 표준 정관 준칙을 엄격하게 준용할 것', desc: '법인의 목적과 조직에 관한 최상위 규범',
      simhwa: `<div style="margin-top: 12px; padding: 12px 14px; background: rgba(164,117,81,0.03); border: none; border-left: 3px solid var(--gold); border-radius: 0; font-size: var(--fs-xs); line-height: 1.6;">
        <strong style="color: var(--gold); display: block; margin-bottom: 4px;">⭐ 국세청 추천 지정 공익법인 요건 조항</strong>
        <p style="margin:0; color: var(--ink-soft);">정관 조문 내에 <strong>[홈페이지를 통한 연간 기부금 모금액 및 활용실적 공개]</strong> 및 <strong>[해산 시 잔여재산을 국가 또는 유사 비영리법인에 귀속]</strong>한다는 문구가 명시되어 있는지 확인필요.</p>
      </div>`
    },
    { id: 8, stage: 1, title: '법인조직 및 상근임직원 정수표', law: '공익령 제14조', alert: '예산서 내 인건비와 부합하도록 작성', desc: '법인 내 구체적 조직도 및 상근 임직원 TO' },
    { id: 9, stage: 1, title: '재산출연증서/잔고증명서', law: '규칙 제3조 제3호 / 공익령 제4조', alert: '금융기관 발급본 및 출연자의 인감 날인 필수', desc: '출연자의 재산 출연 확약서 및 실제 통장 잔고 증명' },
    { id: 10, stage: 1, title: '재산목록', law: '민법 제32조 / 규칙 제3조', alert: '증명서와 재산목록의 금액이 1원 단위까지 일치해야 함', desc: '본 법인에 출연된 기본재산과 보통재산 분류, 총계록' },
    { id: 11, stage: 1, title: '재산증명서', law: '규칙 제3조 제3호 / 공익령 제6조', alert: '부동산일 경우 소유권 이전 확약 서류 포함', desc: '재산 귀속을 증명하는 평가서 또는 등기부등본' },
    { id: 12, stage: 1, title: '회원명부(해당없음)', law: '공익령 제4조 제1항 제4호', alert: '재단법인의 경우 회원명부는 제출 대상에서 제외됩니다.', desc: '사단법인일 경우 창립 회원의 명단 및 서명' },
    { id: 13, stage: 1, title: '사업계획서/수지예산서', law: '규칙 제3조 제4호', alert: '총 수입과 총 지출 예산이 반드시 동일하게 맞아떨어질 것', desc: '목적 사업에 관한 단기/중기 세부 계획 및 예산 현황' },
    { id: 14, stage: 1, title: '사무실 확보 증명서', law: '민법 제33조 / 제36조', alert: '과도한 보증금 지출 시 기본재산 비율 주의', desc: '부동산 임대차계약서 또는 무상사용승낙서' },

    // STAGE 2: 공익법인 지정 단계 (7종)
    { id: 15, stage: 2, title: '공익법인등 추천신청서', law: '시행규칙 별지 제63호의5', alert: '최초 지정(3년) 또는 재지정(6년) 구분 및 기부금 모집 목표액 기재', desc: '국세청으로 제출하는 추천 신청서 서식' },
    { id: 16, stage: 2, title: '법인설립허가서', law: '민법 제32조', alert: '주무관청으로부터 수령한 설립허가서 스캔 필수', desc: '법인 설립 허가 여부를 증명하는 서면' },
    {
      id: 17, stage: 2, title: '지정 요건정관', law: '법인세법 시행령 제39조 제1항', alert: '공익 목적 수입, 불특정다수 수혜, 해산시 잔여재산 국가 귀속 명시 필수', desc: '국세청 의무 요건이 완비된 최종 개정 정관',
      simhwa: `<div style="margin-top: 12px; padding: 12px 14px; background: rgba(164,117,81,0.03); border: none; border-left: 3px solid var(--gold); border-radius: 0; font-size: var(--fs-xs); line-height: 1.6;">
        <strong style="color: var(--gold); display: block; margin-bottom: 4px;">⭐ 지정요건 불합격 조항 방지 가이드</strong>
        <p style="margin:0; color: var(--ink-soft);">해산 시 잔여재산 귀속 대상에 "국가, 지방자치단체 또는 유사한 목적을 가진 다른 비영리법인" 외에 **"유사 단체"**, **"공익 기금"** 등의 임의 문구가 들어가면 심사에서 반려되니 주의 바랍니다.</p>
      </div>`
    },
    { id: 18, stage: 2, title: '수입·지출내역서/예산서', law: '법인세법', alert: '1년 미만 법인은 결산서 대신 직전 월까지의 월별 지출 내역서 제출', desc: '회계 투명성 입증용 예산 및 실적 수지 명세' },
    { id: 19, stage: 2, title: '기부금 활용 사업계획서', law: '법인세법', alert: '향후 3년 동안 기부금을 활용한 공익사업 계획', desc: '향후 지정 기간 동안의 기부금 모금 및 활용 계획' },
    { id: 20, stage: 2, title: '의무이행준수 서약서', law: '시행규칙 별지 제63호의6', alert: '대표자의 공인 성명 및 서명 날인 누락 확인', desc: '지정기간 동안 의무이행을 확약하는 공식 서약서' },
    { id: 21, stage: 2, title: '선거운동 사실 여부 확인서', law: '시행규칙 서식', alert: '최근 정당/선거운동 관여 이력 없음 확인 필수', desc: '공익법인의 선거 중립성을 서약하는 확인 서면' },

    // STAGE 3: 공익법인 사후운영 단계 (3종)
    { id: 22, stage: 3, title: '기부금 모금 및 활용실적 공개', law: '상증세법 제48조', alert: '매년 4월 말까지 홈페이지 및 홈택스 동시 공개', desc: '연간 기부금 모집 총액 및 목적별 지출 상세 공시' },
    { id: 23, stage: 3, title: '출연재산 보고서 및 결산 공시', law: '상증세법 제48조 / 제50조의3', alert: '사업연도 종료 후 4개월 이내 국세청 제출', desc: '출연받은 재산의 매년 사용 내역 보고서' },
    { id: 24, stage: 3, title: '외부 회계감사/세무확인서', law: '상증세법 제50조', alert: '해당 기준 도달 법인의 의무 세무 점검 보고', desc: '회계법인 감사 보고서 및 세무사 확인 서면' }
  ];

  const validationRules = {
    0: {
      title: '법인설립허가신청서 구조 분석',
      checkItems: [
        { label: '신청인 고유 인적사항 확보 여부', status: 'pass', comment: '신청 대표자의 인명 및 기본 식별 정보가 완비되어 있습니다.' },
        { label: '사무소 도로명 주소 매칭 규격', status: 'warn', comment: '소재지 세부 지번과 정관 정합성이 100% 일치하는지 등기전 재대조를 권장합니다.' }
      ]
    },
    5: {
      title: '창립총회 회의록 간인/날인 조항 진단',
      checkItems: [
        { label: '육하원칙 구성요소 성립 여부', status: 'pass', comment: '일시, 장소, 안건 보고 이력이 명확히 수록되어 있습니다.' },
        { label: '발기인 연명 간인 누락 점검', status: 'fail', comment: '스캔본 분석 결과 회의록 각 면 경계의 인감 간인 인식이 누락되었습니다. 전원 간인 보완 후 재제출이 요구됩니다.' }
      ]
    },
    6: {
      title: '법인 정관 필수 공시 문언 심사',
      checkItems: [
        { label: '민법 제40조 적법성 성립', status: 'pass', comment: '7가지 상위 필수기재 사항이 누락 없이 설정되었습니다.' },
        { label: '기재부/국세청 공익법인 지정 요건식 검토', status: 'warn', comment: '상증세법 제48조에 따른 기부금 활용실적 홈페이지 공개 준수 확약 문구가 모호합니다. 조문 보완을 권장합니다.' }
      ]
    },
    14: {
      title: '공익법인등 추천신청서 서식 검토',
      checkItems: [
        { label: '신청 유형 및 고유식별정보', status: 'pass', comment: '신청구분 및 법인 인적사항이 누락 없이 완비되어 있습니다.' },
        { label: '기부금 3개년 목표액 기입 여부', status: 'pass', comment: '지정 사업연도부터 3개년(최초)의 모집 계획 및 목표 금액이 성립되었습니다.' }
      ]
    },
    16: {
      title: '공익지정 정관 필수 3대 조항 진단',
      checkItems: [
        { label: '수입의 공익목적 사용 조문', status: 'pass', comment: '불특정 다수를 수혜자로 하는 조항이 적합하게 명시되었습니다.' },
        { label: '해산 시 잔여재산 국고귀속', status: 'pass', comment: '해산 시 잔여재산의 국가/지자체 또는 유사 공익법인 귀속 문구가 표준 조항대로 기재되었습니다.' },
        { label: '기부금 모금 및 활용처 공개 의무', status: 'pass', comment: '매년 기부금 모금액 및 실적을 홈페이지에 공시한다는 의무 규정이 완전 반영되었습니다.' }
      ]
    }
  };

  const stageChecklists = {
    1: [
      { id: 'c1_1', text: '(사업목적) 중립적 표준화, 공익적 기술 나눔 등 명분 수립' },
      { id: 'c1_2', text: '(이사회 구성) 특수관계인 비율 1/5(20%) 이하 유지' },
      { id: 'c1_3', text: '(정관 필수항목) 운용소득 80% 이상 사용, 구분회계 등 조항 반영' },
      { id: 'c1_4', text: '(출연재산) 주식평가 보수적 산정 및 운영 현금(보통재산) 확보' },
      { id: 'c1_5', text: '(사무실 확보) 교육 및 연구 목적 사무실 임대/무상사용 확보' },
      { id: 'c1_6', text: '(영업 보조 방지) 기업 경영권/매출 보조 불식 내부 합의서 작성' },
      { id: 'c1_7', text: '(수익재산 검토) 수익률 입증서류 및 3개년 배당성향 충족 여부 확인' }
    ],
    2: [
      { id: 'c2_1', text: '(신청 대상) 주무관청 설립 허가를 완료한 비영리법인 격 확보' },
      { id: 'c2_2', text: '(정관 필수 반영) 수입의 공익목적 사용, 불특정다수 수혜, 해산시 국가 귀속 명시' },
      { id: 'c2_3', text: '(정관 공개 규정) 홈페이지 기부금 모금 및 활용실적 공개 규정 명시' },
      { id: 'c2_4', text: '(홈페이지 개설) 대표자 인사말, 설립취지, 조직도 포함 독립 한글 홈페이지 구축' },
      { id: 'c2_5', text: '(홈페이지 링크) 국세청(홈택스 탈세제보) 링크 연동 완료' },
      { id: 'c2_6', text: '(선거운동 배제) 특정 정당 선거운동 사실 확인서 인감 날인 완료' }
    ],
    3: [
      { id: 'c3_1', text: '(실적 공개) 연간 기부금 모금액 및 활용실적 매년 홈페이지/국세청 상호 공개' },
      { id: 'c3_2', text: '(보고서 제출) 출연재산 보고서 및 결산서류 기한 내 관할 세무서 제출' },
      { id: 'c3_3', text: '(세무 확인) 주식보유 의무이행 신고 및 이사진 비율 검토 완료' },
      { id: 'c3_4', text: '(회계 감사) 외부 전문 감사인 선임 및 회계감사 보고 완료 여부' }
    ]
  };

  let currentDocIndex = 0;
  let uploadStatus = new Array(docData.length).fill(null);

  // 서류서식 폴더 PDF 사전 매핑 (docData 인덱스 → 파일 경로)
  const preloadedFileMap = {
    0:  { name: '1. 법인설립허가신청서.pdf',  url: '서류서식/1. 법인설립허가신청서.pdf' },
    1:  { name: '2. 설립취지서.pdf',           url: '서류서식/2. 설립취지서.pdf' },
    6:  { name: '(예시) 정관.pdf',             url: '서류서식/(예시) 정관.pdf' },
    12: { name: '(예시) 사업계획서.pdf',       url: '서류서식/(예시) 사업계획서.pdf' }
  };

  function base64ToBlob(base64, mimeType) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: mimeType });
  }

  function initUploadStatus() {
    docData.forEach((_, idx) => {
      const lsKey = `tf_doc_upload_${idx}`;
      const saved = localStorage.getItem(lsKey);
      if (saved) {
        try {
          const data = JSON.parse(saved);
          const blob = base64ToBlob(data.base64, data.mimeType || 'application/pdf');
          uploadStatus[idx] = { name: data.name, size: data.size, url: URL.createObjectURL(blob) };
        } catch (e) {
          localStorage.removeItem(lsKey);
        }
      } else if (preloadedFileMap[idx]) {
        const pf = preloadedFileMap[idx];
        uploadStatus[idx] = { name: pf.name, size: 0, url: pf.url, preloaded: true };
      }
    });
  }

  // 현재 뷰어의 활성 탭 ('ai' 또는 'checklist')
  let currentViewerTab = 'ai';

  window.switchDocStage = function(stageId) {
    currentStage = stageId;
    
    // 무대별 버튼 UI 토글
    for (let i = 1; i <= 3; i++) {
      const btn = document.getElementById(`btnStage${i}`);
      if (btn) {
        if (i === stageId) {
          btn.className = 'stage-select-btn active';
          btn.style.borderColor = 'var(--accent)';
          btn.style.background = 'rgba(180,138,74,0.06)';
          btn.style.color = 'var(--gold)';
        } else {
          btn.className = 'stage-select-btn';
          btn.style.borderColor = 'var(--line)';
          btn.style.background = 'var(--bg-elevated)';
          btn.style.color = 'var(--ink-soft)';
        }
      }
    }

    // 단계별 대제목 수정
    const titleEl = document.getElementById('docStageTitle');
    if (titleEl) {
      if (stageId === 1) titleEl.innerText = '주무관청 필수 구비 서류 14종 (설립 단계)';
      else if (stageId === 2) titleEl.innerText = '국세청 추천 신청 구비 서류 7종 (지정 단계)';
      else titleEl.innerText = '공익법인 사후 관리 제출 서류 3종 (운영 단계)';
    }

    // 선택된 단계의 첫 번째 문서로 인덱스 포커스 조정
    const stageDocs = docData.filter(d => d.stage === stageId);
    if (stageDocs.length > 0) {
      currentDocIndex = docData.indexOf(stageDocs[0]);
    }

    renderDocTabs();
    renderDocPanel();
    
    // 만약 체크리스트가 열려있다면 렌더링 갱신
    if (currentViewerTab === 'checklist') {
      renderChecklistItems();
    }
  };

  window.switchViewerTab = function(tabName) {
    currentViewerTab = tabName;
    const aiBtn = document.getElementById('btnTabAi');
    const chkBtn = document.getElementById('btnTabChecklist');
    const aiPanel = document.getElementById('validationPanel');
    const chkPanel = document.getElementById('checklistPanel');
    if (!aiBtn || !chkBtn || !aiPanel || !chkPanel) return;
    
    if (tabName === 'ai') {
      aiBtn.style.border = '1px solid var(--accent)';
      aiBtn.style.background = 'rgba(180,138,74,0.06)';
      aiBtn.style.color = 'var(--gold)';
      chkBtn.style.border = '1px solid var(--line)';
      chkBtn.style.background = 'transparent';
      chkBtn.style.color = 'var(--ink-soft)';
      aiPanel.style.display = 'flex';
      chkPanel.style.display = 'none';
    } else {
      chkBtn.style.border = '1px solid var(--accent)';
      chkBtn.style.background = 'rgba(180,138,74,0.06)';
      chkBtn.style.color = 'var(--gold)';
      aiBtn.style.border = '1px solid var(--line)';
      aiBtn.style.background = 'transparent';
      aiBtn.style.color = 'var(--ink-soft)';
      aiPanel.style.display = 'none';
      chkPanel.style.display = 'flex';
      renderChecklistItems();
    }
  };

  window.toggleChecklistItem = function(id) {
    const key = `tf_checklist_${id}`;
    const curVal = localStorage.getItem(key) === 'true';
    localStorage.setItem(key, !curVal);
    renderChecklistItems();
    syncGlobalStats();
  };

  function renderChecklistItems() {
    const chkPanel = document.getElementById('checklistPanel');
    if (!chkPanel) return;
    
    const items = stageChecklists[currentStage] || [];
    if (items.length === 0) {
      chkPanel.innerHTML = '<div style="font-size: var(--fs-xs); color: var(--ink-soft); text-align: center; padding: 20px;">체크리스트가 없습니다.</div>';
      return;
    }

    let html = `
      <div style="font-size: var(--fs-xs); font-weight: 700; color: var(--gold); margin-bottom: 8px;">📋 ${currentStage === 1 ? '설립' : currentStage === 2 ? '지정' : '사후운영'} 자가진단 항목</div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
    `;

    items.forEach(item => {
      const checked = localStorage.getItem(`tf_checklist_${item.id}`) === 'true';
      html += `
        <div onclick="toggleChecklistItem('${item.id}')" style="display: flex; align-items: flex-start; gap: 10px; padding: 8px 4px; background: transparent; border: none; border-bottom: 1px solid var(--line-soft); cursor: pointer; transition: all 0.2s;">
          <div style="font-size: 16px; color: ${checked ? 'var(--done)' : 'var(--ink-mute)'}; line-height: 1; user-select: none; flex-shrink: 0;">
            ${checked ? '☑' : '☐'}
          </div>
          <div style="font-size: var(--fs-xs); color: ${checked ? 'var(--done)' : 'var(--ink-soft)'}; line-height: 1.4; flex: 1; font-weight: ${checked ? '600' : 'normal'}; text-decoration: ${checked ? 'none' : 'none'};">
            ${item.text}
          </div>
        </div>
      `;
    });

    html += '</div>';
    chkPanel.innerHTML = html;
  }

  function renderDocTabs() {
    const container = document.getElementById('docTabs');
    if (!container) return;
    container.innerHTML = '';
    
    docData.forEach((doc, idx) => {
      if (doc.stage !== currentStage) return;
      
      const tab = document.createElement('div');
      tab.className = 'doc-tab' + (idx === currentDocIndex ? ' active' : '') + (uploadStatus[idx] ? ' uploaded' : '');
      const relativeIdx = docData.filter(d => d.stage === currentStage).indexOf(doc) + 1;
      tab.innerHTML = `<span class="tab-num">${relativeIdx.toString().padStart(2, '0')}</span> ${doc.title}`;
      tab.onclick = () => {
        currentDocIndex = idx;
        renderDocTabs();
        renderDocPanel();
        const f = uploadStatus[idx];
        if (f) {
          runDocValidationProcess(f.name, idx);
        } else {
          const vp = document.getElementById('validationPanel');
          if (vp) vp.innerHTML = `
            <div class="dropzone" onclick="document.getElementById('fileInput').click()">
              <span style="font-size: 24px; opacity: 0.6;">📁</span>
              <div class="dropzone-title" style="margin-top: 4px;">실무 검증 대상 서류 공백</div>
              <div class="dropzone-sub">좌측 패널에서 문서를 선택하여 스캔본을 첨부하면 실시간 조항 분석이 개시됩니다.</div>
            </div>
          `;
        }
      };
      container.appendChild(tab);
    });
  }

  function renderDocPanel() {
    const targetBox = document.getElementById('docContent');
    if (!targetBox) return;
    
    const doc = docData[currentDocIndex];
    const file = uploadStatus[currentDocIndex];
    
    let html = `
      <div class="doc-panel active">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
          <div>
            <h4 style="margin:0; font-size: var(--fs-md); font-weight:700; color:var(--ink);">${doc.title}</h4>
            <p style="margin:4px 0 0; font-size: var(--fs-xs); color:var(--ink-soft);">${doc.desc}</p>
          </div>
          <span style="font-size:13px; padding:4px 10px; border-radius:4px; font-weight:700; background:${file ? 'rgba(74,124,89,0.1)' : 'rgba(138,134,118,0.1)'}; color:${file ? 'var(--done)' : 'var(--ink-mute)'};">
            ${file ? '✓ 완료' : '미첨부'}
          </span>
        </div>
    `;
    
    if (file) {
      const fileMeta = file.preloaded ? '기본 서식 파일' : `${(file.size / 1024).toFixed(1)} KB`;
      const actionBtn = file.preloaded
        ? `<button class="btn btn-ghost" style="padding: 5px 10px; font-size: var(--fs-xs);" onclick="document.getElementById('fileInput').click()">📁 대체 업로드</button>`
        : `<button class="btn btn-ghost" style="padding: 5px 10px; font-size: var(--fs-xs); color:#cf222e; border-color:rgba(207,34,46,0.15);" onclick="window.removeSelectedFile()">삭제</button>`;
      html += `
        <div class="file-uploaded">
          <div class="file-icon-area">📄</div>
          <div class="file-info">
            <div class="file-name">${file.name}</div>
            <div class="file-meta">${fileMeta} • 가상 분석 대기</div>
          </div>
          <div class="file-actions">
            <button class="btn btn-ghost" style="padding: 5px 10px; font-size: var(--fs-xs);" onclick="window.toggleDocViewer('${file.url}')">👁️ 미리보기</button>
            ${actionBtn}
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="dropzone" onclick="document.getElementById('fileInput').click()">
          <span style="font-size: 28px; display: block; margin-bottom: 6px;">📤</span>
          <div style="font-size: var(--fs-sm); font-weight: 600; color: var(--ink-soft);">기록 파일 컴포넌트 업로드</div>
          <div style="font-size: var(--fs-xs); color: var(--ink-mute); margin-top: 2px;">여기를 클릭하여 서류 스캔본을 첨부할 수 있습니다.</div>
        </div>
      `;
    }
    
    html += `
        <div style="margin-top: 16px; border-top: 1.5px solid var(--line); padding: 16px 0; background: transparent; border-radius: 0;">
          <div style="font-size: var(--fs-xs); font-weight: 700; color: var(--ink); margin-bottom: 8px;">📋 검토 표준 지침</div>
          <ul style="margin: 0; padding-left: 16px; font-size: var(--fs-xs); color: var(--ink-soft); line-height: 1.6;">
            <li><strong>관계 규칙 소관</strong>: ${doc.law}</li>
            <li><strong>핵심 행정 조치</strong>: <span style="color: #cf222e;">${doc.alert}</span></li>
          </ul>
          ${doc.simhwa ? doc.simhwa : ''}
        </div>
      </div>
    `;
    
    targetBox.innerHTML = html;
  }

  function runDocValidationProcess(fileName, idx) {
    const panel = document.getElementById('validationPanel');
    if (!panel) return;
    
    panel.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 10px; gap: 12px; flex: 1;">
        <div style="width: 26px; height: 26px; border: 2px solid var(--line); border-top-color: var(--gold); border-radius: 50%; animation: spin 0.7s linear infinite;"></div>
        <div style="font-size: var(--fs-xs); color: var(--ink-soft);">구비 요건 정밀 분석엔진 구동 중...</div>
      </div>
    `;
    
    setTimeout(() => {
      const rules = validationRules[idx];
      if (!rules) {
        panel.innerHTML = `
          <div class="validation-file-info"><span>📄 ${fileName}</span><span>인증 완료</span></div>
          <div class="validation-summary summary-pass"><div style="font-weight: 700;">✓ 행정 규격 지침 부합</div></div>
          <div style="font-size: var(--fs-xs); color: var(--ink-soft); padding: 4px 6px;">주무관청 서식 가이드라인의 필수 식별 영역이 포함되어 심사 반려 리스크가 저조합니다.</div>
        `;
        return;
      }
      
      const failCount = rules.checkItems.filter(i => i.status === 'fail').length;
      const warnCount = rules.checkItems.filter(i => i.status === 'warn').length;
      let statusClass = failCount > 0 ? 'summary-fail' : (warnCount > 0 ? 'summary-warn' : 'summary-pass');
      let statusTitle = failCount > 0 ? '보완 처분 요망 (심사 반려 대상)' : '조건부 수용 가능 (사전 수정 권고)';
      
      let itemsHtml = rules.checkItems.map(item => `
        <div class="validation-item">
          <div class="validation-item-header">
            <span class="validation-item-label">${item.label}</span>
            <span class="validation-badge badge-${item.status}">${item.status.toUpperCase()}</span>
          </div>
          <div class="validation-item-comment">${item.comment}</div>
        </div>
      `).join('');
      
      panel.innerHTML = `
        <div class="validation-file-info"><span>📄 ${fileName}</span><span>${docData[idx].title}</span></div>
        <div class="validation-summary ${statusClass}"><div style="font-weight: 700;">${statusTitle}</div></div>
        <div class="validation-items">${itemsHtml}</div>
      `;
    }, 900);
  }

  window.handleFileSelect = function(e) {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const savedIndex = currentDocIndex;

    const prev = uploadStatus[savedIndex];
    if (prev && !prev.preloaded) URL.revokeObjectURL(prev.url);

    const url = URL.createObjectURL(file);
    uploadStatus[savedIndex] = { name: file.name, size: file.size, url };
    e.target.value = '';

    renderDocTabs();
    renderDocPanel();
    syncGlobalStats();
    runDocValidationProcess(file.name, savedIndex);

    // localStorage에 Base64로 저장하여 새로고침 후에도 유지
    const reader = new FileReader();
    reader.onload = function(evt) {
      const parts = evt.target.result.split(',');
      const mimeType = parts[0].match(/:(.*?);/)[1];
      const base64 = parts[1];
      try {
        localStorage.setItem(`tf_doc_upload_${savedIndex}`, JSON.stringify({
          name: file.name, size: file.size, mimeType, base64
        }));
      } catch (storageErr) {
        console.warn('localStorage 용량 초과, 파일을 저장할 수 없습니다:', storageErr);
      }
    };
    reader.readAsDataURL(file);
  }

  window.removeSelectedFile = function() {
    const cur = uploadStatus[currentDocIndex];
    if (!cur) return;

    if (!cur.preloaded) {
      URL.revokeObjectURL(cur.url);
      localStorage.removeItem(`tf_doc_upload_${currentDocIndex}`);
    }

    // 사전 매핑 파일이 있으면 기본값으로 복원, 없으면 null
    if (preloadedFileMap[currentDocIndex]) {
      const pf = preloadedFileMap[currentDocIndex];
      uploadStatus[currentDocIndex] = { name: pf.name, size: 0, url: pf.url, preloaded: true };
    } else {
      uploadStatus[currentDocIndex] = null;
    }

    renderDocTabs();
    renderDocPanel();
    syncGlobalStats();

    document.getElementById('validationPanel').innerHTML = `
      <div class="dropzone" onclick="document.getElementById('fileInput').click()">
        <span style="font-size: 24px; opacity: 0.6;">📁</span>
        <div class="dropzone-title" style="margin-top: 4px;">실무 검증 대상 서류 공백</div>
        <div class="dropzone-sub">좌측 패널에서 문서를 선택하여 스캔본을 첨부하면 실시간 조항 분석이 개시됩니다.</div>
      </div>
    `;
  }

  window.toggleDocViewer = function(url) {
    const modal = document.getElementById('modalPreview');
    const iframe = document.getElementById('globalPreviewFrame');
    if (!modal || !iframe) return;
    
    iframe.src = url;
    modal.classList.add('open');
  }

  window.openLawModal = function() {
    const modal = document.getElementById('modalLawRule');
    if (modal) modal.classList.add('open');
  };

  function syncGlobalStats() {
    // 미비 서류: Stage 1(비영리법인 설립 단계) 14종 기준
    const stage1Docs = docData.filter(d => d.stage === 1);
    const stage1Indices = stage1Docs.map(d => docData.indexOf(d));
    const doneSt1 = stage1Indices.filter(i => uploadStatus[i] !== null).length;
    const remainSt1 = stage1Docs.length - doneSt1;

    // 전체 업로드 완료 수
    const doneDocs = uploadStatus.filter(x => x !== null).length;
    
    // 체크리스트 점검 완료 수
    let doneChecklist = 0;
    let totalChecklist = 0;
    Object.keys(stageChecklists).forEach(stage => {
      stageChecklists[stage].forEach(item => {
        totalChecklist++;
        if (localStorage.getItem(`tf_checklist_${item.id}`) === 'true') {
          doneChecklist++;
        }
      });
    });

    const totalTask = docData.length + totalChecklist;
    const doneTask = doneDocs + doneChecklist;
    const pctStr = Math.floor((doneTask / totalTask) * 100) + '%';
    
    if(document.getElementById('uploadCount')) document.getElementById('uploadCount').innerText = doneDocs;
    if(document.getElementById('remainCount')) document.getElementById('remainCount').innerText = remainSt1;
    if(document.getElementById('docProgressPct')) document.getElementById('docProgressPct').innerText = pctStr;
    
    // Update global header progress percent
    const globalProgressEl = document.getElementById('progressPercent');
    if(globalProgressEl) globalProgressEl.innerText = pctStr;
  }

  initUploadStatus();
  renderDocTabs();
  renderDocPanel();
  syncGlobalStats();
  const initFile = uploadStatus[currentDocIndex];
  if (initFile) runDocValidationProcess(initFile.name, currentDocIndex);

/* ====================================================
     자금 시뮬레이션 계산 엔진 및 시나리오/저장 슬롯 관리
     ==================================================== */
  let fundCompIdCounter = 0;

  window.addNewFundCompany = function(initialData = {}) {
    fundCompIdCounter++;
    const id = fundCompIdCounter;
    const cardId = `fundCompCard_${id}`;
    const container = document.getElementById('fundCompanyContainer');
    if (!container) return;

    const name = initialData.name || `출연기업 ${id}`;
    const isAff = initialData.isAff !== false;
    const ts = initialData.ts || '0';
    const cs = initialData.cs || '0';
    const pr = initialData.pr || '0';
    const cash = initialData.cash || '0';

    const cardHtml = `
      <div class="plan-card" id="${cardId}" style="position: relative; padding: 20px; border-radius: 12px; background: var(--bg); border: 1px solid var(--line-soft); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px;">
        <button onclick="deleteFundCompany('${cardId}')" style="position: absolute; right: 12px; top: 12px; background: none; border: none; font-size: 16px; color: var(--ink-mute); cursor: pointer; font-weight: bold; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s;" onmouseover="this.style.background='rgba(207,34,46,0.1)'; this.style.color='var(--accent-red)'" onmouseout="this.style.background='none'; this.style.color='var(--ink-mute)'">✕</button>
        
        <div style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--line-soft); padding-bottom: 8px; margin-bottom: 4px;">
          <input type="text" class="fund-comp-name" value="${name}" oninput="updateFundSim()" style="background: transparent; border: none; border-bottom: 1px solid transparent; color: var(--ink); font-weight: 700; font-size: var(--fs-md); outline: none; width: 60%; transition: border 0.2s;" onfocus="this.style.borderBottomColor='var(--accent)'" onblur="this.style.borderBottomColor='transparent'">
          <label style="color: var(--gold); cursor: pointer; font-size: var(--fs-xs); display: flex; align-items: center; gap: 4px; user-select: none; font-weight: 600;">
            <input type="checkbox" class="fund-comp-aff" ${isAff ? 'checked' : ''} onchange="updateFundSim()"> 계열사 여부
          </label>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            <label style="font-size: 9px; color: var(--ink-soft); font-weight: 600; display: block; margin-bottom: 4px;">발행주식총수</label>
            <input type="text" class="fund-comp-ts" value="${ts}" oninput="handleFundInput(this)" style="width: 100%; background: var(--bg-soft); border: 1px solid var(--line); color: var(--ink); padding: 5px 8px; border-radius: 6px; font-size: var(--fs-xs); text-align: right; font-family: monospace; font-weight: 700; outline: none;">
            <span class="fund-comp-guide" style="font-size: 9px; color: var(--ink-mute); display: block; margin-top: 2px;">5%: 0 | 10%: 0</span>
          </div>
          <div>
            <label style="font-size: 9px; color: var(--ink-soft); font-weight: 600; display: block; margin-bottom: 4px;">출연 주식 수</label>
            <input type="text" class="fund-comp-cs" value="${cs}" oninput="handleFundInput(this)" style="width: 100%; background: var(--bg-soft); border: 1px solid var(--line); color: var(--ink); padding: 5px 8px; border-radius: 6px; font-size: var(--fs-xs); text-align: right; font-family: monospace; font-weight: 700; outline: none;">
            <span style="font-size: 9px; color: var(--ink-soft); display: block; margin-top: 2px; font-weight: 600;">출연율: <span class="fund-comp-ratio" style="color: var(--accent);">0.00%</span></span>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            <label style="font-size: 9px; color: var(--ink-soft); font-weight: 600; display: block; margin-bottom: 4px;">주당 평가액(원)</label>
            <input type="text" class="fund-comp-pr" value="${pr}" oninput="handleFundInput(this)" style="width: 100%; background: var(--bg-soft); border: 1px solid var(--line); color: var(--ink); padding: 5px 8px; border-radius: 6px; font-size: var(--fs-xs); text-align: right; font-family: monospace; font-weight: 700; outline: none;">
          </div>
          <div>
            <label style="font-size: 9px; color: var(--ink-soft); font-weight: 600; display: block; margin-bottom: 4px;">현금 출연액(원)</label>
            <input type="text" class="fund-comp-cash" value="${cash}" oninput="handleFundInput(this)" style="width: 100%; background: var(--bg-soft); border: 1px solid var(--line); color: var(--ink); padding: 5px 8px; border-radius: 6px; font-size: var(--fs-xs); text-align: right; font-family: monospace; font-weight: 700; outline: none;">
          </div>
        </div>
        
        <div class="fund-comp-subtotal" style="background: var(--bg-soft); padding: 10px; border-radius: 8px; border: 1px solid var(--line-soft); font-size: var(--fs-xs); display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
          <!-- 소계 자동 연산 결과 -->
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHtml);
    updateFundSim();
  };

  window.deleteFundCompany = function(cardId) {
    const cards = document.querySelectorAll('.plan-card[id^="fundCompCard_"]');
    if (cards.length <= 1) {
      alert("최소 한 명의 출연자 세부 기획은 존재해야 합니다.");
      return;
    }
    const cardEl = document.getElementById(cardId);
    if (cardEl) {
      cardEl.remove();
      updateFundSim();
    }
  };

  window.handleFundInput = function(el) {
    let str = el.value.replace(/\D/g, "");
    el.value = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    updateFundSim();
  };

  function calcGiftTax(base) {
    if (base <= 0) return 0;
    if (base <= 1e8) return base * 0.1;
    if (base <= 5e8) return base * 0.2 - 1e7;
    if (base <= 1e9) return base * 0.3 - 6e7;
    if (base <= 3e9) return base * 0.4 - 1.6e8;
    return base * 0.5 - 4.6e8;
  }

  function fNum(n) {
    if (!n) return "0";
    let str = Math.round(n).toString().replace(/\D/g, "");
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function pNum(s) {
    if (!s) return 0;
    return parseFloat(s.toString().replace(/,/g, "")) || 0;
  }

  window.updateFundSim = function() {
    const cards = document.querySelectorAll('.plan-card[id^="fundCompCard_"]');
    let totalStockVal = 0;
    let totalCashVal = 0;
    let affStockVal = 0;
    let totalExcessGiftTax = 0;
    let foundationHasStockOver5 = false;
    let foundationHasStockOver10 = false;
    let tableHtml = "";

    cards.forEach(card => {
      const name = card.querySelector('.fund-comp-name').value;
      const ts = pNum(card.querySelector('.fund-comp-ts').value);
      const cs = pNum(card.querySelector('.fund-comp-cs').value);
      const pr = pNum(card.querySelector('.fund-comp-pr').value);
      const cash = pNum(card.querySelector('.fund-comp-cash').value);
      const isAff = card.querySelector('.fund-comp-aff').checked;

      const ratio = ts > 0 ? (cs / ts) * 100 : 0;
      if (ratio > 5) foundationHasStockOver5 = true;
      if (ratio > 10) foundationHasStockOver10 = true;

      const stockVal = cs * pr;
      totalStockVal += stockVal;
      totalCashVal += cash;
      if (isAff) affStockVal += stockVal;

      card.querySelector('.fund-comp-guide').innerText = `5%: ${fNum(Math.floor(ts * 0.05))} | 10%: ${fNum(Math.floor(ts * 0.1))}`;
      card.querySelector('.fund-comp-ratio').innerText = ratio.toFixed(2) + "%";

      card.querySelector('.fund-comp-subtotal').innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
          <span>주식 출연액:</span><span style="font-weight: 600; color: var(--ink);">${fNum(stockVal)}원</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>현금 출연액:</span><span style="font-weight: 600; color: var(--ink-soft);">+ ${fNum(cash)}원</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed var(--line); padding-top: 4px; font-weight: 700;">
          <span style="color: var(--ink);">합계 소계:</span><span style="color: var(--accent);">= ${fNum(stockVal + cash)}원</span>
        </div>
      `;

      const excessStockVal = ratio > 10 ? (cs - (ts * 0.1)) * pr : 0;
      const giftTax = calcGiftTax(excessStockVal);
      totalExcessGiftTax += giftTax;

      tableHtml += `
        <tr style="border-bottom: 1px solid var(--line-soft); transition: background 0.2s;" onmouseover="this.style.background='var(--bg-soft)'" onmouseout="this.style.background='transparent'">
          <td style="padding: 12px 14px; font-weight: 600; color: var(--ink);">${name}</td>
          <td style="padding: 12px 14px; font-family: monospace;">${ratio.toFixed(2)}%</td>
          <td style="padding: 12px 14px;">
            <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; ${ratio <= 10 ? 'background: rgba(46,125,50,0.1); color: var(--done);' : 'background: rgba(207,34,46,0.1); color: var(--accent-red);'}">
              ${ratio <= 10 ? '적합' : '초과 (과세 대상)'}
            </span>
          </td>
          <td style="padding: 12px 14px;"><span id="assetBadge_${card.id}">-</span></td>
          <td style="padding: 12px 14px; text-align: right; font-family: monospace;">${fNum(stockVal)}원</td>
          <td style="padding: 12px 14px; text-align: right; font-family: monospace; color: var(--accent-red); font-weight: 700;">${fNum(giftTax)}원</td>
        </tr>
      `;
    });

    const totalAsset = totalStockVal + totalCashVal;
    const affRatio = totalAsset > 0 ? (affStockVal / totalAsset) * 100 : 0;

    if (document.getElementById('fundResTotalStock')) document.getElementById('fundResTotalStock').innerText = fNum(totalStockVal) + "원";
    if (document.getElementById('fundResTotalCash')) document.getElementById('fundResTotalCash').innerText = fNum(totalCashVal) + "원";
    if (document.getElementById('fundResTotal')) document.getElementById('fundResTotal').innerText = fNum(totalAsset) + "원";
    if (document.getElementById('fundResAffRatio')) document.getElementById('fundResAffRatio').innerText = affRatio.toFixed(2) + "%";
    
    const barAff = document.getElementById('fundBarAff');
    if (barAff) {
      barAff.style.width = Math.min(affRatio, 100) + "%";
      barAff.style.backgroundColor = affRatio > 50 ? "var(--accent-red)" : "var(--accent)";
    }

    if (document.getElementById('fundAnalysisBody')) document.getElementById('fundAnalysisBody').innerHTML = tableHtml;

    cards.forEach(card => {
      const sv = pNum(card.querySelector('.fund-comp-cs').value) * pNum(card.querySelector('.fund-comp-pr').value);
      const singleRatio = totalAsset > 0 ? (sv / totalAsset) * 100 : 0;
      const b = document.getElementById(`assetBadge_${card.id}`);
      if (b) {
        b.innerText = singleRatio.toFixed(1) + "%";
        b.style.display = "inline-block";
        b.style.padding = "2px 8px";
        b.style.borderRadius = "4px";
        b.style.fontSize = "10px";
        b.style.fontWeight = "700";
        if (singleRatio <= 30) {
          b.style.background = "rgba(46,125,50,0.1)";
          b.style.color = "var(--done)";
        } else {
          b.style.background = "rgba(207,34,46,0.1)";
          b.style.color = "var(--accent-red)";
        }
      }
    });

    const input3Percent = document.getElementById('fundVAssetShort3');
    if (input3Percent) {
      input3Percent.disabled = !foundationHasStockOver10;
      if (!foundationHasStockOver10) input3Percent.value = "0";
    }

    const budgetInput = document.getElementById('fundAnnualBudget');
    const budget = budgetInput ? pNum(budgetInput.value) : 0;
    const req3 = budget * 3;
    const isStable = totalCashVal >= req3 && totalCashVal > 0;
    const stabilityBox = document.getElementById('fundCashStability');
    if (stabilityBox) {
      stabilityBox.style.background = isStable ? "rgba(46,125,50,0.05)" : (totalCashVal > 0 ? "rgba(207,34,46,0.05)" : "var(--bg-soft)");
      stabilityBox.style.border = isStable ? "1px solid rgba(46,125,50,0.15)" : (totalCashVal > 0 ? "1px solid rgba(207,34,46,0.15)" : "1px solid var(--line-soft)");
      stabilityBox.innerHTML = `
        <div style="font-size: 11px; color: var(--ink-soft);">
          출연현금: <strong style="color: var(--accent);">${fNum(totalCashVal)}원</strong> / 3개년 안정 예산(연*3): <strong>${fNum(req3)}원</strong>
        </div>
        <div style="margin-top: 8px; font-weight: bold; color: ${isStable ? 'var(--done)' : (totalCashVal > 0 ? 'var(--accent-red)' : 'var(--ink-mute)')}; display: flex; align-items: center; gap: 4px;">
          ${totalCashVal === 0 ? "⚠️ 세부 계획에 보통재산(현금) 출연을 계획하십시오." : (isStable ? "✓ 보통재산(현금) 규모 운영 안정성 검사 적합" : "⚠ 재단 지속가능성 위험: 현금 출연 비중 상향 필요")}
        </div>
      `;
    }

    const unusedGiftInput = document.getElementById('fundUnusedGift');
    const vG1 = calcGiftTax(unusedGiftInput ? pNum(unusedGiftInput.value) : 0);
    if (document.getElementById('fundResGift1')) document.getElementById('fundResGift1').innerText = fNum(vG1) + "원";

    const saleShortStepInput = document.getElementById('fundSaleShortStep');
    const vP2 = (saleShortStepInput ? pNum(saleShortStepInput.value) : 0) * 0.1;
    if (document.getElementById('fundResPenalty2')) document.getElementById('fundResPenalty2').innerText = fNum(vP2) + "원";

    const saleShortFinalInput = document.getElementById('fundSaleShortFinal');
    const vG2 = calcGiftTax(saleShortFinalInput ? pNum(saleShortFinalInput.value) : 0);
    if (document.getElementById('fundResGift2')) document.getElementById('fundResGift2').innerText = fNum(vG2) + "원";

    const opIncomeInput = document.getElementById('fundOpIncome');
    const opNonPublicInput = document.getElementById('fundOpNonPublic');
    const vG3 = (opIncomeInput && pNum(opIncomeInput.value) > 0 && opNonPublicInput) ? calcGiftTax(totalStockVal * (pNum(opNonPublicInput.value) / pNum(opIncomeInput.value))) : 0;
    if (document.getElementById('fundResGift3')) document.getElementById('fundResGift3').innerText = fNum(vG3) + "원";

    const opShort80Input = document.getElementById('fundOpShort80');
    const vP3 = (opShort80Input ? pNum(opShort80Input.value) : 0) * 0.1;
    if (document.getElementById('fundResPenalty3')) document.getElementById('fundResPenalty3').innerText = fNum(vP3) + "원";

    const vAssetShort1Input = document.getElementById('fundVAssetShort1');
    const vP4_1 = (vAssetShort1Input ? pNum(vAssetShort1Input.value) : 0) * (foundationHasStockOver5 ? 2.0 : 0.1);
    if (document.getElementById('fundResPenalty4_1')) {
      document.getElementById('fundResPenalty4_1').innerText = (foundationHasStockOver5 ? "[200% 중과] " : "[10% 가산] ") + fNum(vP4_1) + "원";
      document.getElementById('fundResPenalty4_1').style.color = foundationHasStockOver5 ? "var(--accent-red)" : "var(--ink-soft)";
    }

    const vAssetShort3Input = document.getElementById('fundVAssetShort3');
    const vP4_3 = (vAssetShort3Input ? pNum(vAssetShort3Input.value) : 0) * (foundationHasStockOver5 ? 2.0 : 0.1);
    if (document.getElementById('fundResPenalty4_3')) {
      document.getElementById('fundResPenalty4_3').innerText = (foundationHasStockOver5 ? "[200% 중과] " : "[10% 가산] ") + fNum(vP4_3) + "원";
      document.getElementById('fundResPenalty4_3').style.color = foundationHasStockOver5 ? "var(--accent-red)" : "var(--ink-soft)";
    }

    const totalTax = totalExcessGiftTax + vG1 + vP2 + vG2 + vG3 + vP3 + vP4_1 + vP4_3;
    if (document.getElementById('fundResTotalTax')) {
      document.getElementById('fundResTotalTax').innerText = fNum(totalTax) + "원";
    }
  };

  window.saveFundScenario = function() {
    const slot = document.getElementById('simSaveSlot').value;
    const cards = document.querySelectorAll('.plan-card[id^="fundCompCard_"]');
    
    const data = {
      companies: Array.from(cards).map(card => ({
        name: card.querySelector('.fund-comp-name').value,
        ts: card.querySelector('.fund-comp-ts').value,
        cs: card.querySelector('.fund-comp-cs').value,
        pr: card.querySelector('.fund-comp-pr').value,
        cash: card.querySelector('.fund-comp-cash').value,
        isAff: card.querySelector('.fund-comp-aff').checked
      })),
      others: {
        fundAnnualBudget: document.getElementById('fundAnnualBudget').value,
        fundUnusedGift: document.getElementById('fundUnusedGift').value,
        fundSaleTotal: document.getElementById('fundSaleTotal').value,
        fundSaleShortStep: document.getElementById('fundSaleShortStep').value,
        fundSaleShortFinal: document.getElementById('fundSaleShortFinal').value,
        fundOpIncome: document.getElementById('fundOpIncome').value,
        fundOpNonPublic: document.getElementById('fundOpNonPublic').value,
        fundOpShort80: document.getElementById('fundOpShort80').value,
        fundVAssetShort1: document.getElementById('fundVAssetShort1').value,
        fundVAssetShort3: document.getElementById('fundVAssetShort3').value
      },
      checks: [
        { id: 'chkDoc1', checked: document.getElementById('chkDoc1').checked },
        { id: 'chkDoc2', checked: document.getElementById('chkDoc2').checked },
        { id: 'chkDoc3', checked: document.getElementById('chkDoc3').checked },
        { id: 'chkDoc4', checked: document.getElementById('chkDoc4').checked },
        { id: 'chkObl1', checked: document.getElementById('chkObl1').checked },
        { id: 'chkObl2', checked: document.getElementById('chkObl2').checked },
        { id: 'chkObl3', checked: document.getElementById('chkObl3').checked },
        { id: 'chkObl4', checked: document.getElementById('chkObl4').checked }
      ]
    };
    
    localStorage.setItem('tf_fund_sim_' + slot, JSON.stringify(data));
    alert(`시뮬레이션 [시나리오 ${slot}번] 슬롯에 정상 저장되었습니다.`);
    updateFundScenarioButtons();
  };

  window.loadFundScenario = function(slot) {
    const saved = localStorage.getItem('tf_fund_sim_' + slot);
    if (!saved) {
      alert(`시나리오 ${slot}번 슬롯에 저장된 데이터가 없습니다. 먼저 저장해주세요.`);
      return;
    }
    
    const data = JSON.parse(saved);
    const container = document.getElementById('fundCompanyContainer');
    if (!container) return;
    
    container.innerHTML = '';
    fundCompIdCounter = 0;
    
    data.companies.forEach(c => addNewFundCompany(c));
    
    for (let key in data.others) {
      const el = document.getElementById(key);
      if (el) el.value = data.others[key];
    }
    
    data.checks.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) el.checked = c.checked;
    });
    
    alert(`[시나리오 ${slot}번] 데이터를 성공적으로 로드했습니다.`);
    updateFundSim();
  };

  window.updateFundScenarioButtons = function() {
    for (let i = 1; i <= 3; i++) {
      const btn = document.getElementById('sim-btn-sc' + i);
      if (!btn) continue;
      const saved = localStorage.getItem('tf_fund_sim_' + i);
      if (saved) {
        btn.style.color = '#fff';
        btn.style.background = 'var(--accent)';
        btn.style.borderColor = 'var(--accent)';
        btn.innerText = `시나리오 ${i} 💾`;
      } else {
        btn.style.color = 'var(--ink-soft)';
        btn.style.background = 'transparent';
        btn.style.borderColor = 'var(--line-soft)';
        btn.innerText = `시나리오 ${i}`;
      }
    }
  };

  window.clearFundSavedData = function() {
    if (confirm('모든 자금 시뮬레이션 시나리오 저장 슬롯을 영구 삭제하고 브라우저를 새로고침하시겠습니까?')) {
      for (let i = 1; i <= 3; i++) {
        localStorage.removeItem('tf_fund_sim_' + i);
      }
      location.reload();
    }
  };

  window.resetFundAllInputs = function() {
    if (confirm('모든 시뮬레이션 필드 입력을 0으로 초기화하시겠습니까?')) {
      const container = document.getElementById('fundCompanyContainer');
      if (container) container.innerHTML = '';
      fundCompIdCounter = 0;
      addNewFundCompany();
      
      const ids = [
        'fundAnnualBudget', 'fundUnusedGift', 'fundSaleTotal', 'fundSaleShortStep',
        'fundSaleShortFinal', 'fundOpIncome', 'fundOpNonPublic', 'fundOpShort80',
        'fundVAssetShort1', 'fundVAssetShort3'
      ];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "0";
      });
      
      const chks = ['chkDoc1', 'chkDoc2', 'chkDoc3', 'chkDoc4', 'chkObl1', 'chkObl2', 'chkObl3', 'chkObl4'];
      chks.forEach(chk => {
        const el = document.getElementById(chk);
        if (el) el.checked = false;
      });
      
      updateFundSim();
    }
  };

  const originalOpenModal = openModal;
  openModal = function(modal) {
    originalOpenModal(modal);
    if (modal.id === 'modalFund') {
      const container = document.getElementById('fundCompanyContainer');
      if (container && container.children.length === 0) {
        addNewFundCompany();
      }
      updateFundScenarioButtons();
    }
  };

})();
