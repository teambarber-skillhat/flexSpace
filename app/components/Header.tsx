import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="xs:flex block items-center justify-between rounded-b-3xl bg-bgColorHero px-6 py-4 md:px-12 lg:px-[120px]">
      <div>
        <Image
          src="/logo-header.svg"
          height={122}
          alt="booking-and-master"
          width={86}
        />
      </div>
      <nav className="xs:mt-0 mt-4 flex justify-end">
        <ul className="flex gap-2 text-base md:gap-6">
          <li>
            <Link
              href="#host"
              className="p-2 font-medium leading-6 tracking-[-0.3px] text-titleColor transition-all hover:text-accentColor hover:underline"
            >
              For Host
            </Link>
          </li>
          <li>
            <Link
              href="#rent"
              className="p-2 font-medium leading-6 tracking-[-0.3px] text-titleColor transition-all hover:text-accentColor hover:underline"
            >
              For Pros
            </Link>
          </li>
          <li>
            <Link
              href="#for-host"
              className="p-2 font-medium leading-6 tracking-[-0.3px] text-titleColor transition-all hover:text-accentColor hover:underline"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="p-2 font-medium leading-6 tracking-[-0.3px] text-titleColor transition-all hover:text-accentColor hover:underline"
            >
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
