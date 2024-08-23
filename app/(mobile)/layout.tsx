'use client';
import clsx from 'clsx';
import FooterNavigation from '../components/FooterNavigation';
import HeaderApp from '../components/HeaderApp';
import { useState } from 'react';
import MobileModal from '../components/MobileModal';
import FilterAccordion from '../components/FilterAccordion';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="pb-[104px]">
      <HeaderApp
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <main className={clsx(isFocused ? 'pt-[96px]' : 'pt-[154px]')}>
        {children}
        {isFocused && (
          <div
            className="fixed inset-0 z-10 flex items-center justify-center bg-bgColor bg-opacity-50"
            onClick={() => setIsFocused(false)}
          ></div>
        )}
        {showFilters && (
          <MobileModal isOpen={showFilters} onClose={setShowFilters}>
            <FilterAccordion title="Sort By">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Distance (miles)">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Price Range">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Booking Model">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Amenities">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Workspace Type">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Speciality">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
            <FilterAccordion title="Rental Type">
              <p className="mb-4">Lowest price</p>
              <p>Highest price</p>
            </FilterAccordion>
          </MobileModal>
        )}
      </main>
      <FooterNavigation />
    </div>
  );
}
