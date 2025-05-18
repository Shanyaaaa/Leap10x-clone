import { motion } from 'framer-motion';

const terms = `
Last updated on 25th May 2023

This document contains terms and conditions (Terms of Use) as an electronic record pursuant to the provisions of the Information Technology Act, 2000,(IT Act), and rules made thereunder....

[CONTINUE with the full markdown content of your actual terms here.]
`;

export default function Terms() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -38 }} transition={{ duration: 0.55 }}>
      <div className="bg-gray-50 min-h-screen flex flex-col py-12 px-2 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Terms & Conditions</h1>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-7 prose-sm prose-li:my-0 prose-headings:text-primary text-gray-900 prose max-h-[68vh] overflow-y-auto">
          <pre className="whitespace-pre-wrap font-sans">{terms}</pre>
        </div>
      </div>
    </motion.div>
  );
}
