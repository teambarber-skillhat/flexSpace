import Card from './Card';

const list = [
  {
    svg: '/sprite.svg#icon-wallet-add',
    svgColor: 'bg-iconBgPrimary',
    bgColor: 'bg-cardBgOne',
    titleColor: 'text-cardOneTitle',
    textColor: 'text-cardOneText',
    title: 'Earn Extra Income',
    text: 'Generate additional revenue by renting out your space.',
  },
  {
    svg: '/sprite.svg#icon-calendar',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgTwo',
    titleColor: 'text-titleColor',
    textColor: 'text-cardTwoText',
    title: 'Flexible Scheduling',
    text: 'Control your availability and set your own hours.',
  },
  {
    svg: '/sprite.svg#icon-messages',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgThree',
    titleColor: 'text-titleColor',
    textColor: 'text-textColor',
    title: 'Streamlined Communication',
    text: 'Efficiently manage bookings and communicate with clients.',
  },
  {
    svg: '/sprite.svg#icon-user',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgFour',
    titleColor: 'text-titleColor',
    textColor: 'text-textColor',
    title: ' Find Qualified Stylists',
    text: 'Easily discover and connect with talented professionals.',
  },
];

export default function HostList() {
  return (
    <ul className="lg:grid lg:grid-cols-2 lg:gap-4">
      {list.map((item) => {
        return <Card key={item.title} {...item} />;
      })}
    </ul>
  );
}
