
import React, { useState } from 'react';
import Accordion from './ui/Accordion';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-gray-100 py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
