import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex justify-between items-center relative z-30">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-extrabold flex items-center gap-2">
          <img src="https://ext.same-assets.com/2073082294/967000450.svg" alt="Leap10x Logo" className="w-7 h-7 mr-1" />
          Leap10x
        </Link>
      </div>
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <svg width="30" height="30" fill="none">
          <rect width="28" height="4" rx="2" fill="#fff" y="5" />
          <rect width="28" height="4" rx="2" fill="#fff" y="13" />
          <rect width="28" height="4" rx="2" fill="#fff" y="21" />
        </svg>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-7">
        <div className="flex gap-4">
          <div className="group relative">
            <button className="focus:outline-none">Product</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white text-purple-900 shadow-lg rounded-xl min-w-[180px] overflow-hidden border border-gray-50 z-40">
              <Link to="#" className="px-4 py-3 hover:bg-purple-100">Onboarding</Link>
              <Link to="#" className="px-4 py-3 hover:bg-purple-100">Upskilling</Link>
              <Link to="#" className="px-4 py-3 hover:bg-purple-100">Task Management</Link>
              <Link to="#" className="px-4 py-3 hover:bg-purple-100">Attendance Management</Link>
              <Link to="#" className="px-4 py-3 hover:bg-purple-100">Vendor Management</Link>
            </div>
          </div>
          <Link to="/blogs" className="hover:text-indigo-300">Resources</Link>
          <div className="group relative">
            <button className="focus:outline-none">About</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white text-purple-900 shadow-lg rounded-xl min-w-[180px] overflow-hidden border border-gray-50 z-40">
              <Link to="/about-us" className="px-4 py-3 hover:bg-purple-100">About Us</Link>
              <Link to="/contact-us" className="px-4 py-3 hover:bg-purple-100">Contact Us</Link>
              <Link to="/partner-with-us" className="px-4 py-3 hover:bg-purple-100">Partner with Us</Link>
            </div>
          </div>
        </div>
        <Link to="/" className="ml-7 bg-white text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-indigo-700 hover:text-white shadow transition border border-white">Request Demo</Link>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-start shadow-lg animate-fade-in px-4 py-4 md:hidden">
          <button className="absolute top-3 right-4 text-3xl focus:outline-none font-bold" aria-label="Close" onClick={() => setOpen(false)}>&times;</button>
          <Link onClick={() => setOpen(false)} to="#" className="block py-3 pl-2">Product ▼</Link>
          <div className="flex flex-col pl-5 gap-1 mb-2">
            <Link to="#" onClick={() => setOpen(false)} className="py-2">Onboarding</Link>
            <Link to="#" onClick={() => setOpen(false)} className="py-2">Upskilling</Link>
            <Link to="#" onClick={() => setOpen(false)} className="py-2">Task Management</Link>
            <Link to="#" onClick={() => setOpen(false)} className="py-2">Attendance Management</Link>
            <Link to="#" onClick={() => setOpen(false)} className="py-2">Vendor Management</Link>
          </div>
          <Link to="/blogs" onClick={() => setOpen(false)} className="block py-3 pl-2">Resources</Link>
          <Link to="/about-us" onClick={() => setOpen(false)} className="block py-3 pl-2">About Us</Link>
          <Link to="/contact-us" onClick={() => setOpen(false)} className="block py-3 pl-2">Contact Us</Link>
          <Link to="/partner-with-us" onClick={() => setOpen(false)} className="block py-3 pl-2">Partner with Us</Link>
          <Link to="/" className="bg-white text-purple-900 font-bold px-5 py-2 mt-4 mb-3 rounded-full w-full text-center hover:bg-indigo-700 hover:text-white border border-white shadow transition">Request Demo</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
