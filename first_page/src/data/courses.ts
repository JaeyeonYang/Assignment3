export interface Course {
    courseCode: string;
    courseName: string;
    area: string;
    professor: string;
    credits: string;
    department: string;
    year: string | number;
}

export const courses: { [key: string]: Course[] } = {
    "spring22": [
        {
            courseCode: "EF1001",
            courseName: "Single Variable Calculus for Engineers",
            area: "EF",
            professor: "김현주",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "EF1002",
            courseName: "Fundamentals of Chemistry",
            area: "EF",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Jennifer Manning",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "Paul Capobianco",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "MN1001",
            courseName: "Strategic Learning and Leadership",
            area: "MN",
            professor: "윤철민",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1101",
            courseName: "Visionary Course-Energy AI ",
            area: "VC",
            professor: "이석주, 임혁",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1201",
            courseName: "Visionary Course-Energy Materials and Devices",
            area: "VC",
            professor: "이승진, 정의혁",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1301",
            courseName: "Visionary Course-Hydrogen Energy",
            area: "VC",
            professor: "황지현, 심욱",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1401",
            courseName: "Visionary Course-Grid Modernization",
            area: "VC",
            professor: "김희태, 이규섭",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1501",
            courseName: "Visionary Course-Environmental and Climate Technology",
            area: "VC",
            professor: "오명환, 김우열",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "RC1001",
            courseName: "RC Freshmen Seminar 1",
            area: "RC",
            professor: "김은정, 부경호, Peter Jang, 조숙경",
            credits: "1",
            department: "RC교육센터",
            year: "2022"
        }
    ],
    "fall22": [
        {
            courseCode: "EF1003",
            courseName: "Data Literacy Foundations",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "EF1004",
            courseName: "General Physics Ⅰ: Mechanics and Electromagnetism",
            area: "EF",
            professor: "강병남",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "MN1002",
            courseName: "Applied Creative and Critical Thinking",
            area: "MN",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1101",
            courseName: "Visionary Course-Energy AI ",
            area: "VC",
            professor: "이석주, 임혁",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1201",
            courseName: "Visionary Course-Energy Materials and Devices",
            area: "VC",
            professor: "서동한, 송주현",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1301",
            courseName: "Visionary Course-Hydrogen Energy",
            area: "VC",
            professor: "이영덕, 배기호",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1401",
            courseName: "Visionary Course-Grid Modernization",
            area: "VC",
            professor: "김희태, 이규섭",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "VC1501",
            courseName: "Visionary Course-Environmental and Climate Technology",
            area: "VC",
            professor: "김우열, 김효원",
            credits: "4",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "Jennifer Manning",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Jennifer Manning",
            credits: "P",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "RC1002",
            courseName: "RC Social Engagement",
            area: "RC",
            professor: "김경",
            credits: "2",
            department: "RC교육센터",
            year: "2022"
        }
    ],
    "winter22": [
        {
            courseCode: "RC2001",
            courseName: "RC Student-Led-Program 1",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2022"
        }
    ],
    "summer22": [
        {
            courseCode: "FR1002",
            courseName: "Blue Hydrogen Principle and Application",
            area: "FR",
            professor: "황지현",
            credits: "1",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "FR1003",
            courseName: "Introduction to Ethics",
            area: "FR",
            professor: "윤철민",
            credits: "1",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "FR1004",
            courseName: "Introduction to Finance and Accounting for Engineers",
            area: "FR",
            professor: "Peter Jang",
            credits: "2",
            department: "에너지공학부",
            year: "2022"
        },
        {
            courseCode: "FR1005",
            courseName: "Eible Ⅰ - Creative Research Activity",
            area: "FR",
            professor: "김경",
            credits: "2",
            department: "에너지공학부",
            year: "2022"
        }
    ],
    "spring23": [
        {
            courseCode: "EF1002",
            courseName: "Fundamentals of Chemistry",
            area: "EF",
            professor: "구근호",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "MN1001",
            courseName: "Strategic Learning and Leadership",
            area: "MN",
            professor: "조숙경",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1101",
            courseName: "Visionary Course-Energy AI ",
            area: "VC",
            professor: "임혁",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1201",
            courseName: "Visionary Course-Energy Materials and Devices",
            area: "VC",
            professor: "윤재호",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1301",
            courseName: "Visionary Course-Hydrogen Energy",
            area: "VC",
            professor: "황지현",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1401",
            courseName: "Visionary Course-Grid Modernization",
            area: "VC",
            professor: "이준희",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1501",
            courseName: "Visionary Course-Environmental and Climate Technology",
            area: "VC",
            professor: "김우열",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2002",
            courseName: "Chemistry for energy: from nano to continuum",
            area: "EF",
            professor: "김정민",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2003",
            courseName: "Advanced topics in data science",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2004",
            courseName: "Introduction to statistical physics and modern physics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1001",
            courseName: "Computer organization and systems",
            area: "EL",
            professor: "이현우",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1002",
            courseName: "Introduction to smart grids",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1003",
            courseName: "Introduction to materials science",
            area: "EL",
            professor: "이승진",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1004",
            courseName: "Physical chemistry 1 ",
            area: "EL",
            professor: "강영수",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1005",
            courseName: "Data structure",
            area: "EL",
            professor: "노영태",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1006",
            courseName: "Electric circuits 1 ",
            area: "EL",
            professor: "이규섭",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1007",
            courseName: "Fundamental of electromagnetics",
            area: "EL",
            professor: "강혜민",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL1008",
            courseName: "Basic principles and calculations in chemical engineering ",
            area: "EL",
            professor: "김효원",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "MN2001",
            courseName: "Systems and Society",
            area: "MN",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1011",
            courseName: "Fundamentals of engineering mathematics",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1012",
            courseName: "Motion in 3D",
            area: "EF",
            professor: "김현주",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1013",
            courseName: "Oscillation and resonance",
            area: "EF",
            professor: "김현주",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1014",
            courseName: "The real world in the matrix",
            area: "EF",
            professor: "김현주",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1015",
            courseName: "System and phase plane",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1016",
            courseName: "Statistical data analysis",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1017",
            courseName: "Series and special functions",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Vanessa Virgiel",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Vanessa Virgiel",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "RC1001",
            courseName: "RC Freshmen Seminar 1",
            area: "RC",
            professor: "김경, 김은정, 부경호",
            credits: "1",
            department: "RC교육센터",
            year: "2023"
        },
        {
            courseCode: "RC2002",
            courseName: "RC Student-Led-Program 2",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2023"
        }
    ],
    "fall23": [
        {
            courseCode: "EF1003",
            courseName: "Data Literacy Foundations",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1004",
            courseName: "General Physics Ⅰ: Mechanics and Electromagnetism",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "MN1002",
            courseName: "Applied Creative and Critical Thinking",
            area: "MN",
            professor: "조숙경",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1101",
            courseName: "Visionary Course-Energy AI ",
            area: "VC",
            professor: "김종권",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1201",
            courseName: "Visionary Course-Energy Materials and Devices",
            area: "VC",
            professor: "서동한",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1301",
            courseName: "Visionary Course-Hydrogen Energy",
            area: "VC",
            professor: "배기호",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1401",
            courseName: "Visionary Course-Grid Modernization",
            area: "VC",
            professor: "이준희",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "VC1501",
            courseName: "Visionary Course-Environmental and Climate Technology",
            area: "VC",
            professor: "이형술",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2031",
            courseName: "Numerical methods and data-driven science and engineering",
            area: "EF",
            professor: "김현주",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2032",
            courseName: "Real and complex analysis",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2033",
            courseName: "Fourier analysis",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2034",
            courseName: "Fundamentals of molecular simulation",
            area: "EF",
            professor: "김정민",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2035",
            courseName: "Data management and analysis",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF2036",
            courseName: "Introduction to quantum mechanics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2001",
            courseName: "Mathematical foundation of computer science",
            area: "EL",
            professor: "이현우",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2002",
            courseName: "Electric circuits 2",
            area: "EL",
            professor: "이규섭",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2003",
            courseName: "Crystal structures and defects",
            area: "EL",
            professor: "오상호",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2004",
            courseName: "Introduction to hydrogen energy",
            area: "EL",
            professor: "심욱",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2005",
            courseName: "Organic chemistry",
            area: "EL",
            professor: "정의혁",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2006",
            courseName: "Introduction to machine learning ",
            area: "EL",
            professor: "임혁",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2007",
            courseName: "Network data analysis ",
            area: "EL",
            professor: "김희태",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2008",
            courseName: "Physical chemistry 2",
            area: "EL",
            professor: "구근호",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2009",
            courseName: "Thermodynamics",
            area: "EL",
            professor: "이영덕",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EL2010",
            courseName: "Inorganic and materials chemistry",
            area: "EL",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "MN2002",
            courseName: "Interpretation, communication, and design",
            area: "MN",
            professor: "Choi Joonseok",
            credits: "4",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Vanessa Virgiel",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES3001",
            courseName: "ESP Advanced Writing",
            area: "ESP",
            professor: "Vanessa Virgiel",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "RC1002",
            courseName: "RC Social Engagement",
            area: "RC",
            professor: "김경",
            credits: "2",
            department: "RC교육센터",
            year: "2023"
        }
    ],
    "winter23": [
        {
            courseCode: "EF2033",
            courseName: "Fourier analysis",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1012",
            courseName: "Motion in 3D",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1005",
            courseName: "Eible Ⅰ - Creative Research Activity",
            area: "FR",
            professor: "김경",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1009",
            courseName: "Intensive speaking & reading",
            area: "FR",
            professor: "Vanessa Virgiel",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1010",
            courseName: "Intensive writing & reading",
            area: "FR",
            professor: "George Kamenos",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1011",
            courseName: "Intensive listening & reading",
            area: "FR",
            professor: "Eric Cebreiro",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1013",
            courseName: "Principles of macroeconomics",
            area: "FR",
            professor: "Peter Jang",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1014",
            courseName: "Practice in modeling",
            area: "FR",
            professor: "송주현",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "RC2001",
            courseName: "RC Student-Led-Program 1",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2023"
        }
    ],
    "summer23": [
        {
            courseCode: "FR1012",
            courseName: "Eible II - Creative Research Activity",
            area: "FR",
            professor: "김경",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "EF1051",
            courseName: "Lectures on modern physics",
            area: "EF",
            professor: "이성배",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1005",
            courseName: "Eible Ⅰ - Creative Research Activity",
            area: "FR",
            professor: "김경",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1006",
            courseName: "Principles of microeconomics",
            area: "FR",
            professor: "Peter Jang",
            credits: "2",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1007",
            courseName: "Hydrogen liquefaction principle and application",
            area: "FR",
            professor: "황지현",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1008",
            courseName: "Carbon neutrality technology",
            area: "FR",
            professor: "강영수",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1009",
            courseName: "Intensive speaking & reading",
            area: "FR",
            professor: "Vanessa Virgiel",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1010",
            courseName: "Intensive writing & reading",
            area: "FR",
            professor: "George Kamenos",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        },
        {
            courseCode: "FR1011",
            courseName: "Intensive listening & reading",
            area: "FR",
            professor: "Eric Cebreiro",
            credits: "1",
            department: "에너지공학부",
            year: "2023"
        }
    ],
    "spring24": [
        {
            courseCode: "EF1002",
            courseName: "Fundamentals of Chemistry",
            area: "EF",
            professor: "김정민",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1003",
            courseName: "Data Literacy Foundations",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1004",
            courseName: "General Physics Ⅰ: Mechanics and Electromagnetism",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "MN1001",
            courseName: "Strategic Learning and Leadership",
            area: "MN",
            professor: "권영미",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "VC1001",
            courseName: "Visionary Course 1",
            area: "VC",
            professor: "김종권",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2004",
            courseName: "Introduction to statistical physics and modern physics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2005",
            courseName: "Physical chemistry 1: fundamentals",
            area: "EF",
            professor: "강영수",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2006",
            courseName: "Data Science",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1001",
            courseName: "Computer organization and systems",
            area: "EL",
            professor: "이현우",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1002",
            courseName: "Introduction to smart grids",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1003",
            courseName: "Introduction to materials science",
            area: "EL",
            professor: "이승진",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1005",
            courseName: "Data structure",
            area: "EL",
            professor: "노영태",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1006",
            courseName: "Electric circuits 1 ",
            area: "EL",
            professor: "정재엽",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1007",
            courseName: "Fundamental of electromagnetics",
            area: "EL",
            professor: "강병남",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL1008",
            courseName: "Basic principles and calculations in chemical engineering ",
            area: "EL",
            professor: "김효원",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "MN2001",
            courseName: "Systems and Society",
            area: "MN",
            professor: "윤철민",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3001",
            courseName: "Algorithm",
            area: "EL",
            professor: "김종권",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3002",
            courseName: "Fundamental of control engineering",
            area: "EL",
            professor: "이규섭",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3003",
            courseName: "Nanoengineering",
            area: "EL",
            professor: "서동한",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3005",
            courseName: "Electrochemistry 1",
            area: "EL",
            professor: "김창희",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3006",
            courseName: "Introduction to deep learning",
            area: "EL",
            professor: "이석주",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3007",
            courseName: "Electronic circuit",
            area: "EL",
            professor: "강혜민",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3008",
            courseName: "Semiconductor devices 1",
            area: "EL",
            professor: "강혜민",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3009",
            courseName: "Polymer chemistry",
            area: "EL",
            professor: "김형준",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3010",
            courseName: "Transport phenomena",
            area: "EL",
            professor: "송주현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EN1001",
            courseName: "Intellectual Property and Value Creation",
            area: "EN",
            professor: "부경호",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "HA1001",
            courseName: "Energy Market Economics",
            area: "HASS",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "IR1001",
            courseName: "Independent Research 1",
            area: "IR",
            professor: "",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "CA1001",
            courseName: "Capstone Design 1",
            area: "CAPS",
            professor: "김경",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5001",
            courseName: "Reinforcement Learning",
            area: "EL",
            professor: "안수명",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5009",
            courseName: "Power Electronics",
            area: "EL",
            professor: "박화평",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5011",
            courseName: "Power System Economics",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5012",
            courseName: "Nuclear Fusion Engineering",
            area: "EL",
            professor: "임병수",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "IR1002",
            courseName: "Independent Research 2",
            area: "IR",
            professor: "강영수",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1005",
            courseName: "General Physics 2: Thermal Physics and Modern Physics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1006",
            courseName: "General Chemistry 1",
            area: "EF",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1007",
            courseName: "General chemistry 2",
            area: "EF",
            professor: "이태권",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EN1002",
            courseName: "Entrepreneurship and Start-up",
            area: "EN",
            professor: "김광현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3001",
            courseName: "ESP Advanced Writing",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "GR1001",
            courseName: "Global Research",
            area: "GR",
            professor: "임혁",
            credits: "10",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "RC1011",
            courseName: "RC Physical Education",
            area: "RC",
            professor: "김은정",
            credits: "1",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "RC2002",
            courseName: "RC Student-Led-Program 2",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2024"
        }
    ],
    "fall24": [
        {
            courseCode: "EF1003",
            courseName: "Data Literacy Foundations",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1004",
            courseName: "General Physics Ⅰ: Mechanics and Electromagnetism",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "MN1002",
            courseName: "Applied Creative and Critical Thinking",
            area: "MN",
            professor: "조숙경",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "VC1002",
            courseName: "Visionary Course 2",
            area: "VC",
            professor: "김종권",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2033",
            courseName: "Fourier analysis",
            area: "EF",
            professor: "백승환",
            credits: "2",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2036",
            courseName: "Introduction to quantum mechanics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF2039",
            courseName: "Introduction to AI Programming",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2001",
            courseName: "Mathematical foundation of computer science",
            area: "EL",
            professor: "이현우",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2003",
            courseName: "Crystal structures and defects",
            area: "EL",
            professor: "오상호",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2005",
            courseName: "Organic chemistry",
            area: "EL",
            professor: "정의혁",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2006",
            courseName: "Introduction to machine learning ",
            area: "EL",
            professor: "임혁",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2011",
            courseName: "Fluid Dynamics",
            area: "EL",
            professor: "김경모",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2012",
            courseName: "Network Science",
            area: "EL",
            professor: "김희태",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2013",
            courseName: "Quantum Chemistry and Spectroscopy",
            area: "EL",
            professor: "구근호",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL2014",
            courseName: "Engineering Thermodynamics",
            area: "EL",
            professor: "이영덕",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL3007",
            courseName: "Electronic circuit",
            area: "EL",
            professor: "강혜민",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "MN2002",
            courseName: "Interpretation, communication, and design",
            area: "MN",
            professor: "권영미",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "MN2003",
            courseName: "Modern Economic Thought and Public Policy",
            area: "MN",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4001",
            courseName: "Computer Vision",
            area: "EL",
            professor: "이석주",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4004",
            courseName: "Reaction Engineering & Separation Processes",
            area: "EL",
            professor: "한종희",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4006",
            courseName: "Natural Language Processing",
            area: "EL",
            professor: "안수명",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4009",
            courseName: "Electric Machines",
            area: "EL",
            professor: "이진오",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4011",
            courseName: "Statistical Mechanics",
            area: "EL",
            professor: "강병남",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4012",
            courseName: "Nuclear Energy Engineering",
            area: "EL",
            professor: "당정증",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL4013",
            courseName: "Inorganic Chemistry",
            area: "EL",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5003",
            courseName: "Instrumental Analysis and Measurement",
            area: "EL",
            professor: "김우열",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5004",
            courseName: "Power System Engineering",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EN1001",
            courseName: "Intellectual Property and Value Creation",
            area: "EN",
            professor: "부경호",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "HA1001",
            courseName: "Energy Market Economics",
            area: "HASS",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "IR1001",
            courseName: "Independent Research 1",
            area: "IR",
            professor: "",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "CA1001",
            courseName: "Capstone Design 1",
            area: "CAPS",
            professor: "김경",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5001",
            courseName: "Reinforcement Learning",
            area: "EL",
            professor: "안수명",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5009",
            courseName: "Power Electronics",
            area: "EL",
            professor: "박화평",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5011",
            courseName: "Power System Economics",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EL5012",
            courseName: "Nuclear Fusion Engineering",
            area: "EL",
            professor: "임병수",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "IR1002",
            courseName: "Independent Research 2",
            area: "IR",
            professor: "",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1005",
            courseName: "General Physics 2: Thermal Physics and Modern Physics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1006",
            courseName: "General Chemistry 1",
            area: "EF",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EF1007",
            courseName: "General chemistry 2",
            area: "EF",
            professor: "이태권",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "EN1002",
            courseName: "Entrepreneurship and Start-up",
            area: "EN",
            professor: "김광현",
            credits: "4",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3001",
            courseName: "ESP Advanced Writing",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "GR1001",
            courseName: "Global Research",
            area: "GR",
            professor: "임혁",
            credits: "10",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "RC1011",
            courseName: "RC Physical Education",
            area: "RC",
            professor: "김은정",
            credits: "1",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "RC2002",
            courseName: "RC Student-Led-Program 2",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2024"
        }
    ],
    "winter24": [
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "Charles Junn",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3001",
            courseName: "ESP Advanced Writing",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "FR1015",
            courseName: "Intensive Academic English",
            area: "FR",
            professor: "Charles Junn",
            credits: "3",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "RC2001",
            courseName: "RC Student-Led-Program 1",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2024"
        }
    ],
    "summer24": [
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2024"
        },
        {
            courseCode: "FR1015",
            courseName: "Intensive Academic English",
            area: "FR",
            professor: "George Kamenos, Eric Cebreiro",
            credits: "3",
            department: "에너지공학부",
            year: "2024"
        }
    ],
    "spring25": [
        {
            courseCode: "EF1003",
            courseName: "Data Literacy Foundations",
            area: "EF",
            professor: "조태호",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF1008",
            courseName: "Calculus for Engineers",
            area: "EF",
            professor: "백승환",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF1009",
            courseName: "Vector Calculus and Linear Algebra",
            area: "EF",
            professor: "백승환",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "MN1001",
            courseName: "Strategic Learning and Leadership",
            area: "MN",
            professor: "조숙경",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "RC1001",
            courseName: "RC Freshmen Seminar 1",
            area: "RC",
            professor: "김은정, 부경호",
            credits: "1",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "VC1010",
            courseName: "Visionary Course - Energy Conversion Design",
            area: "VC",
            professor: "김경모",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "VC1011",
            courseName: "Visionary Course - Energy Utilization Design",
            area: "VC",
            professor: "곽준섭",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "VC1012",
            courseName: "Visionary Course - Energy Management Design",
            area: "VC",
            professor: "김희태",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF2007",
            courseName: "Engineering Mathematics 1",
            area: "EF",
            professor: "김현주",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF2008",
            courseName: "Engineering Mathematics 2",
            area: "EF",
            professor: "김현주",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF2039",
            courseName: "Introduction to AI Programming",
            area: "EF",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1001",
            courseName: "Computer organization and systems",
            area: "EL",
            professor: "이현우",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1005",
            courseName: "Data structure",
            area: "EL",
            professor: "윤승현",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1009",
            courseName: "Fundamentals of Electric Circuits",
            area: "EL",
            professor: "김승완",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1010",
            courseName: "Electromagnetics",
            area: "EL",
            professor: "강병남",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1011",
            courseName: "Fundamentals of Materials Science",
            area: "EL",
            professor: "이승진",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1012",
            courseName: "Physical Chemistry",
            area: "EL",
            professor: "강영수",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL1013",
            courseName: "Fundamentals of Chemical and Biological Processes",
            area: "EL",
            professor: "김효원",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL2015",
            courseName: "Biological Science",
            area: "EL",
            professor: "이형술",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "MN2001",
            courseName: "Systems and Society",
            area: "MN",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3001",
            courseName: "Algorithm",
            area: "EL",
            professor: "김종권",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3006",
            courseName: "Introduction to deep learning",
            area: "EL",
            professor: "이석주",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3010",
            courseName: "Transport phenomena",
            area: "EL",
            professor: "송주현",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3011",
            courseName: "Control Theory and Applications",
            area: "EL",
            professor: "이진오",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3012",
            courseName: "Semiconductor Device",
            area: "EL",
            professor: "강혜민",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3013",
            courseName: "Nanoengineering",
            area: "EL",
            professor: "서동한",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3014",
            courseName: "Polymer Engineering",
            area: "EL",
            professor: "김형준",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL3015",
            courseName: "Electrochemistry",
            area: "EL",
            professor: "김창희",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL4012",
            courseName: "Nuclear Energy Engineering",
            area: "EL",
            professor: "당정증",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EN1001",
            courseName: "Intellectual Property and Value Creation",
            area: "EN",
            professor: "부경호",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "HA1001",
            courseName: "Energy Market Economics",
            area: "HASS",
            professor: "Peter Jang",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "IR1001",
            courseName: "Independent Research 1",
            area: "IR",
            professor: "",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "CA1001",
            courseName: "Capstone Design 1",
            area: "CAPS",
            professor: "김경",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL5001",
            courseName: "Reinforcement Learning",
            area: "EL",
            professor: "안수명",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL5009",
            courseName: "Power Electronics",
            area: "EL",
            professor: "박화평",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL5011",
            courseName: "Power System Economics",
            area: "EL",
            professor: "김집",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EL5012",
            courseName: "Nuclear Fusion Engineering",
            area: "EL",
            professor: "임병수",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "IR1002",
            courseName: "Independent Research 2",
            area: "IR",
            professor: "",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF1005",
            courseName: "General Physics 2: Thermal Physics and Modern Physics",
            area: "EF",
            professor: "이성배",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF1006",
            courseName: "General Chemistry 1",
            area: "EF",
            professor: "오명환",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EF1007",
            courseName: "General chemistry 2",
            area: "EF",
            professor: "이태권",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "EN1002",
            courseName: "Entrepreneurship and Start-up",
            area: "EN",
            professor: "김광현",
            credits: "4",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES1001",
            courseName: "ESP FoundationⅠ",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES1002",
            courseName: "ESP FoundationⅡ",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES2001",
            courseName: "ESP Intermediate Writing",
            area: "ESP",
            professor: "박정영",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES2002",
            courseName: "ESP Intermediate Speaking",
            area: "ESP",
            professor: "Eric Cebreiro",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES3001",
            courseName: "ESP Advanced Writing",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "ES3002",
            courseName: "ESP Advanced Speaking",
            area: "ESP",
            professor: "George Kamenos",
            credits: "P",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "GR1001",
            courseName: "Global Research",
            area: "GR",
            professor: "임혁",
            credits: "10",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "RC1011",
            courseName: "RC Physical Education",
            area: "RC",
            professor: "김은정",
            credits: "1",
            department: "에너지공학부",
            year: "2025"
        },
        {
            courseCode: "RC2002",
            courseName: "RC Student-Led-Program 2",
            area: "RC",
            professor: "김은정",
            credits: "0.5",
            department: "RC교육센터",
            year: "2025"
        }
    ]
}; 