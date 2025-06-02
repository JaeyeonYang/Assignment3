'use client';

import { useState, useEffect } from 'react';
import { courses } from '../data/courses';
import dynamic from 'next/dynamic';

function HomeComponent() {
  const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: string[] }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
      setSelectedCourses(JSON.parse(savedCourses));
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat py-32" style={{ backgroundImage: "url('/school_image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              KENtrack
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12">
              KENTECH 학생을 위한 맞춤형 학업 관리 시스템
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/history" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors text-lg">
                시작하기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <a href="/history" className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-blue-600 text-3xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">수강 이력</h3>
              <p className="text-gray-600">수강한 과목들을 확인하고 관리하세요.</p>
            </a>
            <a href="/requirements" className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-blue-600 text-3xl mb-6 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">졸업 요건</h3>
              <p className="text-gray-600">영역별 이수 현황과 남은 요건을 확인하세요.</p>
            </a>
            <a href="/coursetree" className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-blue-600 text-3xl mb-6 group-hover:scale-110 transition-transform">🌳</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">코스트리</h3>
              <p className="text-gray-600">트랙별 수강 계획을 확인하세요.</p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 KENtrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const Home = dynamic(() => Promise.resolve(HomeComponent), {
  ssr: false
});

export default Home;
