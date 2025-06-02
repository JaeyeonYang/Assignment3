export type CourseTree = {
  track: string;
  course_code: string;
  course_name: string;
  year: string | number;
  type: '권장' | '선택';
  credits?: number;
  semester: number | null;
};

export const courseTrees: CourseTree[][] = [
  [
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1008",
      "course_name": "공학기초분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1007",
      "course_name": "일반화학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL1013",
      "course_name": "화학 및 생물공정 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL1012",
      "course_name": "물리화학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL3011",
      "course_name": "제어이론과 응용",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL3010",
      "course_name": "전달현상",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL4004",
      "course_name": "반응공학 및 분리공정",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL5999",
      "course_name": "에너지와 지구환경 변화",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL2013",
      "course_name": "양자화학 및 분광학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL1009",
      "course_name": "기초회로이론",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL2006",
      "course_name": "기계학습 개론",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL4012",
      "course_name": "원자력에너지공학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL4011",
      "course_name": "통계역학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EL5011",
      "course_name": "전력시스템 경제",
      "year": 4,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EE5304",
      "course_name": "Ceramic Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EE6303",
      "course_name": "Electrochemical Hydrogen Production",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EE6304",
      "course_name": "Cryogenic Plant Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EE6306",
      "course_name": "Fuel Cell Principles and Applications",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Process for Hydrogen Energy",
      "course_code": "EE7302",
      "course_name": "Special Topics in Hydrogen Energy Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL1009",
      "course_name": "기초회로 이론",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL3007",
      "course_name": "전자회로",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL3011",
      "course_name": "제어이론과 응용",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL4009",
      "course_name": "전기기기",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL5009",
      "course_name": "전력전자",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL1010",
      "course_name": "전자기학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL3012",
      "course_name": "반도체소자",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL1011",
      "course_name": "재료과학 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL2003",
      "course_name": "결정구조와 결합",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL3013",
      "course_name": "나노공학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF1008",
      "course_name": "공학미적분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EE5402",
      "course_name": "Power Semiconductor Device",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Power Electronics and Semiconductor",
      "course_code": "EE7401",
      "course_name": "Organic Semiconductors",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Nuclear Energy",
      "course_code": "EF1008",
      "course_name": "공학기초분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL1010",
      "course_name": "전자기학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL3010",
      "course_name": "전달현상",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL4012",
      "course_name": "원자력에너지공학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL5012",
      "course_name": "핵융합공학",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL5001",
      "course_name": "강화학습",
      "year": 4,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL3007",
      "course_name": "전자회로",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EL1009",
      "course_name": "기초회로 이론",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EF2039",
      "course_name": "인공지능 프로그래밍 기초",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EE5510",
      "course_name": "Materials in Extreme Conditions",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EE6511",
      "course_name": "Low-temperature Plasma Technology",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Nuclear Energy",
      "course_code": "EE6704",
      "course_name": "Reactor Safety Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "New Energy Materials",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EF1007",
      "course_name": "일반화학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL1011",
      "course_name": "재료과학 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL1012",
      "course_name": "물리화학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL1010",
      "course_name": "전자기학",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL2003",
      "course_name": "결정구조와 결합",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL2005",
      "course_name": "유기화학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL2013",
      "course_name": "양자화학 및 분광학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL3014",
      "course_name": "고분자공학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL4004",
      "course_name": "반응공학 및 분리공정",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL5999",
      "course_name": "에너지와 지구환경 변화",
      "year": 4,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL1013",
      "course_name": "화학 및 생물공정 기초",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL3013",
      "course_name": "나노공학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EL4011",
      "course_name": "통계역학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE5304",
      "course_name": "Ceramic Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6303",
      "course_name": "Electrochemical Hydrogen Production",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6304",
      "course_name": "Cryogenic Plant Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6306",
      "course_name": "Fuel Cell Principles and Applications",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE7302",
      "course_name": "Special Topics in Hydrogen Energy Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6503",
      "course_name": "Advanced Spectroscopy for Energy Conversion",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6510",
      "course_name": "Environmental Chemistry for Energy Research",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE5501",
      "course_name": "Advanced Chemical Reaction Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE5502",
      "course_name": "Energy Nanoscience",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE5509",
      "course_name": "Design of Advanced Catalytic Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "New Energy Materials",
      "course_code": "EE6504",
      "course_name": "Environmental Biotechnology",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1008",
      "course_name": "공학미적분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1007",
      "course_name": "일반화학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL1011",
      "course_name": "재료과학 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL1012",
      "course_name": "물리화학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL2003",
      "course_name": "결정구조와 결합",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL2005",
      "course_name": "유기화학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL2013",
      "course_name": "양자화학 및 분광학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL3014",
      "course_name": "고분자공학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL3010",
      "course_name": "전달현상",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL4013",
      "course_name": "무기화학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL4004",
      "course_name": "반응공학 및 분리공정",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL5999",
      "course_name": "에너지와 지구환경 변화",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL1013",
      "course_name": "화학 및 생물공정 기초",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL3013",
      "course_name": "나노공학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EL4011",
      "course_name": "통계역학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE5304",
      "course_name": "Ceramic Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6303",
      "course_name": "Electrochemical Hydrogen Production",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6304",
      "course_name": "Cryogenic Plant Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6306",
      "course_name": "Fuel Cell Principles and Applications",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE7302",
      "course_name": "Special Topics in Hydrogen Energy Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6503",
      "course_name": "Advanced Spectroscopy for Energy Conversion",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6510",
      "course_name": "Environmental Chemistry for Energy Research",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE5501",
      "course_name": "Advanced Chemical Reaction Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE5502",
      "course_name": "Energy Nanoscience",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE5509",
      "course_name": "Design of Advanced Catalytic Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Materials for Hydrogen Energy",
      "course_code": "EE6504",
      "course_name": "Environmental Biotechnology",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Electric Power Systems",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL1009",
      "course_name": "기초회로 이론",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL3007",
      "course_name": "전자회로",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL3011",
      "course_name": "제어이론과 응용",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL4009",
      "course_name": "전기기기",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL5009",
      "course_name": "전력전자",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL1010",
      "course_name": "전자기학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL2012",
      "course_name": "네트워크 과학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL2006",
      "course_name": "기계학습 개론",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL5004",
      "course_name": "전력시스템 공학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EL5011",
      "course_name": "전력시스템 경제",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF1008",
      "course_name": "공학미적분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF2039",
      "course_name": "인공지능 프로그래밍 기초",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EE6402",
      "course_name": "Power System Control Theory",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EE7401",
      "course_name": "Power System Optimization",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EE6410",
      "course_name": "Energy Policy",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Electric Power Systems",
      "course_code": "EE5403",
      "course_name": "Complex Network Analysis",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF1008",
      "course_name": "공학미적분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL4011",
      "course_name": "통계역학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1012",
      "course_name": "물리화학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2013",
      "course_name": "양자화학 및 분광학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1007",
      "course_name": "일반화학 2",
      "year": 1,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2005",
      "course_name": "유기화학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL4013",
      "course_name": "무기화학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL3014",
      "course_name": "고분자공학",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1013",
      "course_name": "화학 및 생물공정 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL4004",
      "course_name": "반응공학 및 분리공정",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL3010",
      "course_name": "전달현상",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL5999",
      "course_name": "에너지와 지구환경 변화",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 1,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2015",
      "course_name": "생물과학",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1011",
      "course_name": "재료과학 기초",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL1010",
      "course_name": "전자기학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL2003",
      "course_name": "결정구조와 결합",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EL3012",
      "course_name": "반도체소자",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EE5502",
      "course_name": "Energy Nanoscience",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EE5509",
      "course_name": "Design of Advanced Catalytic Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EE5501",
      "course_name": "Advanced Chemical Reaction Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Chemical & Biological Engineering",
      "course_code": "EE6504",
      "course_name": "Environmental Biotechnology",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Carbon Upcycling",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EF1007",
      "course_name": "일반화학 2",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EF1012",
      "course_name": "물리화학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2013",
      "course_name": "양자화학 및 분광학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL3015",
      "course_name": "전기화학",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL5003",
      "course_name": "기기분석 및 계측",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL1013",
      "course_name": "화학 및 생물공정 기초",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2014",
      "course_name": "열역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL3010",
      "course_name": "전달현상",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL4004",
      "course_name": "반응공학 및 분리공정",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2011",
      "course_name": "유체역학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL3014",
      "course_name": "고분자공학",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2015",
      "course_name": "생물과학",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2005",
      "course_name": "유기화학",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL4013",
      "course_name": "무기화학",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL5999",
      "course_name": "에너지와 지구환경 변화",
      "year": 4,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL1011",
      "course_name": "재료과학 기초",
      "year": 2,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL2003",
      "course_name": "결정구조와 결합",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL3013",
      "course_name": "나노공학",
      "year": 3,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EL4011",
      "course_name": "통계역학",
      "year": 4,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE5304",
      "course_name": "Ceramic Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6303",
      "course_name": "Electrochemical Hydrogen Production",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6304",
      "course_name": "Cryogenic Plant Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6306",
      "course_name": "Fuel Cell Principles and Applications",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE7302",
      "course_name": "Special Topics in Hydrogen Energy Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6503",
      "course_name": "Advanced Spectroscopy for Energy Conversion",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6510",
      "course_name": "Environmental Chemistry for Energy Research",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE5501",
      "course_name": "Advanced Chemical Reaction Engineering",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE5502",
      "course_name": "Energy Nanoscience",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE5509",
      "course_name": "Design of Advanced Catalytic Materials",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Carbon Upcycling",
      "course_code": "EE6504",
      "course_name": "Environmental Biotechnology",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ],
  [
    {
      "track": "Artificial Intelligence",
      "course_code": "EF1008",
      "course_name": "공학미적분학",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF1003",
      "course_name": "데이터리터러시 기초",
      "year": 1,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF1004",
      "course_name": "일반물리학 1",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF1009",
      "course_name": "벡터미적분학과 선형대수학",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF2039",
      "course_name": "인공지능 프로그래밍 기초",
      "year": 1,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL1005",
      "course_name": "자료구조",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL2006",
      "course_name": "기계학습 개론",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL2012",
      "course_name": "네트워크 과학",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL3006",
      "course_name": "심층학습 개론",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL3001",
      "course_name": "알고리즘",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL4001",
      "course_name": "컴퓨터 비전",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL4006",
      "course_name": "자연어 처리",
      "year": 3,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL5001",
      "course_name": "강화학습",
      "year": 4,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL1001",
      "course_name": "컴퓨터 구조와 시스템",
      "year": 2,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL2001",
      "course_name": "컴퓨터 과학을 위한 수학 기초",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EL3002",
      "course_name": "제어이론과 응용",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF2008",
      "course_name": "공업수학 2 (복소해석, 수치해석, 확률과 통계)",
      "year": 2,
      "semester": 2,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF2004",
      "course_name": "일반물리학 2",
      "year": 2,
      "semester": 2,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF1006",
      "course_name": "일반화학 1",
      "year": 3,
      "semester": 1,
      "type": "권장"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EF2007",
      "course_name": "공업수학 1 (미분방정식과 푸리에 해석학)",
      "year": 3,
      "semester": 1,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EE6103",
      "course_name": "Human Computer Interface",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EE6104",
      "course_name": "Computer Security",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EE6105",
      "course_name": "Real Time Distributed Systems",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EE6107",
      "course_name": "Wireless Networks",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    },
    {
      "track": "Artificial Intelligence",
      "course_code": "EE7101",
      "course_name": "Cloud Computing",
      "year": "대학원",
      "semester": null,
      "type": "선택"
    }
  ]
]; 