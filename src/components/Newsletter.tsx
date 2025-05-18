import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
    // Optionally show toast or success message
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-900">Subscribe to our</h2>
          <h3 className="text-2xl font-semibold text-purple-700">Email newsletter!</h3>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 w-full md:w-64 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-r transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
