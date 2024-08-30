import { createContext, useState, ReactNode, useContext } from 'react';

interface CardDetails {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
}

interface SalonDetails {
  id: number;
  image: string;
  price: string;
  name: string;
  location: string;
  distance: string;
  url: string;
}

interface DateDetails {
  day: number;
  month: string;
  year: number;
}

interface TimeDetails {
  checkIn: string;
  checkOut: string;
}

interface BookingContextType {
  applePay: boolean;
  setApplePay: React.Dispatch<React.SetStateAction<boolean>>;
  dateDetails: DateDetails;
  setDateDetails: React.Dispatch<React.SetStateAction<DateDetails>>;
  salonDetails: SalonDetails;
  setSalonDetails: React.Dispatch<React.SetStateAction<SalonDetails>>;
  cardDetails: CardDetails;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  timeDetails: TimeDetails;
  setTimeDetails: React.Dispatch<React.SetStateAction<TimeDetails>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
  });

  const [salonDetails, setSalonDetails] = useState<SalonDetails>({
    id: 1,
    image: '',
    price: '',
    name: '',
    location: '',
    distance: '',
    url: '',
  });

  const [timeDetails, setTimeDetails] = useState<TimeDetails>({
    checkIn: '',
    checkOut: '',
  });

  const [dateDetails, setDateDetails] = useState<DateDetails>({
    day: 0,
    month: '',
    year: 0,
  });

  const [price, setPrice] = useState<number>(0);
  const [applePay, setApplePay] = useState<boolean>(false);

  return (
    <BookingContext.Provider
      value={{
        applePay,
        setApplePay,
        salonDetails,
        setSalonDetails,
        dateDetails,
        setDateDetails,
        cardDetails,
        setCardDetails,
        timeDetails,
        setTimeDetails,
        price,
        setPrice,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
