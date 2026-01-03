
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AICounselor from './components/AICounselor';
import CourseDetailsPage from './components/CourseDetailsPage';
import { COURSES } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'course-details'>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  // Sync scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToCourse = (id: string) => {
    setSelectedCourseId(id);
    setCurrentPage('course-details');
  };

  const navigateHome = (sectionId?: string) => {
    setCurrentPage('home');
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const selectedCourse = COURSES.find(c => c.id === selectedCourseId);

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
      {currentPage === 'home' ? (
        <>
          <Navbar onNavigateHome={() => navigateHome()} />
          <main>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="why"><Features /></div>
            <div id="courses">
              <Courses onSelectCourse={navigateToCourse} />
            </div>
            <div id="contact"><Contact /></div>
          </main>
        </>
      ) : (
        selectedCourse && (
          <CourseDetailsPage 
            course={selectedCourse} 
            onBack={() => navigateHome('courses')} 
          />
        )
      )}

      <AICounselor />
      <Footer />
    </div>
  );
};

export default App;
