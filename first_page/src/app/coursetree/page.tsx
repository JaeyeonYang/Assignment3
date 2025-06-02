'use client';

import { useState, useEffect } from 'react';
import { courseTrees, type CourseTree } from '../../data/courseTrees';
import dynamic from 'next/dynamic';

interface SelectedCourses {
  [key: string]: string[];
}

function CourseTreeComponent() {
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourses>({});
  const [selectedTrack, setSelectedTrack] = useState<string>('Artificial Intelligence');
  const [mounted, setMounted] = useState(false);
  const [sortedTracks, setSortedTracks] = useState<any[]>([]);
  const [visibleTracksCount, setVisibleTracksCount] = useState(3); // State for controlling visible tracks count

  const getTrackCourses = (trackName: string) => {
    // Find the specific track data by name
    const trackData = courseTrees.find(track => track[0].track === trackName);
    // Return only the courses part of the track data, or an empty array if not found
    return trackData ? trackData : [];
  };

  const calculateTrackProgress = (trackName: string) => {
    const trackData = getTrackCourses(trackName);
    // Filter for only recommended courses in the track
    const recommendedCourses = trackData.filter(course => course.type === '권장');
    const totalRecommendedCourses = recommendedCourses.length;
    if (totalRecommendedCourses === 0) {
      return { percentage: 0, completedCount: 0, totalCount: 0 };
    }

    // Get all course codes from selected courses across all semesters
    const allSelectedCourseCodes = Object.values(selectedCourses).flat();

    // Count how many recommended courses are in the selected courses list
    let completedRecommendedCoursesCount = 0;
    recommendedCourses.forEach(course => {
        // Use the same completion logic as isCourseCompleted for equivalent courses
        if (course.course_code === 'EF1008') {
             if (allSelectedCourseCodes.includes('EF1001') || allSelectedCourseCodes.includes('EF1008')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EF1006') {
            if (allSelectedCourseCodes.includes('EF1002') || allSelectedCourseCodes.includes('EF1006')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL1011') {
             if (allSelectedCourseCodes.includes('EL1003') || allSelectedCourseCodes.includes('EL1011')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL3015') {
             if (allSelectedCourseCodes.includes('EL3005') || allSelectedCourseCodes.includes('EL3015')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL4013') {
             if (allSelectedCourseCodes.includes('EL2010') || allSelectedCourseCodes.includes('EL4013')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (allSelectedCourseCodes.includes(course.course_code)) {
            completedRecommendedCoursesCount++;
        }
    });

    // Calculate percentage based on recommended courses
    const progress = {
      percentage: Math.round((completedRecommendedCoursesCount / totalRecommendedCourses) * 100),
      completedCount: completedRecommendedCoursesCount,
      totalCount: totalRecommendedCourses,
    };

    return progress;
  };

  useEffect(() => {
    setMounted(true);
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
      setSelectedCourses(JSON.parse(savedCourses));
    }
  }, []);

  useEffect(() => {
    // Calculate progress for all tracks and sort them
    const tracksWithProgress = courseTrees.map(trackData => {
        const trackName = trackData[0].track;
        const progressResult = calculateTrackProgress(trackName);
        return { trackName, ...progressResult };
    });

    // Sort tracks by percentage in descending order
    tracksWithProgress.sort((a, b) => b.percentage - a.percentage);

    setSortedTracks(tracksWithProgress);

    // Set the initially selected track to the one with the highest progress
    if (tracksWithProgress.length > 0) {
        setSelectedTrack(tracksWithProgress[0].trackName);
    }

  }, [selectedCourses, mounted]);

  if (!mounted) {
    return null;
  }

  const isCourseCompleted = (courseCode: string) => {
    // Check for equivalent courses due to code changes over years
    if (courseCode === 'EF1008') {
      // EF1008 is considered complete if EF1001 or EF1008 is in selected courses
      return Object.values(selectedCourses).some(courses => 
        courses.includes('EF1001') || courses.includes('EF1008')
      );
    }
    if (courseCode === 'EF1006') {
       // EF1006 is considered complete if EF1002 or EF1006 is in selected courses
      return Object.values(selectedCourses).some(courses => 
        courses.includes('EF1002') || courses.includes('EF1006')
      );
    }
    if (courseCode === 'EL1011') {
      // EL1011 is considered complete if EL1003 or EL1011 is in selected courses
      return Object.values(selectedCourses).some(courses =>
        courses.includes('EL1003') || courses.includes('EL1011')
      );
    }
    if (courseCode === 'EL3015') {
      // EL3015 is considered complete if EL3005 or EL3015 is in selected courses
      return Object.values(selectedCourses).some(courses =>
        courses.includes('EL3005') || courses.includes('EL3015')
      );
    }
    if (courseCode === 'EL4013') {
      // EL4013 is considered complete if EL2010 or EL4013 is in selected courses
      return Object.values(selectedCourses).some(courses =>
        courses.includes('EL2010') || courses.includes('EL4013')
      );
    }

    // For other courses, check if the course code is in selected courses
    return Object.values(selectedCourses).some(courses => courses.includes(courseCode));
  };

  const calculateRecommendedCompletedCount = (trackName: string) => {
    const trackData = getTrackCourses(trackName);
    const recommendedCourses = trackData.filter(course => course.type === '권장');
    const totalRecommendedCourses = recommendedCourses.length;
    if (totalRecommendedCourses === 0) return { completedCount: 0, totalCount: 0 };

    const allSelectedCourseCodes = Object.values(selectedCourses).flat();
    let completedRecommendedCoursesCount = 0;
    recommendedCourses.forEach(course => {
        if (course.course_code === 'EF1008') {
             if (allSelectedCourseCodes.includes('EF1001') || allSelectedCourseCodes.includes('EF1008')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EF1006') {
            if (allSelectedCourseCodes.includes('EF1002') || allSelectedCourseCodes.includes('EF1006')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL1011') {
             if (allSelectedCourseCodes.includes('EL1003') || allSelectedCourseCodes.includes('EL1011')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL3015') {
             if (allSelectedCourseCodes.includes('EL3005') || allSelectedCourseCodes.includes('EL3015')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (course.course_code === 'EL4013') {
             if (allSelectedCourseCodes.includes('EL2010') || allSelectedCourseCodes.includes('EL4013')) {
                 completedRecommendedCoursesCount++;
             }
        } else if (allSelectedCourseCodes.includes(course.course_code)) {
            completedRecommendedCoursesCount++;
        }
    });

    return { completedCount: completedRecommendedCoursesCount, totalCount: totalRecommendedCourses };
  };

  const groupCoursesByYear = (courses: CourseTree[]) => {
    const grouped: { [key: string]: CourseTree[] } = {};
    courses.forEach(course => {
      const year = course.year.toString();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(course);
    });
    return grouped;
  };

  const trackCourses = getTrackCourses(selectedTrack);
  const groupedCourses = groupCoursesByYear(trackCourses);
  const trackProgressResult = calculateTrackProgress(selectedTrack);
  const { completedCount: recommendedCompletedCount, totalCount: totalRecommendedOnlyCourses } = calculateRecommendedCompletedCount(selectedTrack);

  // Get the entries for grouped courses for year display (no slicing here)
  const groupedYearsEntries = Object.entries(groupedCourses);

  // Get the tracks to display based on visibleTracksCount
  const tracksToDisplay = sortedTracks.slice(0, visibleTracksCount);

  // Check if more tracks are available than currently visible
  const hasMoreTracks = sortedTracks.length > visibleTracksCount;

  // Check if the full list is currently visible and there are more than 3 tracks originally
  const isFullListVisible = sortedTracks.length > 3 && visibleTracksCount === sortedTracks.length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            KENtrack
          </a>
          <div className="space-x-4">
            <a href="/history" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">수강 이력</a>
            <a href="/requirements" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">졸업 요건</a>
            <a href="/coursetree" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md">코스트리</a>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Legend */}
        <div className="flex flex-wrap items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border border-gray-200 rounded-sm border-solid bg-white"></div>
            <span className="text-sm text-gray-700">권장 (미이수)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border border-gray-400 rounded-sm border-dashed bg-white"></div>
            <span className="text-sm text-gray-700">선택 (미이수)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border border-green-500 rounded-sm border-dashed bg-green-50"></div>
            <span className="text-sm text-gray-700">이수 완료</span>
          </div>
        </div>

        {/* Track Selection Boxes */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 3 matching courses are..</h3>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracksToDisplay.map(track => (
            <div
              key={track.trackName}
              className={`p-4 border rounded-lg cursor-pointer transition-shadow ${
                selectedTrack === track.trackName ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:shadow-sm'
              }`}
              onClick={() => setSelectedTrack(track.trackName)}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{track.trackName}</h3>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-gray-600">이수 진행률</div>
                  <div className="text-xl font-bold text-blue-600">{track.percentage}%</div>
                  <div className="text-xs text-gray-600">({track.completedCount} / {track.totalCount})</div>
                </div>
                <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${track.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less Tracks Button */}
        {sortedTracks.length > 3 && (
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => setVisibleTracksCount(isFullListVisible ? 3 : sortedTracks.length)}
                className="px-6 py-2 border rounded-md text-sm font-medium text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isFullListVisible ? 'Fold back' : 'See more matching courses'}
              </button>
            </div>
          )}

        <div className="space-y-8">
          {groupedYearsEntries.map(([year, courses]) => (
            <div key={year} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{year}학년</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.course_code}
                    className={`p-4 border rounded-lg ${
                      isCourseCompleted(course.course_code) ? 'border-green-500 bg-green-50' : (course.type === '권장' ? 'border-gray-200 hover:border-blue-300' : 'border-gray-400')
                    } ${
                      course.type === '권장' ? 'border-solid' : 'border-dashed'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-blue-600">{course.course_code}</h4>
                        <p className="text-sm text-gray-900 mt-1">{course.course_name}</p>
                      </div>
                      <span className="text-xs text-gray-500">{course.credits ?? '3'}학점</span>
                    </div>
                    {isCourseCompleted(course.course_code) && (
                      <div className="mt-2 text-xs text-green-600">이수 완료</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const CourseTree = dynamic(() => Promise.resolve(CourseTreeComponent), {
  ssr: false
});

export default CourseTree; 