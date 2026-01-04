
import React from 'react';
import mainImage from '../images/mainImage.png';


const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-700 text-base font-bold tracking-wider  mb-6">
            Foundation Excellence for 8<sup>th</sup>, 9<sup>th</sup> & 10<sup>th</sup>
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-8">
            Your Head Start to  <span className="text-orange-600">IIT & NEET</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            At Vedic Expert, we combine modern STEM curriculum with ancient Vedic techniques to help young minds crack JEE and NEET with speed and precision.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center group"
            >
              Explore Courses
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Free Counseling
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Student" />
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">5000+</span> Students Enrolled This Year
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group">
            <img 
              src={mainImage} 
              alt="Happy Vedic Expert Students" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-100 max-w-[240px] hidden md:block animate-bounce-slow">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-slate-800">100% Success</span>
            </div>
            <p className="text-xs text-slate-500">95% of our foundational students enter top Tier-1 institutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
