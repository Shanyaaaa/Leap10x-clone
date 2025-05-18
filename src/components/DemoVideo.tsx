import React from 'react';

const DemoVideo = () => (
  <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
      Discover How Leap10x Works
    </h2>
    <div className="w-full max-w-7xl aspect-[16/9] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
      <iframe
        src="https://www.youtube.com/embed/OHjFr0KK5NE?autoplay=1&mute=1&rel=0"
        title="Leap10x Video Demo"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </div>
  </section>
);

export default DemoVideo;
