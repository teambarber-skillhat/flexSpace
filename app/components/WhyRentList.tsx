import Card from './Card';

const list = [
  {
    svg: '/sprite.svg#icon-wallet-check',
    svgColor: 'bg-iconBgPrimary',
    bgColor: 'bg-cardBgOne',
    titleColor: 'text-cardOneTitle',
    textColor: 'text-cardOneText',
    title: 'Cost-Effective',
    text: 'Avoid the overhead of a traditional workspace.',
  },
  {
    svg: '/sprite.svg#icon-calendar',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgTwo',
    titleColor: 'text-titleColor',
    textColor: 'text-cardTwoText',
    title: 'Flexibility and Convenience',
    text: 'Choose from a variety of workspaces to suit your needs.',
  },
  {
    svg: '/sprite.svg#icon-messages',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgThree',
    titleColor: 'text-titleColor',
    textColor: 'text-textColor',
    title: 'Streamlined Communication',
    text: 'Connect with salon owners and manage bookings effortlessly.',
  },
  {
    svg: '/sprite.svg#icon-location-tick',
    svgColor: 'bg-iconBgSecondary',
    bgColor: 'bg-cardBgFour',
    titleColor: 'text-titleColor',
    textColor: 'text-textColor',
    title: 'Professional Environment',
    text: 'Access to modern, well-equipped workspaces.',
  },
];

export default function RentList() {
  return (
    <ul className="lg:grid lg:grid-cols-2 lg:gap-4">
      {list.map((item) => {
        return <Card key={item.title} {...item} />;
      })}
    </ul>
  );
}
