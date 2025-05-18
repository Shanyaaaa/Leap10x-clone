import React from 'react';

const logos = [
  'https://ext.same-assets.com/2073082294/130339524.png',
  'https://ext.same-assets.com/2073082294/2200413647.png',
  'https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/669e9ebed3e028a417450293_Zomato_logo.png',
  'https://ext.same-assets.com/2073082294/1427683134.png',
  'https://ext.same-assets.com/2073082294/130339524.png',
];

const slideAnimationDuration = 30; // seconds

const TrustedBy = () => {
  return (
    <>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section className="py-10 px-4 bg-light flex flex-col items-center overflow-hidden">
        <h3 className="text-lg font-semibold text-grayish mb-6">
          Trusted by{' '}
          <span className="text-secondary font-bold hover:text-green-600 transition-colors duration-300 cursor-pointer">
            Leading Companies
          </span>
        </h3>

        <div
          className="relative w-full max-w-6xl overflow-hidden"
          style={{ height: 80 }}
        >
          <div
            className="flex gap-10"
            style={{
              width: '200%',
              animation: `slide ${slideAnimationDuration}s linear infinite`,
            }}
          >
            {[...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Company logo"
                className="h-20 object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
                style={{ flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
