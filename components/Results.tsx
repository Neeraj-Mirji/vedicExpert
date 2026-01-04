
import React from 'react';

// It's better to have a more dynamic way to import images if there are many,
// but for a fixed number, direct imports are fine.
import result1 from '../images/Bansal Results/1.jpg';
import result2 from '../images/Bansal Results/2.jpg';
import result3 from '../images/Bansal Results/3.jpg';
import result4 from '../images/Bansal Results/4.jpg';
import result5 from '../images/Bansal Results/5.jpg';
import result6 from '../images/Bansal Results/6.jpg';

const results = [
  { src: result1, alt: 'Result 1' },
  { src: result2, alt: 'Result 2' },
  { src: result3, alt: 'Result 3' },
  { src: result4, alt: 'Result 4' },
  { src: result5, alt: 'Result 5' },
  { src: result6, alt: 'Result 6' },
];

const Results: React.FC = () => {
  const duplicatedResults = [...results, ...results];

  return (
    <section className="py-20 bg-slate-50">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          Our Legacy of Excellence
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          We are proud of our students' achievements. Our collaboration with Bansal Classes has produced outstanding results in JEE and NEET.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedResults.map((result, index) => (
            <div key={index} className="flex-shrink-0 w-auto h-80 mx-4">
              <img 
                src={result.src} 
                alt={result.alt} 
                className="h-full w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
