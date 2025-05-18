import { motion } from 'framer-motion';

const partners = [
  {
    title: 'Training Agency',
    desc: 'If you are working with corporates and already training in person, create your digital micro learning courses with us and be our content partner, we’ll share the content royalty with you for each sale and if you introduce new clients you get the revenue share from each sale',
    icon: 'https://ext.same-assets.com/1263019255/1198842458.otf',
  },
  {
    title: 'Learning Management Consultant',
    desc: 'If you are working with corporates and changing their L&D strategy, introduce us to your clients you get the revenue share from each sale.',
    icon: '',
  },
  {
    title: 'Enterprise Software',
    desc: 'If you are working with corporates and need help with your product learning and training to corporates, jointly create the courses with us and we help you implement the trainings and change management in a much faster way',
    icon: '',
  },
];

const useCases = [
  'POSH Training',
  'ESG Compliance Training',
  'Mental Health Education',
  'Safety Training',
  'Corporate Communication',
  'Fleet Safety Training',
  'Cyber Security Training',
  'Field force Training',
];

export default function Partner() {
  return (
    <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -36 }} transition={{ duration: 0.6 }}>
      <section className="bg-light min-h-screen flex flex-col items-center py-14 px-2">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 mb-8 w-full max-w-5xl">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center md:text-left mb-2">
              Partner with us to increase your offerings
            </h1>
            <h2 className="text-2xl text-primary font-bold mb-2 text-center md:text-left">Lets Collaborate!</h2>
            <a href="https://harshitgargnit.typeform.com/to/yGDlxGOY" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary hover:bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-all mb-5">Connect with Us</a>
          </div>
          <motion.img initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} src="https://cdn3d.iconscout.com/3d/premium/thumb/team-work-5328368-4451267.png" alt="Teamwork illustration" className="max-w-xs md:max-w-md mb-7 md:mb-0"/>
        </div>
        <h2 className="text-3xl font-bold mt-7 mb-7 text-center">You can partner with us if you are</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-14">
          {partners.map((p, idx) => (
            <motion.div key={p.title} className="bg-white shadow-xl rounded-2xl p-7" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * idx }} viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-secondary mb-2">{p.title}</h3>
              <p className="mb-2 text-primary text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-violet-50 py-12 px-4 rounded-xl max-w-5xl mb-10">
          <h3 className="text-2xl font-bold text-primary mb-5 text-center">Use cases where we would be ideal</h3>
          <p className="text-gray-500 mb-4 text-center">Make learning as easy as using social media with Leap10x</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {useCases.map((u, i) => (
              <motion.div key={u} whileHover={{ scale: 1.07 }} className="bg-light border border-secondary rounded-full px-5 py-2 font-semibold text-primary shadow-sm mt-1 transition-all cursor-default">
                {u}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className="w-full flex justify-center my-10" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="bg-violet-100 py-8 px-12 rounded-2xl shadow-lg w-full max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">We look forward to welcoming to Partner with you <span role="img" aria-label="smile">😄</span></h3>
            <a href="https://harshitgargnit.typeform.com/to/yGDlxGOY" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary hover:bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow mt-2 transition-all">Connect with Us</a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
