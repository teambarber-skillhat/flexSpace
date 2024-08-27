import React from 'react';
import SpaceCard from './SpaceCard';
import Button from './Button';
import { salons } from '../api/mockdata';

export default function SpacesNearYou() {
  return (
    <div className="p-6">
      <h3 className="mb-4 text-base font-bold text-headerColor">
        Available Spaces Near You
      </h3>
      <ul className="mb-4 grid grid-cols-2 gap-4">
        {salons.map((salon) => (
          <SpaceCard
            key={salon.id}
            image={salon.image}
            price={salon.price}
            name={salon.name}
            location={salon.location}
            distance={salon.distance}
            url={salon.url}
          />
        ))}
      </ul>
      <Button full={true}>View all spaces</Button>
    </div>
  );
}
