import React from 'react';

const DemoVideo = () => (
  <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Discover How Leap10x Works</h2>
    <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in">
      <iframe
        src="https://www.youtube.com/embed/OHjFr0KK5NE?si=5mRiVmIL9snLVbJz"
        title="Leap10x Video Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </div>
  </section>
);

export default DemoVideo;
