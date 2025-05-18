import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is Leap10x a LMS?',
    a: 'Leap10x provides all the essential LMS features: content creation, hosting, delivery, learner management, and analytics focused specifically on microlearning. This enables rapid content creation, seamless engagement, and instant tracking.'
  },
  {
    q: 'Can we customize the content to meet our specific requirements?',
    a: 'Yes, our product boasts a huge range of configurations that let you customize content as per your team\'s needs, or even create content using Leap10x AI.'
  },
  {
    q: 'How easy is it to use Leap10x?',
    a: 'For learners: no app, no signup, no login – just a magic link via WhatsApp, SMS, or Email. For Admin: easy to create content, manage users and track actionable analytics.'
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-16 px-4">
      <h3 className="text-xl font-bold text-center text-primary mb-8">FAQs<br /><span className="text-base font-medium text-grayish">Any questions? We've got you.</span></h3>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <button className="w-full py-3 px-4 flex justify-between items-center font-semibold text-left text-primary bg-light" onClick={() => setOpen(idx === open ? null : idx)}>
              <span>{faq.q}</span>
              <span>{open===idx ? '-' : '+'}</span>
            </button>
            {open === idx && (
              <div className="bg-white px-4 py-3 text-grayish animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
