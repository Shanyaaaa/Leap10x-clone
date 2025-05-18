import { motion } from 'framer-motion';

const blogs = [
  {
    img: 'https://ext.same-assets.com/3458439613/571945548.false',
    title: 'Why Workers Leave: Top 5 Reasons for Attrition (And How to Address Them)',
    summary: 'Worker attrition is a major challenge when discussing about blue-collar workforces, especially in industries such as retail, manufacturing, logistics etc. In this article, we dive deep into why worker retention is essential for your business, and share simple steps to tackle the problem of retention.',
    author: 'Harshit Garg',
    date: 'May 1, 2025',
    link: '#',
  },
  {
    img: 'https://ext.same-assets.com/3458439613/2271857945.false',
    title: 'Building a Frontline Brand: How Worker Etiquette Impacts Business Growth',
    summary: 'Frontline workers are the real ambassadors of your brand—every interaction shapes business perception. This blog highlights etiquette training for strong relationships and better loyalty.',
    author: 'Harshit Garg',
    date: 'April 24, 2025',
    link: '#',
  },
  {
    img: 'https://ext.same-assets.com/3458439613/1210075784.false',
    title: 'Overcoming Digital Literacy Challenges in the Frontline Workforce',
    summary: 'Frontline workers often face barriers in adopting digital tools. This article highlights digital literacy for improving productivity and retention, and outlines practical strategies.',
    author: 'Harshit Garg',
    date: 'April 20, 2025',
    link: '#',
  },
  {
    img: 'https://ext.same-assets.com/3458439613/1207011988.false',
    title: 'Why Your Workers Hate Compliance Training (And How to Fix It)',
    summary: 'Compliance training is broken. This article breaks down why traditional methods fail frontline workers and offers a smarter, mobile-first solution: microlearning.',
    author: 'Harshit',
    date: 'April 11, 2025',
    link: '#',
  },
  {
    img: 'https://ext.same-assets.com/3458439613/2466667290.false',
    title: 'Why Safety Training is Critical for Your Workforce',
    summary: 'Safety training isn’t just checking a box—smart, bite-sized, and relatable content sticks. See case studies, improved safety, and fewer incidents.',
    author: 'Harshit',
    date: 'March 27, 2025',
    link: '#',
  },
  {
    img: 'https://ext.same-assets.com/3458439613/3731550227.png',
    title: 'Why Microlearning is the Future of Blue-Collar Workforce Training in India & SEA',
    summary: 'Microlearning is revolutionizing blue-collar workforce training. Discover how bite-sized, mobile-friendly lessons improve safety and onboarding.',
    author: 'Harshit',
    date: 'March 21, 2025',
    link: '#',
  }
];

export default function Blogs() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -32 }} transition={{ duration: 0.6 }}>
      <div className="bg-light min-h-screen flex flex-col py-14 px-2 items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">Blogs</h1>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <motion.a key={b.title} href={b.link} className="block bg-white rounded-xl shadow-xl overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300 border border-gray-100" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}>
              <img src={b.img} alt={b.title} className="h-40 md:h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5 flex flex-col h-[220px]">
                <div className="text-xs text-grayish mb-1">By {b.author} — {b.date}</div>
                <div className="font-bold text-lg mb-2 line-clamp-2 text-primary">{b.title}</div>
                <div className="text-sm text-muted mb-auto line-clamp-4">{b.summary}</div>
                <span className="mt-4 text-secondary font-semibold text-sm group-hover:underline">Read More</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
