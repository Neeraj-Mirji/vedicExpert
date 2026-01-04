
import React, { useState } from 'react';
import { Course } from '../types';

interface CourseDetailsPageProps {
  course: Course;
  onBack: () => void;
}

const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ course, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'batches'>('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Nav Area */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-orange-600 font-bold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Programs
          </button>
          
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">V</div>
            <span className="font-serif font-bold text-slate-900">Vedic Expert</span>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpmnzDAzC_NhfJL01zUtDDFzI3bLOZSb1_rMv3ymya-zu7Ww/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-700 shadow-lg shadow-orange-100 transition-all"
          >
            Enroll for {course.grade}
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Foundation Program
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                {course.title} <span className="text-orange-500">{course.grade}</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold">{course.duration}</span>
                </div>
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-bold">IITian Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Selection */}
        <section className="sticky top-20 z-40 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 flex justify-center space-x-8 md:space-x-16">
            {(['overview', 'syllabus', 'batches'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 font-bold text-sm uppercase tracking-widest relative transition-all ${activeTab === tab ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"></div>}
              </button>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            
            {/* Overview Tab Content */}
            {activeTab === 'overview' && (
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div className="lg:col-span-2 space-y-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Program Philosophy</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{course.detailedDescription}</p>
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 italic text-slate-700 relative">
                      <svg className="w-12 h-12 text-orange-200 absolute top-4 left-4 -z-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V7C13.017 5.89543 13.9124 5 15.017 5H18.017C19.1216 5 20.017 5.89543 20.017 7V13C20.017 14.1046 19.1216 15 18.017 15H17.017C17.017 15.5523 16.5693 16 16.017 16H14.017V21H14.017ZM5.017 21V18C5.017 16.8954 5.91243 16 7.017 16H10.017V14H8.017C5.80786 14 4.017 12.2091 4.017 10V7C4.017 5.89543 4.91243 5 6.017 5H9.017C10.1216 5 11.017 5.89543 11.017 7V13C11.017 14.1046 10.1216 15 9.017 15H8.017C8.017 15.5523 7.56929 16 7.017 16H5.017V21H5.017Z" /></svg>
                      <p className="relative z-10 leading-relaxed">
                        At Vedic Expert, we believe that early exposure to STEM fosters critical thinking, problem-solving, and innovation. We provide a transformative learning experience ensuring personalized attention and interactive sessions.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">What You’ll Gain from the Program</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {course.features.map((feat, i) => (
                        <div key={i} className="flex">
                          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mr-5 flex-shrink-0">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-orange-600 text-white p-10 rounded-[2.5rem] shadow-2xl">
                    <h4 className="text-2xl font-bold mb-6">Who Can Apply?</h4>
                    <p className="text-orange-100 mb-8 opacity-80">To maintain high standards, this program is exclusive to:</p>
                    <ul className="space-y-6">
                      {course.eligibility.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1 text-xs font-bold">{i+1}</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-10 bg-slate-900 text-white rounded-[2.5rem]">
                    <h4 className="text-2xl font-bold mb-4">Register Interest</h4>
                    <p className="text-slate-400 mb-8">Seats are limited to 25 per batch to ensure personalized attention.</p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdpmnzDAzC_NhfJL01zUtDDFzI3bLOZSb1_rMv3ymya-zu7Ww/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full bg-white text-slate-900 py-4 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Check Seat Availability
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus Tab Content */}
            {activeTab === 'syllabus' && (
              <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Curriculum Excellence</h2>
                  <p className="text-slate-500 text-lg">Detailed subject-wise breakdown for {course.grade}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Object.entries(course.syllabus).map(([subject, topics]) => (
                    <div key={subject} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-orange-200 transition-all group">
                      <div className="flex items-center mb-8">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg ${
                          subject === 'physics' ? 'bg-blue-600' : 
                          subject === 'chemistry' ? 'bg-green-600' :
                          subject === 'biology' ? 'bg-red-500' : 'bg-purple-600'
                        }`}>
                           <span className="capitalize font-bold text-sm">{subject[0]}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 capitalize">{subject}</h4>
                      </div>
                      <ul className="space-y-4">
                        {topics.map((topic, i) => (
                          <li key={i} className={`text-sm flex items-start ${topic.toLowerCase().includes('lab') ? 'text-orange-600 font-bold' : 'text-slate-600'}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 mt-1.5 group-hover:bg-orange-400"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Batches Tab Content */}
            {activeTab === 'batches' && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Upcoming Batches</h2>
                  <p className="text-slate-500 text-lg">Choose the schedule that best fits your academic calendar.</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {course.batches.map((batch, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-between p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-orange-200 transition-all group">
                      <div className="flex items-center mb-6 md:mb-0">
                         <div className="w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center font-serif text-2xl mr-8 group-hover:bg-orange-600 transition-colors">
                           {i+1}
                         </div>
                         <div>
                           <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1 block">Registration Open</span>
                           <h4 className="text-2xl font-bold text-slate-900">{batch}</h4>
                         </div>
                      </div>
                      <div className="flex items-center space-x-8">
                         <div className="text-center md:text-left">
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Seats Remaining</p>
                           <p className="text-lg font-bold text-slate-900">{15 + (i * 2)} Slots</p>
                         </div>
                         <a
                           href="https://docs.google.com/forms/d/e/1FAIpQLSdpmnzDAzC_NhfJL01zUtDDFzI3bLOZSb1_rMv3ymya-zu7Ww/viewform"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all"
                         >
                           Select Batch
                         </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 text-center">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Batch Selection Policy</h4>
                  <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Batches provide the same transformative learning experience, ensuring that every student receives personalized attention, interactive sessions, and in-depth training in STEM subjects.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Closing CTA */}
        <section id="contact-footer" className="py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Embark on Your <span className="text-orange-500">Academic Journey?</span></h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Don't miss this opportunity to build a strong STEM foundation. Limited seats available for the {course.grade} program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdpmnzDAzC_NhfJL01zUtDDFzI3bLOZSb1_rMv3ymya-zu7Ww/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20"
              >
                Register for Foundation
              </a>
              <button 
                onClick={onBack}
                className="px-12 py-5 bg-white/10 border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Go Back Home
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CourseDetailsPage;
