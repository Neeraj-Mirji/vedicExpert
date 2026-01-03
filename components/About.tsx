
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl shadow-lg w-full h-full object-cover aspect-[4/5]" 
                alt="Focused Learning" 
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl shadow-lg w-full h-full object-cover aspect-[4/5] mt-8" 
                alt="Collaborative Study" 
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Our Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Where Ancient Wisdom Meets Modern Science.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Vedic Expert was founded with a singular mission: to simplify the most complex mathematical and scientific concepts using Vedic mental techniques. We believe that competitive preparation should start not just early, but correctly.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our 8th, 9th, and 10th grade foundation courses are carefully curated to ensure students don't feel burdened, but empowered. We focus on building "Problem Solving Intuition" which is the key differentiator in JEE and NEET.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Personalized Coaching', desc: 'Batches limited to 25 students for maximum focus.' },
                { title: 'Vedic Math Mastery', desc: 'Solve complex calculations in seconds, not minutes.' },
                { title: 'Holistic Development', desc: 'Focus on EQ and stress management alongside IQ.' },
                { title: 'Digital Classrooms', desc: 'Experience 3D visualizations for abstract concepts.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
