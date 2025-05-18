import { motion } from 'framer-motion';

const features = [
  {
    icon: 'https://ext.same-assets.com/1810182928/2102588135.svg',
    text: 'Enjoy learning experiences that look and feel like the social media apps we use everyday.'
  },
  {
    icon: 'https://ext.same-assets.com/1810182928/4158597494.png',
    text: 'Learn in the flow-of-work on the channels we use everyday, like SMS, WhatsApp, Email or Teams.'
  }
];

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -36 }} transition={{ duration: 0.55 }}>
      <div className="bg-light min-h-screen flex flex-col items-center py-14 px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-3">We can’t wait to meet you</h1>
        <p className="text-lg text-grayish max-w-2xl text-center mb-8">Whether you want to demo our courses, analytics for your blue-collar employees, or want help building your own microcourses—we're here to help, night and day.</p>
        <a href="mailto:hello@leap10x.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#e6dbfa] hover:bg-[#e6cdf3] rounded-full font-semibold mb-9 text-primary text-lg shadow-lg border-2 border-secondary transition-all">
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <circle cx="14" cy="14" r="13" stroke="#571d9a" strokeWidth="2" fill="#e6dbfa"/>
            <path d="M7 10l7 6 7-6" stroke="#571d9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Write to us at hello@leap10x.in
        </a>
        <div className="flex flex-col md:flex-row gap-6 mb-14 justify-center">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04 }} className="rounded-2xl px-7 py-5 shadow-xl flex items-center gap-3 w-[330px] bg-white">
              <img src={f.icon} alt="" className="h-9 w-9 object-contain" />
              <span className="font-semibold text-primary">{f.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.div className="my-16 flex flex-col items-center gap-2" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-center">The Future of Training is here,<br /><span className="text-secondary">Are you ready for it?</span></h3>
          <p className="text-grayish mb-4 text-center">Tired of chasing your learners to complete dull training? Let's speak today</p>
          <a
            href="https://calendly.com/harshitgarg1/leap10xdemo"
            className="bg-secondary text-light px-8 py-3 rounded-full font-semibold hover:bg-primary transition-lg text-lg shadow-lg"
          >
            Request Demo
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
