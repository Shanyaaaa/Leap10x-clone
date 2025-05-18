import React from 'react';

const FinalCTA = () => (
  <section className="py-14 px-4 bg-light flex flex-col items-center">
    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
      The Future of Training is here,<br />
      <span className="text-purple-700">Are you ready for it?</span>
    </h3>
    <p className="text-grayish mb-6">
      Tired of chasing your learners to complete dull training? Let's speak today
    </p>
    <a
      href="https://calendly.com/harshitgarg1/leap10xdemo"
      className="relative inline-block px-8 py-3 font-semibold rounded-full text-light overflow-hidden"
    >
      {/* Background span */}
      <span className="absolute inset-0 bg-purple-700 transition-colors duration-300 rounded-full hover:bg-green-600"></span>
      {/* Text */}
      <span className="relative">Request Demo</span>
    </a>
  </section>
);

export default FinalCTA;
