import React, { useEffect, useState } from 'react';

const results = [
  { value: '1.25x', label: 'Increase in Employee Productivity.' },
  { value: '24%', label: 'Reduction in Workplace Injuries.' },
  { value: '70%', label: 'Reduction in Onboarding Time.' },
  { value: '95%', label: 'Reduction in Go-to-Launch Enterprise Applications.' },
  { value: '3x', label: 'Faster Time to Proficiency for a New Employee.' },
  { value: '90%', label: 'Course Completion Rates.' }
];

const parseValue = (str) => {
  const num = parseFloat(str);
  const suffix = str.replace(/[0-9.]/g, '');
  return { num, suffix };
};

const AnimatedNumber = ({ target }) => {
  const { num, suffix } = parseValue(target);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = parseFloat((progress * num).toFixed(2));
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target]);

  return (
    <span className="text-5xl font-extrabold text-secondary mb-3">
      {count}
      {suffix}
    </span>
  );
};

const Results = () => (
  <section className="py-16 px-6 bg-light">
    <h3 className="text-3xl font-bold text-center mb-12 text-primary">
      Results Our Customers Have Seen
    </h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {results.map((r, idx) => (
        <div
          key={idx}
          className="bg-white p-8 rounded-2xl shadow-xl text-center flex flex-col items-center transition-transform duration-300 hover:scale-105"
        >
          <AnimatedNumber target={r.value} />
          <span className="text-base font-medium text-gray-600">{r.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Results;
