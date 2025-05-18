import React from 'react';

const partners = [
  {
    alt: 'Razorpay Rise',
    src: 'https://ext.same-assets.com/2073082294/903491721.png',
  },
  {
    alt: 'Microsoft for Startups',
    src: 'https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/651e757106cec4c96477e0fb_msforstartups.png.png',
  },
  {
    alt: 'Salesforce for Startups',
    src: 'https://ext.same-assets.com/2073082294/3525864438.svg',
  },
];

const Partners = () => (
  <section className="bg-primary py-8 px-4 flex flex-col items-center">
    <h4 className="text-lg text-center text-light font-bold mb-4">
      We are backed by the most renowned Startup Programs
    </h4>
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {partners.map((p, idx) => (
        <img key={idx} src={p.src} alt={p.alt} className="h-10 md:h-14 object-contain bg-white rounded p-2" />
      ))}
    </div>
  </section>
);

export default Partners;
