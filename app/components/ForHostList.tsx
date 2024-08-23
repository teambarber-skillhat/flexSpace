import ForCard from './ForCard';

const list = [
  {
    svg: '/sprite.svg#icon-building',
    title: 'List Your Space',
    text: 'Easily create a listing for your salon or shop.',
    isHost: true,
  },
  {
    svg: '/sprite.svg#icon-calendar',
    title: 'Set Your Availability',
    text: 'Choose your preferred rental hours and days.',
    isHost: true,
  },
  {
    svg: '/sprite.svg#icon-dollar-circle',
    title: 'Set Your Rates',
    text: 'Choose your pricing model (hourly, daily, or fixed) and set your rates.',
    isHost: true,
  },
  {
    svg: '/sprite.svg#icon-calendar-tick',
    title: 'Manage Your Bookings',
    text: 'Efficiently handle booking requests and confirmations.',
    isHost: true,
  },
  {
    svg: '/sprite.svg#icon-trend-up',
    title: 'Earn and Grow',
    text: 'Track your earnings and expand your business.',
    isHost: true,
  },
];

export default function ForHostList() {
  return (
    <ul className="gap-6 lg:flex-1">
      {list.map((item) => {
        return <ForCard key={item.title} {...item} />;
      })}
    </ul>
  );
}
