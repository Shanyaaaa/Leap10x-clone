import React from 'react';

const partners = [
  {
    alt: 'Razorpay Rise',
    src: 'https://www.businessoutreach.in/wp-content/uploads/2023/04/Name-Taglines-and-Logo-of-Razorpay.jpg',
  },
  {
    alt: 'Microsoft for Startups',
    src: 'https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/651e757106cec4c96477e0fb_msforstartups.png.png',
  },
  {
    alt: 'Salesforce for Startups',
    src: 'https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo.png',
  },
];

const Partners = () => (
  <section className="bg-purple-800 py-16 px-6 flex flex-col items-center">
    <h4 className="text-2xl md:text-3xl text-center text-white font-semibold mb-10">
      We are backed by the most renowned Startup Programs
    </h4>

    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
      {partners.map((p, idx) => (
        <img
          key={idx}
          src={p.src}
          alt={p.alt}
          className="h-16 md:h-30 object-contain-md p-3 shadow-md"
        />
      ))}
    </div>
  </section>
);

export default Partners;
