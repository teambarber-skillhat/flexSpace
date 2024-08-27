import React, { ChangeEvent, FormEvent, useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import { useBookingContext } from '../context/BookingContext';

export default function AddCardForm({
  onClose,
}: {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setCardDetails } = useBookingContext();

  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isFormIncomplete = Object.values(formData).some(
    (value) => value === '',
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCardDetails(formData);
    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-base font-bold">Card Information</h2>
      <InputField
        label="Cardholder Name"
        type="text"
        id="cardName"
        placeholder="Cardholder Name"
        value={formData.cardName}
        onChange={handleChange}
      />

      <InputField
        label="Card Number"
        type="text"
        id="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
      />

      <div className="mb-4 flex space-x-4">
        <InputField
          label="Expiration Date"
          type="text"
          id="expiry"
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleChange}
        />
        <InputField
          label="CVV"
          type="password"
          id="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
      </div>

      <h2 className="mb-4 text-base font-bold">Billing Address</h2>

      <InputField
        label="Address"
        type="text"
        id="address"
        placeholder="Street Address"
        value={formData.address}
        onChange={handleChange}
      />

      <div className="mb-4 flex space-x-4">
        <InputField
          label="Apt, Suite, etc."
          type="text"
          id="apt"
          placeholder="Apt, Suite, etc."
          value={formData.apt}
          onChange={handleChange}
        />
        <InputField
          label="City"
          type="text"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <InputField
          label="State"
          type="text"
          id="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <InputField
          label="Zip Code"
          type="text"
          id="zip"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6">
        <Button full={true} primary={true} disabled={isFormIncomplete}>
          Add Card
        </Button>
      </div>
    </form>
  );
}
