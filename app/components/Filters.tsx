'use client';
import clsx from 'clsx';
import FilterAccordion from './FilterAccordion';
import React, { useState } from 'react';

const distance = ['Auto', '0.5', '2', '10', '25', '50'];
const amenities = [
  { id: 'wifi', label: 'WIFI' },
  { id: 'onsite-bathroom', label: 'Onsite Bathroom' },
  { id: 'parking-lot', label: 'Parking Lot' },
  { id: 'ring-light', label: 'Ring Light' },
  { id: 'shampoo-bowl', label: 'Shampoo Bowl' },
];

const workspace = [
  { id: 'salon', label: 'Salon' },
  { id: 'barber-shop', label: 'Barber Shop' },
  { id: 'nail-salon', label: 'Nail Salon' },
  { id: 'makeup-studio', label: 'Makeup Studio' },
  { id: 'esthetics-studio', label: 'Esthetics Studio' },
  { id: 'daily', label: 'Daily' },
];

const speciality = [
  { id: 'barber', label: 'Barber' },
  { id: 'hairstylist', label: 'Hairstylist' },
  { id: 'makeup-artist', label: 'Makeup Artist' },
  { id: 'braider', label: 'Braider' },
  { id: 'nail-tech', label: 'Nail Tech' },
  { id: 'locs-stylist', label: 'Locs Stylist' },
];

const rentalType = [
  { id: 'chair-rental', label: 'Chair Rental' },
  { id: 'dedicated-studio', label: 'Dedicated Studio' },
  { id: 'shared-space', label: 'Shared Space' },
  { id: 'pop-up-space', label: 'Pop-Up Space' },
];

export default function Filters() {
  const [price, setPrice] = useState('');
  const [activeIdx, setIdx] = useState(0);
  const [range, setRange] = useState('');
  return (
    <>
      <FilterAccordion title="Sort By">
        <div className="flex flex-col items-start gap-4">
          <button
            className={price === 'lowest' ? 'text-accentColor' : ''}
            onClick={() => setPrice('lowest')}
          >
            Lowest price
          </button>
          <button
            className={price === 'highest' ? 'text-accentColor' : ''}
            onClick={() => setPrice('highest')}
          >
            Highest price
          </button>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Distance (miles)">
        <div className="flex justify-center rounded-lg bg-[#F2F2F2] p-1">
          {distance.map((item, idx) => {
            return (
              <button
                key={item}
                className={clsx(
                  activeIdx === idx
                    ? 'rounded bg-bgOnCard text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'w-16 px-4 py-1',
                )}
                onClick={() => setIdx(idx)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </FilterAccordion>
      <FilterAccordion title="Price Range">
        <div className="p-6">
          <label htmlFor="range"></label>
          <input
            type="range"
            id="range"
            name="range"
            min="0"
            max="900"
            step={10}
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="h-2 w-full rounded-lg bg-mainDarkColor"
            style={{
              backgroundSize: `${((Number(range) - 0) * 100) / (100 - 0)}% 100%`,
            }}
          />
          <div className="text-gray-600 mt-2 flex justify-between text-sm font-medium">
            <span>$0</span>
            <span>${range}</span>
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Booking Model">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="hourly"
            className="flex justify-between text-textColor"
          >
            Hourly
            <input type="checkbox" id="hourly" className="w-6" />
          </label>
          <label
            htmlFor="daily"
            className="flex justify-between text-textColor"
          >
            Daily
            <input type="checkbox" id="daily" className="w-6" />
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Amenities">
        <div className="flex flex-col gap-4">
          {amenities.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex justify-between text-textColor"
            >
              {option.label}
              <input type="checkbox" id={option.id} className="w-6" />
            </label>
          ))}
        </div>
      </FilterAccordion>
      <FilterAccordion title="Workspace Type">
        <div className="flex flex-col gap-4">
          {workspace.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex justify-between text-textColor"
            >
              {option.label}
              <input type="checkbox" id={option.id} className="w-6" />
            </label>
          ))}
        </div>
      </FilterAccordion>
      <FilterAccordion title="Speciality">
        <div className="flex flex-col gap-4">
          {speciality.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex justify-between text-textColor"
            >
              {option.label}
              <input type="checkbox" id={option.id} className="w-6" />
            </label>
          ))}
        </div>
      </FilterAccordion>
      <FilterAccordion title="Rental Type">
        <div className="flex flex-col gap-4">
          {rentalType.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex justify-between text-textColor"
            >
              {option.label}
              <input type="checkbox" id={option.id} className="w-6" />
            </label>
          ))}
        </div>
      </FilterAccordion>
    </>
  );
}
