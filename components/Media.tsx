import React from 'react';

const InputField: React.FC<{label: string, type?: string, placeholder?: string}> = ({label, type = "text", placeholder}) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type={type} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple transition-shadow shadow-sm" />
    </div>
);

const SelectField: React.FC<{label: string, options: string[]}> = ({label, options}) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple bg-white transition-shadow shadow-sm">
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-bg-light py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          Get in touch to learn more about our possibilities.
        </h2>
        <form className="mt-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name*" placeholder="Your full name"/>
                <InputField label="Phone number*" placeholder="(00) 00000-0000"/>
                <InputField label="Company*" placeholder="Your company's name"/>
                <SelectField label="Position*" options={['Select Position', 'Manager', 'Director', 'Analyst', 'Other']} />
                <InputField label="Corporate e-mail*" type="email" placeholder="you@company.com"/>
                <SelectField label="Number of Employees*" options={['Select range', '1-50', '51-200', '201-1000', '1000+']} />
                <div className="md:col-span-2">
                    <SelectField label="Where did you hear about UmbraShare?*" options={['Select option', 'Social Media', 'News', 'Friend', 'Event', 'Google']} />
                </div>
                 <div className="md:col-span-2">
                    <SelectField label="Reason for the Quote*" options={['Select reason', 'Corporate Benefit', 'Event Sponsorship', 'Partnership']} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple transition-shadow shadow-sm"></textarea>
                </div>
                 <div className="md:col-span-2 flex items-start">
                    <input id="agree" type="checkbox" className="h-4 w-4 text-brand-purple-light border-gray-300 rounded focus:ring-brand-purple-light mt-1" />
                    <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
                        I agree to the processing of my personal data for the purpose of receiving advertising materials and content related to UmbraShare's products and services.
                    </label>
                </div>
                <div className="md:col-span-2 text-center mt-4">
                    <button type="submit" className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-3 px-16 rounded-md transition-all duration-300 transform hover:scale-105">
                        SEND
                    </button>
                </div>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;