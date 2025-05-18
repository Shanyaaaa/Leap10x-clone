import React from 'react';

import image0 from '../assets/image.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const features = [
  {
    icon: '🎯',
    title: 'Frictionless Access',
    desc: [
      'No app, no login required.',
      'Access via WhatsApp, SMS, or QR codes.',
    ],
    img: image0,
  },
  {
    icon: '📝',
    title: 'Engaging Content',
    desc: [
      'Training your employees want to complete.',
      'Supports local languages.',
      'Social media style for higher engagement.',
    ],
    img: image1,
  },
  {
    icon: '📊',
    title: 'Actionable Insights',
    desc: [
      'Detailed analytics and reporting.',
      'Track even offline trainings effectively.',
    ],
    img: image2,
  },
  {
    icon: '🤖',
    title: 'Leap10x AI',
    desc: [
      'Generate content on the go with AI.',
      'Auto-translate courses into multiple languages.',
    ],
    img: image3,
  },
];

const Features = () => (
  <section className="py-16 px-6 max-w-6xl mx-auto">
    {features.map((f, idx) => {
      const isEven = idx % 2 === 0;
      return (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            !isEven ? 'md:flex-row-reverse' : ''
          } items-center gap-8 mb-16`}
        >
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={f.img}
              alt={f.title}
              className="max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h4 className="text-purple-300 font-extrabold text-3xl mb-3">
              {f.title}
            </h4>
            <ul className="list-disc list-inside text-black space-y-1">
              {f.desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    })}
  </section>
);

export default Features;
