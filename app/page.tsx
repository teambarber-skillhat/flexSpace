import Section from './components/Section';
import Form from './components/Form';
import Image from 'next/image';
import HostList from './components/WhyHostList';
import RentList from './components/WhyRentList';
import WhySection from './components/WhySection';
import ForSection from './components/ForSection';
import ForHostList from './components/ForHostList';
import ForStylistList from './components/ForStylistList';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import HeroImage from './components/HeroImage';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" id="home">
      <Header />
      <Section bgColor="bgColorHero">
        <h1 className="text-center text-3xl font-bold tracking-[-1.75px] text-mainDarkColor lg:text-5xl">
          Your Go-To Platform for{' '}
          <span className="text-accentColor">Flexible</span> Salon Space Leasing
        </h1>
        <p className="p-4 text-center text-base font-medium leading-8 tracking-[-0.3px] text-textColorDark lg:p-6">
          Salon Owners, Monetize Your Space. Stylists, Find the Perfect Fit.
          Lease with Flexibility and Ease.
        </p>
        <Form />
        <HeroImage />
      </Section>
      <WhySection
        first={false}
        id="host"
        accentTitle="Host"
        title="on FlexSpace?"
        description="Our platform connects you with professionals looking for flexible and
          convenient workspace solutions. Whether you have an entire salon, a
          single chair, or a room available, Flexspace makes it easy to monetize
          your unused space."
      >
        <HostList />
      </WhySection>
      <WhySection
        first={true}
        id="rent"
        accentTitle="Rent"
        title="with FlexSpace?"
        description="Discover flexible space options, from entire salons to single chairs, available for daily or hourly booking. FlexSpace makes it easy to find and book the perfect spot on your terms."
      >
        <RentList />
      </WhySection>
      <ForSection isHost={true} tag="For Host" id="for-host">
        <ForHostList />
        <Image
          src="/beauty-salon.svg"
          height={400}
          alt="salon-and-master"
          width={382}
          className="lg:order-first lg:flex-1"
        />
      </ForSection>
      <ForSection isHost={false} tag="For Stylist" id="for-stylist">
        <ForStylistList />
        <Image
          src="/booking.svg"
          height={400}
          alt="booking-and-master"
          width={382}
          className="lg:flex-1"
        />
      </ForSection>
      <Section id="faq">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="rounded-3xl bg-iconBgPrimary px-3 py-1 text-titleColorSecondary">
            FAQs
          </span>
          <h2 className="mb-10 text-center text-2xl font-semibold leading-7 tracking-[-0.3px] text-mainDarkColor lg:mb-20 lg:text-[28px]">
            We&apos;re happy to answer your questions
          </h2>
        </div>
        <Accordion />
        <GetInTouch />
      </Section>
      <Section>
        <div className="relative h-[600px] overflow-hidden rounded-2xl bg-container px-4 py-6 md:h-[355px] lg:self-start lg:p-20">
          <h1 className="text-center font-jockeyOne text-3xl font-bold tracking-[-1.75px] text-cardOneText lg:text-start">
            Be the First to Experience FlexSpace!
          </h1>
          <p className="mb-6 mt-2 text-xl font-semibold leading-7 tracking-[-0.3px] text-cardOneText">
            Join Our Waitlist and Unlock Exclusive Early Access
          </p>
          <Form second={true} />
          <Image
            src="/iphone.png"
            height={493}
            alt="stylist-with-client"
            width={228}
            className="absolute left-[65px] top-[280px] xs:left-52 xs:top-[265px] md:left-[470px] md:top-36 lg:left-[650px] lg:top-6 xl:left-[950px]"
          />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
