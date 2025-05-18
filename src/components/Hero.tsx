import React, { useEffect, useState } from 'react';
import intro from '../assets/intro.png';
import intro2 from '../assets/intro2.png';
import intro3 from '../assets/intro3.png';

const slides = [intro, intro2, intro3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Train and Engage<br />Your Frontline Workforce
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Friction-free, Scalable & Impactful
          </h2>
          <p className="text-base md:text-lg mb-6 font-light">
            Deliver safety & soft-skill trainings, compliance programs, onboarding workflows to thousands of frontline and bluecollar workers seamlessly — <b>No new apps, No logins, No technical barriers</b>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-white text-purple-900 font-bold px-6 py-3 rounded-full hover:bg-indigo-700 hover:text-white transition duration-300">
              Request Demo
            </button>
            <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-purple-900 transition duration-300">
              Call Us
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center transition-all duration-1000">
          <img
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            className="w-full max-w-md object-contain drop-shadow-xl rounded-xl transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
