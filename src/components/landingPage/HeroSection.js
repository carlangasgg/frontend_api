// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-blue-500 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold">Your Project Name</h1>
        <p className="mt-4 text-lg">A brief description of your project.</p>
        <a href="#signup" className="mt-6 bg-white text-blue-500 px-8 py-3 rounded-full inline-block">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
