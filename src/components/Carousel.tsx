import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [additionalOffset, setAdditionalOffset] = useState(250);
  const slides = [
    "bg-ernagel-map",
    "bg-ernagel-map",
    "bg-ernagel-map",
    "bg-ernagel-map",
    "bg-ernagel-map",
  ];

  const updateAdditionalOffset = () => {
    if (window.innerWidth >= 1024) {
      setAdditionalOffset(0);
    } else {
      setAdditionalOffset(250);
    }
  };

  useEffect(() => {
    updateAdditionalOffset();
    window.addEventListener("resize", updateAdditionalOffset);
    return () => window.removeEventListener("resize", updateAdditionalOffset);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[500px] lg:w-[1000px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${slides.length * 1000}px`,
          transform: `translateX(-${currentIndex * 1000 + additionalOffset}px)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide} bg-center bg-contain lg:bg-cover bg-no-repeat h-[500px] w-[1000px]`}
          ></div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white bg-opacity-50"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white bg-opacity-50"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
