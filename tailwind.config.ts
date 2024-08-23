import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      jockeyOne: ['Jockey One', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      bgColor: '#f7f7f7',
      bgColorHero: '#FDF0E3',
      bgOnCard: 'rgba(28, 34, 43, 0.70)',
      accentColor: '#D26500',
      iconPrimary: '#FC8E28',
      iconBgPrimary: '#FFF6ED',
      iconBgSecondary: '#F5ECFE',
      iconSecondary: '#820BF4',
      buttonBg: '#1A1D21',
      textColor: '#727C8D',
      textColorDark: '#3D434C',
      titleColor: '#1C222B',
      titleColorSecondary: '#D26500',
      mainLightColor: '#fff',
      mainDarkColor: '#000',
      transparent: 'transparent',
      cardBgOne: '#F0926C',
      cardBgTwo: '#F7F7F7',
      cardBgThree: '#FFF6ED',
      cardBgFour: '#F2F5FF',
      cardOneTitle: '#F9FAFB',
      cardOneText: '#F4F5F6',
      cardTwoText: '#4F5662',
      container: '#FC8415',
      link: '#DEE1E5',
    },
    screens: {
      sm: '430px',
      xs: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
  plugins: [],
};
export default config;
