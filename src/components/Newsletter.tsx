import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setMessage('Oops! Something went wrong while submitting the form.');
    } else {
      setMessage('Thanks for joining our newsletter!');
      setEmail('');
    }
  };

  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <h4 className="text-xl font-bold text-primary mb-4">Subscribe to our Email newsletter!</h4>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input
          value={email}
          onChange={e=>setEmail(e.target.value)}
          type="email"
          placeholder="Your Email Address"
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-secondary w-64"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-r-lg bg-secondary text-light font-semibold hover:bg-primary transition"
        >Subscribe</button>
      </form>
      {message && (
        <div className={`mt-3 font-medium ${message.startsWith('Thanks') ? 'text-accent' : 'text-red-500'}`}>{message}</div>
      )}
    </section>
  );
};

export default Newsletter;

