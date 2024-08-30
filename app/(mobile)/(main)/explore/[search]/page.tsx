import React from 'react';
import SpaceCard from '@/app/components/SpaceCard';
import { salons } from '@/app/api/mockdata';

export default function SearchPage() {
  return (
    <div className="p-6">
      <ul className="mb-4 grid grid-cols-1 gap-4">
        {salons.map((salon) => (
          <SpaceCard
            key={salon.id}
            full={true}
            image={salon.image}
            price={salon.price}
            name={salon.name}
            location={salon.location}
            distance={salon.distance}
            url={salon.url}
          />
        ))}
      </ul>
    </div>
  );
}
