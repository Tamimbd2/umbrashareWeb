import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- Block 1: The Insight --- */}
        <div className="bg-brand-yellow p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-purple mb-4 leading-tight">
                IF BIKES CAN BE SHARED, WHY NOT UMBRELLAS?
              </h2>
              <p className="text-lg text-brand-purple opacity-90">
                One of our founders, Mahabub Tamim, conceived this insight as he was exiting a subway station, observing the convenience and success of bike-sharing systems.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img 
                  src="https://i.postimg.cc/bwN4wWqy/Gemini-Generated-Image-1pu1sc1pu1sc1pu1.png" 
                  alt="People with UmbraShare umbrellas in a city" 
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-brand-teal transform translate-x-4 translate-y-4 -z-0"></div>
            </div>
          </div>
        </div>

        {/* --- Middle Text --- */}
        <div className="my-16 lg:my-20 max-w-xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            In todays rapidly evolving sharing economy, innovation is essential. This inspired Freddy, another visionary founder, to pioneer a unique concept by combining Out Of Home (OOH) media with shared umbrellas, creating a new urban engagement platform.
          </p>
        </div>

        {/* --- Block 2: Innovation --- */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="bg-brand-purple p-8 md:p-12 text-white">
            <h3 className="text-3xl font-black text-brand-yellow mb-4">
              WE'RE INNOVATIVE!
            </h3>
            <p className="text-gray-200 leading-relaxed">
              UmbraShare proudly stands as the world’s first umbrella-sharing company. Our mission is to redefine the value of Out Of Home advertising by seamlessly blending it with sustainable urban mobility solutions. Through this innovation, we enhance the advertising experience for brands while promoting environmental responsibility and convenience for city residents.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
                <img 
                    src="https://i.postimg.cc/d306RP3n/Gemini-Generated-Image-tmg78ftmg78ftmg7.png"
                    alt="Woman using an UmbraShare station"
                    className="w-full h-96 object-cover shadow-lg"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-brand-teal transform translate-x-4 -translate-y-4 -z-0"></div>
          </div>
        </div>

        {/* --- Founder's Message --- */}
        <div className="mt-20 lg:mt-28 pt-16 border-t">
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1">
                    <img 
                        src="https://i.postimg.cc/k5Y6Ls85/150-2.png" 
                        alt="Mahabub Tamim, Founder of UmbraShare"
                        className="rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
                    />
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold text-brand-dark mb-6">A Message from Our Founder</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed italic">
                        <p>
                        "As the founder of UmbraShare, I am proud to lead a vision that transforms a simple everyday item into a powerful tool for convenience, sustainability, and innovation. Our journey began with a single question: If bikes can be shared, why not umbrellas? From that moment, we set out to create a service that not only protects people from the elements but also supports smarter urban living."
                        </p>
                        <p>
                        "UmbraShare is more than just an umbrella-sharing service — it is a symbol of collaboration, community, and forward-thinking. By integrating Out Of Home (OOH) media with shared umbrellas, we are opening new doors for advertisers, enhancing city mobility, and contributing to a greener planet."
                        </p>
                        <p>
                        "This is only the beginning. Together, we can shape a future where innovation meets everyday life, and sustainability becomes second nature."
                        </p>
                    </div>
                    <div className="mt-6 text-right">
                        <p className="font-bold text-brand-purple">— Mahabub Tamim</p>
                        <p className="text-sm text-gray-600">Founder & Visionary, UmbraShare</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;