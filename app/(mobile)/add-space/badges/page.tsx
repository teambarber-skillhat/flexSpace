'use client';
import React, { ChangeEvent, useEffect } from 'react';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import CheckboxInput from '@/app/components/CheckboxInput';
import { useRouter } from 'next/navigation';

export default function Badges() {
  const router = useRouter();
  const { currentStep, badges, setBadges, basicInfo } = useAddSpaceContext();

  useEffect(() => {
    if (!basicInfo.name || !basicInfo.address) {
      router.push('/add-space/basic-info');
    }
  }, [basicInfo.address, basicInfo.name, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBadges((prevState) => {
      if (prevState.includes(e.target.id)) {
        return prevState.filter((badge) => badge !== e.target.id);
      } else {
        return [...prevState, e.target.id];
      }
    });
  };

  return (
    <div>
      {currentStep === 11 && (
        <div className="mb-6">
          <h2 className="mb-4 text-base font-bold">Badges</h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Showcase key features with badges: &apos;Instant Book&apos; for
            automatic approvals and &apos;Discount&apos; to attract renters with
            special offers.
          </p>

          <div className="flex flex-col gap-4">
            <CheckboxInput
              label="Instant Book"
              id="instant-book"
              checked={badges.includes('instant-book')}
              onInputChange={handleChange}
            />
            <CheckboxInput
              label="Discount"
              id="discount"
              checked={badges.includes('discount')}
              onInputChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
