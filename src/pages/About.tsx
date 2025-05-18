import { motion } from 'framer-motion';

const features = [
  {
    icon: 'https://ext.same-assets.com/2871620551/2102588135.svg',
    title: 'Enjoy learning experiences that look and feel like the social media apps we use everyday.',
    bg: 'bg-white',
    text: 'text-primary'
  },
  {
    icon: 'https://ext.same-assets.com/2871620551/4158597494.png',
    title: 'Learn in the flow-of-work on the channels we use everyday, like SMS, WhatsApp, Email or Teams.',
    bg: 'bg-yellow-50',
    text: 'text-primary'
  }
];

const team = [
  {
    name: 'Harshit Garg',
    position: 'Founder, CEO',
    info: 'IIM Mumbai, NIT Kurukshetra',
    extra: 'ex- Pidilite & Godfrey',
    img: 'https://ext.same-assets.com/2871620551/3632028887.jpeg',
  },
  {
    name: 'Ankur Madharia',
    position: 'Co-founder, Product',
    info: 'IIM Mumbai, DCE',
    extra: 'Doubtnut, ex-Google & Samsung',
    img: 'https://ext.same-assets.com/2871620551/361256463.webp',
  },
  {
    name: 'Shashank Singla',
    position: 'Mentor',
    info: 'IIT Delhi',
    extra: 'CEO- Hcode Technologies, CTO- Paytunes, ex- Goldman Sach',
    img: 'https://ext.same-assets.com/2871620551/4219131131.jpeg',
  },
  {
    name: 'Himani Kanwal',
    position: 'Mentor',
    info: 'IIM Mumbai',
    extra: 'ex- Director Johnson & Johnson, Castrol, Dabur, Mondlez',
    img: 'https://ext.same-assets.com/2871620551/4219131131.jpeg',
  },
];

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -32 }} transition={{ duration: 0.6 }}>
      <div className="bg-light min-h-screen flex flex-col items-center py-14 px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-3">Win the Fight for Attention</h1>
        <p className="text-lg text-grayish max-w-2xl text-center mb-7">Traditional e-learning sucks – it's not engaging, it's not accessible, it's not fun. Leap10x exists to enable learners to…</p>
        <div className="flex flex-col md:flex-row gap-6 mb-14 justify-center">
          {features.map((f, i) => (
            <motion.div key={f.title} whileHover={{ scale: 1.04 }} className={`rounded-2xl px-7 py-5 shadow-xl flex items-center gap-3 w-[330px] ${f.bg}`}>
              <img src={f.icon} alt="" className="h-9 w-9 object-contain" />
              <span className={`font-semibold ${f.text}`}>{f.title}</span>
            </motion.div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-16">
          {team.map((member, i) => (
            <motion.div key={member.name}
              className="rounded-2xl bg-white shadow-xl flex flex-col items-center px-5 py-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
            >
              <img src={member.img} alt={member.name} className="w-36 h-36 rounded-xl object-cover border-4 border-primary mb-2" />
              <div className="text-lg font-bold text-primary mb-1">{member.name}</div>
              <div className="text-sm text-secondary font-medium mb-1">{member.position}</div>
              <div className="text-xs mb-1 text-grayish">{member.info}</div>
              <div className="text-xs italic text-gray-400">{member.extra}</div>
            </motion.div>
          ))}
        </div>
        <motion.div className="my-16 flex flex-col items-center gap-2" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
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
