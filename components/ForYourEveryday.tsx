
import React from 'react';
import { COMPANY_LOGOS } from '../constants';

const Companies: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800 tracking-wider">
          COMPANIES THAT TRUST US
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {COMPANY_LOGOS.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-10">
              <span className="text-lg font-bold text-gray-400 grayscale hover:grayscale-0 transition-all cursor-pointer">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
