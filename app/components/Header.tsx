import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="xl:px-[120px] block items-center justify-between bg-bgColorHero px-6 py-4 xs:flex lg:px-12">
      <div>
        <Image
          src="/logo-header.svg"
          height={122}
          alt="booking-and-master"
          width={86}
        />
      </div>
      <nav className="mt-4 flex justify-end xs:mt-0">
        <ul className="flex gap-2 text-base lg:gap-6">
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
