
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChartBar, Users, PieChart } from 'lucide-react';

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    setIsVisible(true);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      title: "Accelerating Growth in the Digital Age",
      excerpt: "Discover strategies to leverage technology for exponential business growth.",
      category: "Business"
    },
    {
      title: "The Power of Mindful Leadership",
      excerpt: "How present-moment awareness transforms team dynamics and drives success.",
      category: "Leadership"
    },
    {
      title: "Data-Driven Decision Making",
      excerpt: "Turn your business data into actionable insights for strategic advantage.",
      category: "Analytics"
    }
  ];

  return (
    <section className="py-16 px-4 bg-purple-50 flex flex-col items-center overflow-hidden">
      {/* Purple circle background - similar to the image */}
      <div className="absolute w-full max-w-6xl h-full max-h-6xl rounded-full bg-purple-100 opacity-50 -z-10"></div>
      
      {/* Header with animation */}
      <div 
        className={`transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } mb-12 text-center`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">Latest Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Stay ahead with our expert perspectives on business growth, leadership, and innovation</p>
      </div>

      {/* Featured blog section with illustration similar to image */}
      <div 
        className={`flex flex-col items-center md:flex-row md:justify-between md:w-full max-w-4xl bg-white p-6 md:p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
        } hover:shadow-xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-grow mb-6 md:mb-0 md:pr-6">
          <h4 className="text-xl md:text-2xl font-bold text-purple-800 mb-3">
            All the Latest Insights
            <br />
            <span className="font-normal text-gray-600">from Leap10x blogs.</span>
          </h4>
          <p className="text-gray-600 mb-4 hidden md:block">
            Explore actionable strategies and innovative approaches to transform your business and leadership skills.
          </p>
          <a 
            href="/blogs" 
            className={`inline-flex items-center gap-2 mt-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-800 ${
              isHovered ? "pl-7 pr-5" : "pl-6 pr-6"
            }`}
          >
            Visit Blogs 
            <ArrowRight 
              className={`transition-all duration-300 ${
                isHovered ? "transform translate-x-1" : ""
              }`} 
              size={18} 
            />
          </a>
        </div>
        
        {/* Team illustration similar to the image */}
        <div className={`relative w-64 h-48 transition-all duration-500 transform ${isHovered ? "scale-105" : "scale-100"}`}>
          {/* Laptop/Screen background */}
          <div className="absolute right-0 top-2 w-40 h-32 bg-purple-900 rounded-lg"></div>
          <div className="absolute right-2 top-4 w-36 h-24 bg-white rounded-md"></div>
          
          {/* Chart elements */}
          <div className="absolute right-6 top-8 w-28 h-16">
            <div className="absolute top-0 left-4 w-4 h-10 bg-green-400 rounded-t-sm"></div>
            <div className="absolute top-4 left-10 w-4 h-6 bg-purple-400 rounded-t-sm"></div>
            <div className="absolute top-7 left-16 w-4 h-3 bg-purple-300 rounded-t-sm"></div>
          </div>
          
          {/* Data dashboard */}
          <div className="absolute right-4 bottom-0 w-24 h-16 bg-purple-800 rounded-md p-1">
            <div className="bg-purple-200 w-full h-2 rounded-full mb-1"></div>
            <div className="bg-purple-300 w-5/6 h-2 rounded-full mb-1"></div>
            <div className="bg-green-300 w-16 h-5 rounded-sm"></div>
          </div>
          
          {/* People in purple shirts */}
          <div className="absolute left-0 bottom-5 w-16 h-28 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-purple-900"></div>
            <div className="w-10 h-12 bg-purple-500 rounded-md"></div>
            <div className="w-8 h-6 bg-purple-900"></div>
          </div>
          
          <div className="absolute left-12 bottom-0 w-16 h-24 flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-purple-900"></div>
            <div className="w-9 h-10 bg-purple-500 rounded-md"></div>
            <div className="w-7 h-5 bg-purple-900"></div>
          </div>
          
          <div className="absolute left-24 bottom-8 w-16 h-26 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-purple-900"></div>
            <div className="w-10 h-12 bg-purple-500 rounded-md"></div>
            <div className="w-8 h-6 bg-purple-900"></div>
          </div>
        </div>
      </div>

      {/* Blog posts previews */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {blogPosts.map((post, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
          >
            <div className="h-40 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              {index === 0 && <ChartBar size={48} className="text-white opacity-80" />}
              {index === 1 && <Users size={48} className="text-white opacity-80" />}
              {index === 2 && <PieChart size={48} className="text-white opacity-80" />}
              <span className="absolute bottom-2 right-2 text-white font-medium px-3 py-1 rounded-full bg-white bg-opacity-20">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a 
                href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
              >
                Read More 
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className={`mt-12 transition-all duration-700 delay-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}>
        <a 
          href="/blogs" 
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-800 hover:shadow-lg flex items-center gap-2"
        >
          View All Posts
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default Blogs;