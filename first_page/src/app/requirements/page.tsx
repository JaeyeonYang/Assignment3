'use client';

import { useState, useEffect } from 'react';
import { courses, Course } from '../../data/courses';
import dynamic from 'next/dynamic';

interface SelectedCourses {
  [key: string]: string[];
}

interface AreaCredits {
  [key: string]: {
    credits: number;
    courses: {
      [semester: string]: Course[];
    };
    excessCredits?: { fromArea: string; credits: number }[];
  };
}

interface AreaRequirement {
  label: string;
  requiredCredits: number;
}

function RequirementsComponent() {
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourses>({});
  const [areaCredits, setAreaCredits] = useState<AreaCredits>({});
  const [mounted, setMounted] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCredits, setTotalCredits] = useState(0);
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const areaRequirements: { [key: string]: AreaRequirement } = {
    'VC': { label: 'VC', requiredCredits: 8 },
    'EF': { label: 'EF', requiredCredits: 28 },
    'EL': { label: 'EL', requiredCredits: 40 },
    'HASS': { label: 'HASS', requiredCredits: 4 },
    'MN': { label: 'MN', requiredCredits: 16 },
    'IR': { label: 'IR', requiredCredits: 4 },
    'CAPS': { label: 'CAPS', requiredCredits: 4 },
    'EN': { label: 'EN', requiredCredits: 4 },
    'RC': { label: 'RC', requiredCredits: 4 },
    'FR': { label: 'FR', requiredCredits: 12 },
    'ESP': { label: 'ESP', requiredCredits: 4 }
  };

  useEffect(() => {
    setMounted(true);
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
      setSelectedCourses(JSON.parse(savedCourses));
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const newAreaCredits: AreaCredits = {};
    const allSelectedCourses: Course[] = [];
    let totalCredits = 0;

    // First pass: collect all courses and calculate initial credits
    Object.entries(selectedCourses).forEach(([semester, courseCodes]) => {
      const semesterCourses = courses[semester as keyof typeof courses];
      if (!semesterCourses) return;

      courseCodes.forEach(courseCode => {
        const course = semesterCourses.find(c => c.courseCode === courseCode);
        if (course) {
          // Exclude graduate courses
          if (course.year === '대학원') {
            return;
          }

          const area = course.area;
          if (!newAreaCredits[area]) {
            newAreaCredits[area] = {
              credits: 0,
              courses: {}
            };
          }

          // Group course by semester within the area
          if (!newAreaCredits[area].courses[semester]) {
            newAreaCredits[area].courses[semester] = [];
          }
          newAreaCredits[area].courses[semester].push(course);
          allSelectedCourses.push(course);

          // Add credits for the area (except ESP which is handled separately)
          if (area !== 'ESP') {
            newAreaCredits[area].credits += course.credits === 'P' ? 0 : Number(course.credits);
            totalCredits += course.credits === 'P' ? 0 : Number(course.credits);
          }
        }
      });
    });

    // Calculate ESP credits
    const isSpeakingCompleted = allSelectedCourses.some(c => c.courseCode === 'ES3002');
    const isWritingCompleted = allSelectedCourses.some(c => c.courseCode === 'ES3001');
    
    if (isSpeakingCompleted && isWritingCompleted) {
      if (!newAreaCredits['ESP']) {
        newAreaCredits['ESP'] = {
          credits: 4,
          courses: {}
        };
      }
      newAreaCredits['ESP'].credits = 4;
      totalCredits += 4; // Add ESP credits to total only when both courses are completed
    } else {
      if (!newAreaCredits['ESP']) {
        newAreaCredits['ESP'] = {
          credits: 0,
          courses: {}
        };
      }
      newAreaCredits['ESP'].credits = 0;
    }

    // Calculate excess credits from non-FR, non-ESP areas
    let totalExcessCredits = 0;
    const excessCreditsDetails: { fromArea: string; credits: number }[] = [];
    
    Object.entries(newAreaCredits).forEach(([area, { credits }]) => {
      if (area !== 'FR' && area !== 'ESP' && areaRequirements[area]?.requiredCredits !== undefined) {
        const requiredCredits = areaRequirements[area].requiredCredits;
        if (credits > requiredCredits) {
          const excess = credits - requiredCredits;
          totalExcessCredits += excess;
          excessCreditsDetails.push({ fromArea: area, credits: excess });
        }
      }
    });

    // Add excess credits to FR area
    if (!newAreaCredits['FR']) {
      newAreaCredits['FR'] = {
        credits: 0,
        courses: {},
        excessCredits: []
      };
    }
    const frCourseCredits = Object.values(newAreaCredits['FR'].courses || {}).flat().reduce((sum, course) => 
      sum + (course.credits === 'P' ? 0 : Number(course.credits)), 0);
    newAreaCredits['FR'].credits = frCourseCredits + totalExcessCredits;
    newAreaCredits['FR'].excessCredits = excessCreditsDetails;

    setAreaCredits(newAreaCredits);
    setTotalCredits(totalCredits);
  }, [selectedCourses, mounted]);

  const handleAreaClick = (area: string) => {
    setExpandedArea(expandedArea === area ? null : area);
  };

  const handleRequiredAreaClick = (area: string) => {
    setSelectedArea(area);
    setIsModalOpen(true);
  };

  const getAvailableCourses = (area: string) => {
    const availableCourses: Course[] = [];
    const addedCourseCodes = new Set<string>(); // Set to track added course codes

    Object.entries(courses).forEach(([semester, semesterCourses]) => {
      semesterCourses.forEach(course => {
        // Check if the course matches the area and has not been selected in any semester
        // Also check if the course code has already been added to the list
        const isSelectedAnywhere = Object.values(selectedCourses).some(codes => codes.includes(course.courseCode));

        if (course.area === area && !isSelectedAnywhere && !addedCourseCodes.has(course.courseCode)) {
          availableCourses.push(course);
          addedCourseCodes.add(course.courseCode); // Add course code to the set
        }
      });
    });
    return availableCourses;
  };

  const calculateTotalProgress = () => {
    let totalRequiredCredits = 0;
    let totalCompletedCredits = 0;

    Object.entries(areaRequirements).forEach(([area, { requiredCredits }]) => {
      totalRequiredCredits += requiredCredits;
      const completedCredits = areaCredits[area]?.credits || 0;
      totalCompletedCredits += Math.min(completedCredits, requiredCredits);
    });

    // Return percentage without rounding
    return (totalRequiredCredits > 0) ? (totalCompletedCredits / totalRequiredCredits) * 100 : 0;
  };

  const efCourseCodes = {
    math: ['EF1001', 'EF1008', 'EF2007', 'EF2008', 'EF1009', 'EF1011', 'EF1012', 'EF1013', 'EF1014', 'EF1015', 'EF1016', 'EF1017', 'EF2031', 'EF2032', 'EF2033'],
    chemistry: ['EF1002', 'EF2034', 'EF2005', 'EF1006', 'EF1007'],
    dl: ['EF1003', 'EF2003', 'EF2035', 'EF2006', 'EF2039'],
    physics: ['EF1004', 'EF1005', 'EF2004', 'EF2036', 'EF1051'],
  };

  const calculateEfSubAreaCredits = (selectedCoursesData: SelectedCourses) => {
    const subAreaCredits = {
      math: 0,
      chemistry: 0,
      dl: 0,
      physics: 0,
    };
    const completedEfCourses: Course[] = [];

    Object.entries(selectedCoursesData).forEach(([semester, courseCodes]) => {
      const semesterCourses = courses[semester as keyof typeof courses];
      if (!semesterCourses) return;

      courseCodes.forEach(courseCode => {
        const course = semesterCourses.find(c => c.courseCode === courseCode);
        if (course && course.area === 'EF') {
          completedEfCourses.push(course);
        }
      });
    });

    completedEfCourses.forEach(course => {
      if (efCourseCodes.math.includes(course.courseCode)) {
        subAreaCredits.math += course.credits === 'P' ? 0 : Number(course.credits);
      } else if (efCourseCodes.chemistry.includes(course.courseCode)) {
        subAreaCredits.chemistry += course.credits === 'P' ? 0 : Number(course.credits);
      } else if (efCourseCodes.dl.includes(course.courseCode)) {
        subAreaCredits.dl += course.credits === 'P' ? 0 : Number(course.credits);
      } else if (efCourseCodes.physics.includes(course.courseCode)) {
        subAreaCredits.physics += course.credits === 'P' ? 0 : Number(course.credits);
      }
    });

    return subAreaCredits;
  };

  const el4And5CourseCodes = ['EL4001', 'EL4004', 'EL4006', 'EL4009', 'EL4011', 'EL4012', 'EL4013', 'EL5003', 'EL5004', 'EL5001', 'EL5009', 'EL5011', 'EL5012'];

  const calculateEl4And5Credits = (selectedCoursesData: SelectedCourses) => {
    let el4And5TotalCredits = 0;
    const completedElCourses: Course[] = [];

    Object.entries(selectedCoursesData).forEach(([semester, courseCodes]) => {
      const semesterCourses = courses[semester as keyof typeof courses];
      if (!semesterCourses) return;

      courseCodes.forEach(courseCode => {
        const course = semesterCourses.find(c => c.courseCode === courseCode);
        // Check if the course is in the EL area and is one of the specified EL4/EL5 courses
        if (course && course.area === 'EL' && el4And5CourseCodes.includes(course.courseCode)) {
           el4And5TotalCredits += course.credits === 'P' ? 0 : Number(course.credits);
        }
      });
    });

    return el4And5TotalCredits;
  };

  const getProgressMessage = (progress: number) => {
    if (progress <= 25) {
      return {
        title: "1학년",
        message: "시작이 반이다! 💪"
      };
    } else if (progress <= 50) {
      return {
        title: "2학년",
        message: "벌써 절반이...!"
      };
    } else if (progress <= 75) {
      return {
        title: "3학년",
        message: "이제 곧 4학년! 졸업 준비를 해보아요 🎓"
      };
    } else {
      return {
        title: "4학년",
        message: "이제 나도... 대졸? 🎉"
      };
    }
  };

  if (!mounted) {
    return null;
  }

  const totalProgress = calculateTotalProgress();
  const progressInfo = getProgressMessage(totalProgress);
  const efSubAreaCredits = calculateEfSubAreaCredits(selectedCourses);
  const el4And5Credits = calculateEl4And5Credits(selectedCourses);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            KENtrack
          </a>
          <div className="space-x-4">
            <a href="/history" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">수강 이력</a>
            <a href="/requirements" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md">졸업 요건</a>
            <a href="/coursetree" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">코스트리</a>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">총 이수 학점</h2>
            <div className="text-3xl font-bold text-blue-600">
              {totalCredits}학점
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold text-gray-900">영역별 이수 현황</h2>
              <div className="text-2xl font-bold transition-colors duration-500"
                style={{
                  color: totalProgress < 25 ? '#ef4444' // red
                    : totalProgress < 50 ? '#f97316' // orange
                    : totalProgress < 75 ? '#eab308' // yellow
                    : totalProgress < 100 ? '#84cc16' // light green
                    : '#22c55e' // green for 100 or more
                }}
              >
                {totalProgress.toFixed(2)}%
              </div>
              <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${totalProgress}%`,
                    backgroundColor: totalProgress < 25 ? '#ef4444' // red
                      : totalProgress < 50 ? '#f97316' // orange
                      : totalProgress < 75 ? '#eab308' // yellow
                      : totalProgress < 100 ? '#84cc16' // light green
                      : '#22c55e' // green for 100 or more
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(areaRequirements).map(([area, { label, requiredCredits }]) => (
              <div key={area} className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleAreaClick(area)}>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  <span className="text-blue-600 font-mono mr-2">{label}</span>
                </h3>
                <div className="mb-4">
                  <span className={`text-xl font-bold ${(areaCredits[area]?.credits || 0) < requiredCredits ? 'text-red-600' : 'text-blue-600'}`}>
                    {areaCredits[area]?.credits || 0}
                  </span>
                  <span className="text-gray-600 text-sm ml-2">/ {requiredCredits}학점</span>
                </div>
                {expandedArea === area && (
                  <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
                    {Object.entries(areaCredits[area]?.courses || {}).map(([semester, courses]) => (
                      <div key={semester} className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-700">{semester}</h4>
                        <div className="space-y-1">
                           {courses.map((course) => (
                             <div key={course.courseCode} className="text-xs text-gray-600">
                               <span className="text-blue-600 font-medium mr-1">{course.courseCode}</span>
                               {course.courseName}
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                     {/* Display excess credits for FR area */}
                    {area === 'FR' && areaCredits.FR?.excessCredits && areaCredits.FR.excessCredits.length > 0 && (
                       <div className="mt-4 pt-2 border-t border-gray-200">
                         <h5 className="text-sm font-medium text-gray-700 mb-2">초과 이수 학점 출처:</h5>
                         <div className="space-y-1">
                           {areaCredits.FR.excessCredits.map((excess, index) => (
                              <div key={index} className="text-xs text-gray-600">
                                {excess.fromArea} 영역: {excess.credits} 학점
                              </div>
                           ))}
                         </div>
                       </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Requirements Section (EF) */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
           <h3 className="text-xl font-semibold text-gray-900 mb-4">세부 요건</h3>
           <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">EF 영역 세부 이수 학점 (각 4학점 필요)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`font-bold ${efSubAreaCredits.physics < 4 ? 'text-red-600' : 'text-blue-600'}`}>Physics: {efSubAreaCredits.physics} / 4 학점</div>
                  <div className={`font-bold ${efSubAreaCredits.chemistry < 4 ? 'text-red-600' : 'text-blue-600'}`}>Chemistry: {efSubAreaCredits.chemistry} / 4 학점</div>
                  <div className={`font-bold ${efSubAreaCredits.math < 4 ? 'text-red-600' : 'text-blue-600'}`}>Math: {efSubAreaCredits.math} / 4 학점</div>
                  <div className={`font-bold ${efSubAreaCredits.dl < 4 ? 'text-red-600' : 'text-blue-600'}`}>DL: {efSubAreaCredits.dl} / 4 학점</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                 <h4 className="font-medium text-gray-900 mb-2">EL 영역 세부 요건 (EL4/EL5 과목 8학점 필요)</h4>
                 <div className={`font-bold ${el4And5Credits < 8 ? 'text-red-600' : 'text-blue-600'}`}>이수 학점: {el4And5Credits} / 8 학점</div>
              </div>
           </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">이수 필요 영역</h3>
          <div className="space-y-4">
            {Object.entries(areaRequirements)
              .filter(([area, { requiredCredits }]) => 
                (areaCredits[area]?.credits || 0) < requiredCredits
              )
              .map(([area, { label, requiredCredits }]) => {
                const currentCredits = areaCredits[area]?.credits || 0;
                const remainingCredits = requiredCredits - currentCredits;
                return (
                  <div 
                    key={area} 
                    className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200 cursor-pointer hover:bg-red-100 transition-colors"
                    onClick={() => handleRequiredAreaClick(area)}
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">
                        <span className="text-red-600 font-mono mr-2">{label}</span>
                      </h4>
                      <p className="text-sm text-red-600 mt-1">
                        {remainingCredits}학점 추가 이수 필요
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-red-600">
                        {currentCredits}
                      </span>
                      <span className="text-gray-600 ml-2">/ {requiredCredits}학점</span>
                    </div>
                  </div>
                );
              })}
            {Object.entries(areaRequirements)
              .filter(([area, { requiredCredits }]) => 
                (areaCredits[area]?.credits || 0) < requiredCredits
              ).length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  모든 영역의 이수 요건을 충족했습니다.
                </div>
              )}
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && selectedArea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {areaRequirements[selectedArea]?.label} 영역 수강 가능 과목
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                {getAvailableCourses(selectedArea).map((course) => (
                  <div key={course.courseCode} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-blue-600 font-medium">{course.courseCode}</span>
                        <span className="text-gray-600 ml-2">{course.courseName}</span>
                      </div>
                      <span className="text-gray-500">{course.credits}학점</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {course.professor} 교수님
                    </div>
                  </div>
                ))}
                {getAvailableCourses(selectedArea).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    수강 가능한 과목이 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const Requirements = dynamic(() => Promise.resolve(RequirementsComponent), {
  ssr: false
});

export default Requirements; 