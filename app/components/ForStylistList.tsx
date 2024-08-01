import ForCard from './ForCard';

const list = [
  {
    svg: '/sprite.svg#icon-search',
    title: 'Simple Search',
    text: 'Find your perfect workspace based on location, amenities, and availability.',
  },
  {
    svg: '/sprite.svg#icon-calendar-violette',
    title: 'Instant Booking',
    text: 'Book your desired space with just a few clicks.',
  },
  {
    svg: '/sprite.svg#icon-shuffle',
    title: 'Flexible Options',
    text: 'Choose from hourly, daily, or weekly rentals.',
  },
  {
    svg: '/sprite.svg#icon-card-tick',
    title: 'Easy Payments',
    text: 'Secure payment processing for hassle-free transactions.',
  },
  {
    svg: '/sprite.svg#icon-location-tick-violette',
    title: 'Easy Check-in',
    text: 'Smoothly access your workspace with provided details.',
  },
];

export default function ForStylistList() {
  return (
    <ul className="gap-6">
      {list.map((item) => {
        return <ForCard key={item.title} {...item} />;
      })}
    </ul>
  );
}
