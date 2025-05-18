import React from 'react';

const logos = [
  // Sample logo URLs to be replaced with actual image links
  'https://ext.same-assets.com/2073082294/130339524.png',
  'https://ext.same-assets.com/2073082294/2200413647.png',
  'https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/669e9ebed3e028a417450293_Zomato_logo.png',
  'https://ext.same-assets.com/2073082294/1427683134.png',
  'https://ext.same-assets.com/2073082294/130339524.png',
];

const TrustedBy = () => (
  <section className="py-6 px-4 bg-light flex flex-col items-center">
    <h3 className="text-lg font-semibold text-grayish mb-3">
      Trusted by <span className="text-secondary font-bold">Leading Companies</span>
    </h3>
    <div className="flex flex-wrap gap-8 items-center justify-center w-full max-w-3xl">
      {logos.map((src, idx) => (
        <img key={idx} src={src} alt="Company logo" className="h-10 md:h-12 object-contain grayscale" />
      ))}
    </div>
  </section>
);

export default TrustedBy;
