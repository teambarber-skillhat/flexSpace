import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-titleColor p-6">
      <div className="mb-4 w-[230px]">
        <h3 className="mb-2 text-sm font-bold text-mainLightColor">
          Unlock Exclusive Benefits with FlexSpace Premium
        </h3>
        <p className="text-xs text-textColor">
          Enjoy <span className="text-accentColor">5%</span> off all bookings
          and more with our premium membership.
        </p>
      </div>
      <Image
        src="/discount.svg"
        height={180}
        alt="discount-banner"
        width={180}
        className="absolute left-[242px] top-0"
      />
      <Button primary={true}>Join FlexSpace + </Button>
    </div>
  );
}
