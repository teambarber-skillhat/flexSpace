import React from 'react';
import SpaceCard from '@/app/components/SpaceCard';
import Link from 'next/link';
import { salons } from '../../../api/mockdata';

export default function SearchPage() {
  return (
    <div className="p-6">
      <ul className="mb-4 grid grid-cols-1 gap-4">
        {salons.map((salon) => (
          <Link href={`/booking/${salon.url}`} key={salon.id}>
            <SpaceCard
              key={salon.id}
              full={true}
              image={salon.image}
              price={salon.price}
              name={salon.name}
              location={salon.location}
              distance={salon.distance}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}
