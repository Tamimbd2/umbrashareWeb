
import React, { useState, useEffect, useRef } from 'react';
import { SOLUTIONS_SLIDES } from '../constants';

const Solutions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === SOLUTIONS_SLIDES.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="solutions" className="bg-brand-beige py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 text-gray-800 tracking-wider">
          OUR SOLUTIONS
        </h2>
        <div className="relative h-[60vh] max-h-[500px] w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl">
          <div
            className="whitespace-nowrap transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {SOLUTIONS_SLIDES.map((slide, index) => (
              <div
                key={index}
                className="inline-block w-full h-full align-top"
              >
                <div className="w-full h-full relative">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 md:p-12 text-white">
                    <h3 className="text-2xl md:text-4xl font-black mb-3">{slide.title}</h3>
                    <p className="text-base md:text-lg max-w-2xl mb-6">{slide.description}</p>
                     <a href={slide.href} className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-3 px-6 rounded-md transition-all duration-300 self-start">
                          Learn More
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {SOLUTIONS_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
