import { motion } from 'framer-motion';

const privacy = `
Effective Date: 20 May 2023

At leap10x.in, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information. Please read this policy carefully to understand our practices regarding your personal information.

Information We Collect
- Personal Information: We may collect personal information such as your name, email, phone number, and company name when you or your organization voluntarily provide it to us.
- Log Data: Our servers automatically record information about your visit, such as your IP address, browser type, referring/exit pages, and timestamps.
- Cookies and Similar Technologies: We may use cookies and similar tracking technologies to enhance your experience on our website. These technologies allow us to collect information about your browsing activities and preferences.

Use of Information
- Personal Information: We may use your personal information to communicate with you, provide the services you requested, and improve our website.
- Log Data: We analyze log data to monitor and enhance website performance, diagnose technical issues, and detect and prevent fraudulent activities.
- Cookies and Similar Technologies: We use cookies to personalize your experience, track usage patterns, and serve targeted advertisements.

Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.
...
[CONTINUE with the full markdown content of your actual privacy policy here.]
`;

export default function Privacy() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -38 }} transition={{ duration: 0.55 }}>
      <div className="bg-gray-50 min-h-screen flex flex-col py-12 px-2 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-7 prose-sm prose-li:my-0 prose-headings:text-primary text-gray-900 prose max-h-[68vh] overflow-y-auto">
          <pre className="whitespace-pre-wrap font-sans">{privacy}</pre>
        </div>
      </div>
    </motion.div>
  );
}
