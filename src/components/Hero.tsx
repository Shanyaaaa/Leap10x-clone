import React from 'react';

const Hero = () => (
  <section className="bg-primary text-light py-20 px-6 flex flex-col items-center text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Train and Engage<br />Your Frontline Workforce</h1>
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Friction-free, Scalable & Impactful</h2>
    <p className="max-w-xl">Deliver safety & soft-skill trainings, compliance programs, onboarding workflows to thousands of frontline and bluecollar workers seamlessly -- <b>No new apps, No logins, No technical barriers</b></p>
    <div className="mt-8 flex gap-4">
      <button className="bg-light text-primary font-bold px-6 py-3 rounded-full hover:bg-secondary hover:text-light transition">Request Demo</button>
      <button className="bg-transparent border border-light text-light font-bold px-6 py-3 rounded-full hover:bg-light hover:text-primary transition">Call Us</button>
    </div>
  </section>
);

export default Hero;
