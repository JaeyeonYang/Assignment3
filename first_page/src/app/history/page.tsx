'use client';

import { useState, useEffect } from 'react';
import { courses, Course } from '../../data/courses';
import dynamic from 'next/dynamic';

type Semester = 'spring22' | 'fall22' | 'winter22' | 'summer22' | 'spring23' | 'fall23' | 'winter23' | 'summer23' | 'spring24' | 'fall24' | 'winter24' | 'summer24' | 'spring25';

interface SelectedCourses {
  [key: string]: string[];
}

interface DuplicateCourseInfo {
  semesterLabel: string;
  courseCode: string;
  courseName: string;
}

function HistoryComponent() {
  const [selectedSemester, setSelectedSemester] = useState<Semester>('spring22');
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourses>({});
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showOnlySelected, setShowOnlySelected] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState<DuplicateCourseInfo | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
      setSelectedCourses(JSON.parse(savedCourses));
    } else {
      const initialCourses: SelectedCourses = {};
      Object.keys(courses).forEach((semester) => {
        initialCourses[semester] = [];
      });
      setSelectedCourses(initialCourses);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
    }
  }, [selectedCourses, mounted]);

  useEffect(() => {
    if (!mounted) return;

    let totalCredits = 0;
    let totalCourses = 0;

    Object.entries(selectedCourses).forEach(([semester, courseCodes]) => {
      const semesterCourses = courses[semester as Semester];
      if (!semesterCourses) return;

      courseCodes.forEach(courseCode => {
        const course = semesterCourses.find(c => c.courseCode === courseCode);
        if (course) {
          totalCredits += course.credits === 'P' ? 0 : Number(course.credits);
          totalCourses++;
        }
      });
    });

    setTotalCredits(totalCredits);
    setTotalCourses(totalCourses);
  }, [selectedCourses, mounted]);

  useEffect(() => {
    if (duplicateMessage) {
      const timer = setTimeout(() => {
        setDuplicateMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [duplicateMessage]);

  const handleCourseToggle = (courseCode: string) => {
    setSelectedCourses(prev => {
      const newCourses = { ...prev };
      const currentCourses = newCourses[selectedSemester] || [];
      
      if (currentCourses.includes(courseCode)) {
        newCourses[selectedSemester] = currentCourses.filter(code => code !== courseCode);
        setDuplicateMessage(null);
      } else {
        let duplicateInfo: DuplicateCourseInfo | null = null;
        const isDuplicate = Object.entries(prev).some(([sem, codes]) => {
          if (sem !== selectedSemester && codes.includes(courseCode)) {
            const semesterCourses = courses[sem as Semester];
            const duplicatedCourse = semesterCourses?.find(c => c.courseCode === courseCode);
            if (duplicatedCourse) {
              duplicateInfo = {
                semesterLabel: semesterLabels[sem as Semester],
                courseCode: duplicatedCourse.courseCode,
                courseName: duplicatedCourse.courseName,
              };
            }
            return true;
          }
          return false;
        });

        if (isDuplicate && duplicateInfo) {
          setDuplicateMessage(duplicateInfo);
          return prev;
        } else {
          newCourses[selectedSemester] = [...currentCourses, courseCode];
          setDuplicateMessage(null);
        }
      }
      
      return newCourses;
    });
  };

  const groupCoursesByArea = (courses: Course[]) => {
    const grouped: { [area: string]: Course[] } = {};
    courses.forEach(course => {
      if (!grouped[course.area]) {
        grouped[course.area] = [];
      }
      grouped[course.area].push(course);
    });
    return grouped;
  };

  const semesterLabels = {
    spring22: '2022학년도 1학기',
    fall22: '2022학년도 2학기',
    winter22: '2022학년도 겨울학기',
    summer22: '2022학년도 여름학기',
    spring23: '2023학년도 1학기',
    fall23: '2023학년도 2학기',
    winter23: '2023학년도 겨울학기',
    summer23: '2023학년도 여름학기',
    spring24: '2024학년도 1학기',
    fall24: '2024학년도 2학기',
    winter24: '2024학년도 겨울학기',
    summer24: '2024학년도 여름학기',
    spring25: '2025학년도 1학기'
  };

  const filteredCourses = showOnlySelected
    ? courses[selectedSemester]?.filter(course => 
        selectedCourses[selectedSemester]?.includes(course.courseCode)
      ) || []
    : courses[selectedSemester] || [];

  const groupedFilteredCourses = groupCoursesByArea(filteredCourses);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">KENtrack</a>
          <div className="space-x-4">
            <a href="/history" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md">수강 이력</a>
            <a href="/requirements" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">졸업 요건</a>
            <a href="/coursetree" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">코스트리</a>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{semesterLabels[selectedSemester]} 수강 과목</h2>
              <p className="text-sm text-gray-500 mt-1">
                {showOnlySelected ? '선택한 과목만 표시' : '전체 과목 표시'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showOnlySelected}
                  onChange={(e) => setShowOnlySelected(e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">선택한 과목만 보기</span>
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value as Semester)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(semesterLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {duplicateMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">중복된 수업입니다!</strong>
              <span className="block sm:inline"> 이 수업은 이미 {duplicateMessage.semesterLabel}에 선택되었습니다.</span>
              <p className="text-sm mt-1">({duplicateMessage.courseCode} - {duplicateMessage.courseName})</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(groupedFilteredCourses).map(([area, courses]) => (
              <div key={area} className="col-span-full mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{area} 영역</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((course) => (
                    <div
                      key={course.courseCode}
                      className={`p-4 border rounded-lg transition-all duration-200 ${
                        selectedCourses[selectedSemester]?.includes(course.courseCode)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedCourses[selectedSemester]?.includes(course.courseCode) || false}
                          onChange={() => handleCourseToggle(course.courseCode)}
                          className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-sm font-medium text-blue-600">{course.courseCode}</h3>
                              <p className="text-sm text-gray-900 mt-1">{course.courseName}</p>
                            </div>
                            <span className="text-xs text-gray-500">{course.credits}학점</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{course.professor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">전체 이수 현황</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="block text-sm text-gray-500 mb-1">총 이수 학점</span>
              <span className="text-2xl font-bold text-blue-600">{totalCredits}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="block text-sm text-gray-500 mb-1">이수 과목 수</span>
              <span className="text-2xl font-bold text-blue-600">{totalCourses}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const History = dynamic(() => Promise.resolve(HistoryComponent), {
  ssr: false
});

export default History; 