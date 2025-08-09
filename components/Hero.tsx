import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-purple text-white pt-32 pb-20 lg:pt-48 lg:pb-40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              SHARED UMBRELLAS FOR <span className="underline-yellow">SMARTER</span> CITIES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto lg:mx-0">
              Experience the convenience of urban mobility even on rainy days. UmbraShare is now available in major cities such as Dhaka, Chattogram, and expanding rapidly across Bangladesh and beyond, bringing smart, shared umbrella solutions to modern city life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              
              <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
                  alt="Apple Store Icon"
                  className="w-8 h-8 mr-2"
                />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-xl leading-tight -mt-1">App Store</p>
                </div>
              </button>
              
              <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000"
                  alt="Google Play Icon"
                  className="w-7 h-7 mr-2"
                />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-xl leading-tight -mt-1">Google Play</p>
                </div>
              </button>
              
            </div>
          </div>
          <div className="relative h-96 lg:h-auto lg:aspect-[1/1] -mr-8 hidden lg:block">
<img
  src="https://i.postimg.cc/NMSWCKxn/Gemini-Generated-Image-x0wsdnx0wsdnx0ws.png"
  alt="UmbraShare shared umbrella branding"
  className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
