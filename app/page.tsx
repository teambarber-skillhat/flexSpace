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
import Button from './components/Button';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-bgColorHero px-6 py-4">
        <p className="font-jockeyOne text-2xl text-buttonBg">FlexSpace</p>
      </header>
      <Section bgColor="bgColorHero">
        <h1 className="text-center text-3xl font-bold tracking-[-1.75px] text-mainDarkColor">
          Your Go-To Platform for{' '}
          <span className="text-accentColor">Flexible</span> Salon Space Leasing
        </h1>
        <p className="p-4 text-center text-base font-medium leading-8 tracking-[-0.3px] text-textColorDark">
          Salon Owners, Monetize Your Space. Stylists, Find the Perfect Fit.
          Lease with Flexibility and Ease.
        </p>
        <Form />
        <Image
          src="/hero-mobile.jpg"
          height={500}
          alt="salon-chairs-and-mirror"
          width={382}
        />
      </Section>
      <WhySection
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
        />
      </ForSection>
      <ForSection isHost={false} tag="For Stylist" id="for-stylist">
        <ForStylistList />
        <Image
          src="/booking.svg"
          height={400}
          alt="booking-and-master"
          width={382}
        />
      </ForSection>
      <Section>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="rounded-3xl bg-iconBgPrimary px-3 py-1 text-titleColorSecondary">
            FAQs
          </span>
          <h2 className="mb-10 text-center text-2xl font-semibold leading-7 tracking-[-0.3px] text-mainDarkColor">
            We&apos;re happy to answer your questions
          </h2>
        </div>
        <Accordion />
        <div className="rounded-2xl bg-cardBgThree px-4 py-6">
          <h2 className="mb-2 text-lg font-semibold leading-6 tracking-[-0.3px]">
            Still have questions?
          </h2>
          <p className="mb-4 text-sm font-medium leading-5 tracking-[-0.2px] text-cardTwoText">
            Can&apos;t find the answer you&apos;re looking for? Please get in
            touch with our team.
          </p>
          <Button>Get in Touch</Button>
        </div>
      </Section>
      <Section>
        <div className="relative h-[600px] overflow-hidden rounded-2xl bg-container px-4 py-6">
          <h1 className="text-center font-jockeyOne text-3xl font-bold tracking-[-1.75px] text-cardOneText">
            Be the First to Experience FlexSpace!
          </h1>
          <p className="p-4 text-xl font-semibold leading-7 tracking-[-0.3px] text-cardOneText">
            Join Our Waitlist and Unlock Exclusive Early Access
          </p>
          <Form />
          <Image
            src="/stylist-one.png"
            height={284}
            alt="stylist-with-client"
            width={207}
            className="absolute left-[15.73px] top-[353px] max-h-[284px] rotate-[9deg] transform rounded-xl"
          />
          <Image
            src="/stylist-two.png"
            height={131}
            alt="barber-with-client"
            width={133}
            className="absolute left-[251.45px] top-[465.3px] max-h-[131px] rotate-[-7.53deg] transform rounded-lg"
          />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
