import React from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Frictionless Access',
    desc: 'No app, no login. Access via WhatsApp, SMS, or QR codes.'
  },
  {
    icon: '📝',
    title: 'Engaging Content',
    desc: 'Training your employees want to complete. Local languages & social media style.'
  },
  {
    icon: '📊',
    title: 'Actionable Insights',
    desc: 'Analytics and reporting. Track even offline trainings.'
  },
  {
    icon: '🤖',
    title: 'Leap10x AI',
    desc: 'Generate content on the go. Auto-translate courses.'
  },
];

const Features = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, idx) => (
        <div key={idx} className="bg-light p-6 rounded-xl flex flex-col items-center text-center shadow-md">
          <div className="text-4xl mb-3">{f.icon}</div>
          <h4 className="font-bold text-xl mb-1">{f.title}</h4>
          <p className="text-grayish text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
