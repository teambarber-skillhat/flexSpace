'use client';
import clsx from 'clsx';
import FooterNavigation from '../components/FooterNavigation';
import HeaderApp from '../components/HeaderApp';
import { useState } from 'react';
import MobileModal from '../components/MobileModal';
import Filters from '../components/Filters';

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
            <Filters />
          </MobileModal>
        )}
      </main>
      <FooterNavigation />
    </div>
  );
}
