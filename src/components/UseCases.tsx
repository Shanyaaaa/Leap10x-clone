import React, { useState } from 'react';

const useCases = {
  Manufacturing: [
    'Safety & Compliance',
    'SOP training',
    'Job training',
    'Tool & equipment training',
  ],
  'Transportation & Logistics': [
    'Onboarding',
    'Safety training',
    'SOP training',
    'Retention',
  ],
  Retail: [
    'Process Training',
    'Product Training',
    'Customer Support',
    'Behavioral Training',
    'Channel Partner Training',
  ],
};

const tabs = Object.keys(useCases);

const UseCases = () => {
  const [active, setActive] = useState(tabs[0]);
  return (
    <section className="bg-white py-16 px-4">
      <h3 className="text-xl font-bold text-center text-primary mb-6">Use Cases<br /><span className="text-base font-medium text-grayish">Across All Industries</span></h3>
      <div className="flex gap-2 justify-center mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t bg-light font-semibold border-b-2 transition ${tab===active ? 'border-secondary text-secondary' : 'border-transparent text-grayish'}`}
            onClick={() => setActive(tab)}
          >{tab}</button>
        ))}
      </div>
      <div className="bg-light rounded-b-xl p-6 max-w-xl mx-auto shadow">
        <ul className="list-disc list-inside text-left">
          {useCases[active].map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default UseCases;
