'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type SpaceCardProps = {
  key: number;
  image: string;
  price: string;
  name: string;
  location: string;
  distance: string;
  full?: boolean;
};

export default function SpaceCard({
  key,
  image,
  price,
  name,
  location,
  distance,
}: SpaceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <li key={key} className="relative list-none">
      <Image
        src={image}
        alt={name}
        width={183}
        height={140}
        className="mb-2 min-h-[140px] w-full rounded-lg"
      />
      <button
        className="absolute right-2 top-4 w-[34px] rounded-full bg-bgOnCard p-2"
        type="button"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <svg width={18} height={18} fill="white">
            <use href={'/sprite-app.svg#icon-heart'} />
          </svg>
        ) : (
          <svg width={18} height={18}>
            <use href={'/sprite-app.svg#icon-heart-favorite'} />
          </svg>
        )}
      </button>
      <div className="absolute bottom-16 right-5 rounded-md bg-bgOnCard p-1 text-mainLightColor">
        <p className="text-xs">
          from <span className="text-sm font-semibold">{price}</span>
        </p>
      </div>
      <div>
        <p className="mb-1 text-sm font-semibold text-headerColor">{name}</p>
        <div className="flex">
          <svg width={18} height={18} className="mr-1">
            <use href={'/sprite-app.svg#icon-location'} />
          </svg>
          <p className="mr-3 text-xs text-[#61646B]">{location}</p>
          <p className="text-xs text-[#61646B]">{distance}</p>
        </div>
      </div>
    </li>
  );
}
