'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function FooterNavigation() {
  const pathname = usePathname();

  const links = [
    {
      href: '/explore',
      icon: 'explore',
      activeIcon: 'explore-active',
      label: 'Explore',
    },
    {
      href: '/favorites',
      icon: 'fav',
      activeIcon: 'fav-active',
      label: 'Favourites',
    },
    {
      href: '/my-bookings',
      icon: 'book',
      activeIcon: 'book-active',
      label: 'My bookings',
    },
    {
      href: '/messages',
      icon: 'message',
      activeIcon: 'message-active',
      label: 'Messages',
    },
    {
      href: '/profile',
      icon: 'profile',
      activeIcon: 'profile-active',
      label: 'Profile',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#f2f2f2] p-6">
      <ul className="flex items-center justify-between py-2">
        {links.map(({ href, icon, activeIcon, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                pathname === href
                  ? 'flex gap-2 rounded-[300px] bg-mainLightColor px-3 py-2'
                  : ''
              }
            >
              <Image
                src={`/nav/${pathname === href ? activeIcon : icon}.svg`}
                width={24}
                height={24}
                alt={label}
              />
              {pathname === href && (
                <p className="font-bold text-accentColor">{label}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
