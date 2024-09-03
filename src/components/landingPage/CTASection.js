// src/components/CTASection.js
import React from 'react';

const CTASection = () => {
  return (
    <section className="cta bg-gray-800 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <a href="#signup" className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full inline-block">
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
