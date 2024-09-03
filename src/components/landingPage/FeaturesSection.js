// src/components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="mt-2">Description of feature 1.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="mt-2">Description of feature 2.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
