import React from 'react';
import investorImage from '../images/investor.jpeg';

const Investor: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          An Investor's Perspective
        </h2>
        <div className="max-w-3xl mx-auto mt-12">
          <img 
            src={investorImage} 
            className="rounded-full w-48 h-48 mx-auto mb-8 shadow-xl ring-4 ring-orange-500 ring-offset-8 ring-offset-white" 
            alt="GopalKrishna Shetty" 
          />
          <blockquote className="text-xl md:text-2xl font-serif text-slate-700 mt-12 mb-6 leading-relaxed italic">
            "My journey from Kundapura to the corporate boardrooms of Mangalore taught me that education is the ultimate equalizer. At Vedic Expert, we aren't just teaching subjects; we are nurturing curiosity and building the foundation for a brighter, more innovative Karnataka."
          </blockquote>
          <p className="text-lg font-semibold text-slate-900">— GopalKrishna Shetty</p>
          <p className="text-md font-medium text-orange-600">Investor & Mentor</p>
        </div>
      </div>
    </section>
  );
};

export default Investor;