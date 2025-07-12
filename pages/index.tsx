// pages/index.tsx
import React, { useState } from 'react';
import { filters, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/common/Pill'
import Card from '@/components/common/Card';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const Listings= activeFilter ? 
  PROPERTYLISTINGSAMPLE.filter(p => p.category.includes(activeFilter)) :PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Filter by</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Pill
              key={f}
              label={f}
              active={activeFilter === f}
              onClick={setActiveFilter}
            />
          ))}
        </div>
      </section>
       {/* Listings Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Listings.map(property => (
            <Card key={property.name} {...property} />
          ))}
        </div>
      </section>


      
    </div>
  );
};

export default Home;
