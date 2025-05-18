import React from 'react';

const testimonials = [
  {
    name: 'Priya Maheshwari',
    role: 'Senior Manager, Special Projects',
    text: 'Leap10x has been an incredible partner, they were able to reduce our content creation time by 50% and cost by 75% using their training product. What\'s even more impressive is how they prioritize customer feedback and consistently make improvements based on it. We have been able to train our drivers and hosts across different regions in regional languages.',
    img: 'https://ext.same-assets.com/2073082294/134017901.svg',
  },
  {
    name: 'Vaibhav Varshney',
    role: 'Health, Safety & Sustainability Head',
    text: 'First time, we experienced technology that is built for the blue-collar workers. We have been able to reach to our contract workforce spread across regions seamlessly without any change management or app install. The team is really great to work with, goes above and beyond to help us achieve our business objectives.',
    img: 'https://ext.same-assets.com/2073082294/2866209691.svg',
  }
];

const Testimonials = () => (
  <section className="bg-white py-16 px-4">
    <h3 className="text-xl font-bold text-center text-primary mb-10">Testimonial</h3>
    <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-light p-8 rounded-xl shadow flex flex-col items-center text-center">
          <img src={t.img} alt={t.name} className="w-16 h-16 mb-2 rounded-full bg-gray-200" />
          <div className="font-bold text-secondary text-lg mb-2">{t.name}</div>
          <div className="font-medium text-muted mb-1">{t.role}</div>
          <p className="text-primary text-sm">{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
