import { getImageProps } from 'next/image';

export default function HeroImage() {
  const common = { alt: 'Salon, chairs and mirrors', sizes: '100vw' };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    width: 1200,
    height: 500,
    src: '/hero-desktop.jpg',
  });

  const {
    props: { srcSet: tabletSrcSet },
  } = getImageProps({
    ...common,
    width: 928,
    height: 500,
    src: '/hero-tablet.jpg',
  });

  const {
    props: { srcSet: mobileSrcSet, ...restProps },
  } = getImageProps({
    ...common,
    width: 382,
    height: 500,
    src: '/hero-mobile.jpg',
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktopSrcSet} />
      <source media="(min-width: 500px)" srcSet={tabletSrcSet} />
      <source media="(max-width: 500px)" srcSet={mobileSrcSet} />
      <img
        {...restProps}
        style={{ width: '100%', height: 'auto' }}
        alt="Salon, chairs and mirrors"
      />
    </picture>
  );
}
