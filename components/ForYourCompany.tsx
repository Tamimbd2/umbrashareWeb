
import React from 'react';

const ForYourCompany: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">For your company</h2>
        <p className="text-lg text-brand-gray-300 max-w-3xl mx-auto mb-8">
          Offer an innovative and sustainable benefit to your employees and clients, enhancing their experience with your brand.
        </p>
        <button className="bg-brand-green text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          Explore Corporate Solutions
        </button>
      </div>
    </section>
  );
};

export default ForYourCompany;
