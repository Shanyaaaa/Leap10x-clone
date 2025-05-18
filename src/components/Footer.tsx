import React from 'react';

const socials = [
  { href: 'https://www.linkedin.com/company/leap10x/?originalSubdomain=in', icon: 'M13 2H6c-1.1...', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/profile.php?id=100093264140912', icon: 'M18 2h-3.6c-5.4... ', label: 'Facebook' },
  { href: 'https://www.instagram.com/leap10x', icon: 'M7.75 2c-3.2... ', label: 'Instagram' },
];

const Footer = () => (
  <footer className="bg-primary text-light pt-12 pb-6 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-6 items-start">
      <div>
        <div className="font-extrabold text-2xl mb-2">Leap10x</div>
        <div className="mb-1 text-gray-100 text-sm">hello@leap10x.in</div>
        <div className="mb-2 text-gray-100 text-sm">+91 89502 23219</div>
      </div>
      <div className="mb-2">
        <div className="font-medium mb-1">Quick Links:</div>
        <a className="block text-gray-100 hover:text-light" href="/terms-conditions">Terms & Conditions</a>
        <a className="block text-gray-100 hover:text-light" href="/privacy-policy">Privacy Policy</a>
        <a className="block text-gray-100 hover:text-light" href="/blogs">Blog</a>
      </div>
      <div>
        <div className="font-medium mb-1">Follow us:</div>
        <div className="flex gap-4">
          {socials.map((s,idx) => (
            <a key={idx} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon}/></svg>
            </a>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <img src="https://ext.same-assets.com/2073082294/3694563638.png" alt="ISO" className="h-7 bg-white rounded p-1" />
          <img src="https://ext.same-assets.com/2073082294/47813726.false" alt="RRKabel" className="h-7 bg-white rounded p-1" />
        </div>
      </div>
    </div>
    <div className="text-center text-gray-200 mt-8 text-xs">© 2024 Leap10x Training Pvt Ltd</div>
  </footer>
);

export default Footer;
