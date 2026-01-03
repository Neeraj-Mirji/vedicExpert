
import React from 'react';
import { COURSES } from '../constants';

interface CoursesProps {
  onSelectCourse: (id: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Foundation Programs</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Empowering Young Minds for the Future</h3>
          <p className="text-slate-600 text-lg">Choose your grade and embark on a transformative learning journey with Vedic Expert.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-transparent shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 cursor-pointer"
              onClick={() => onSelectCourse(course.id)}
            >
              <div className="h-56 overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {course.grade}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold text-sm">Full Details & Syllabus →</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-2">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.subjects.slice(0, 3).map((sub, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                      {sub}
                    </span>
                  ))}
                </div>
                <button 
                  className="w-full py-4 rounded-xl font-bold transition-all duration-300 bg-slate-100 text-slate-800 group-hover:bg-orange-600 group-hover:text-white"
                >
                  View Full Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
