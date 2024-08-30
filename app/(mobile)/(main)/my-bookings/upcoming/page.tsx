'use client';
import Image from 'next/image';
import { salons } from '@/app/api/mockdata';
import Button from '@/app/components/Button';

export default function Upcoming() {
  return (
    <>
      {salons.map((salon) => {
        return (
          <div key={salon.id} className="mb-6 rounded-lg bg-gray p-4">
            <div className="mb-3 flex gap-4">
              <Image
                width={100}
                height={96}
                alt="salon"
                src={salon.image}
                className="min-h-[96px] min-w-[100px] rounded"
              />
              <div>
                <p className="mb-1 text-sm font-semibold text-headerColor">
                  {salon.name}
                </p>
                <div className="mb-1 flex">
                  <svg width={18} height={18} className="mr-1">
                    <use href={'/sprite-app.svg#icon-location'} />
                  </svg>
                  <p className="mr-3 text-xs text-[#61646B]">
                    {' '}
                    {salon.location}
                  </p>
                  <p className="text-xs text-[#61646B]"> {salon.distance}</p>
                </div>
                <p className="text-xs text-accentColor">
                  from <span className="font-semibold">{salon.price}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button full={true} cancel={true}>
                Cancel
              </Button>
              <Button full={true} empty={true}>
                Check In
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
