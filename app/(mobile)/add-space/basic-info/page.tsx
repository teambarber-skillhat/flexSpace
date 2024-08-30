'use client';
import React, { ChangeEvent } from 'react';
import InputField from '@/app/components/InputField';
import TextArea from '@/app/components/TextArea';
import FileUpload from '@/app/components/FileUpload';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';

export default function BasicInfo() {
  const { currentStep, basicInfo, setBasicInfo } = useAddSpaceContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBasicInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBasicInfo((prevState) => ({
          ...prevState,
          [id]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setBasicInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <h2 className="mb-4 text-base font-bold">Salon Name</h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Enter the name of your salon or shop
          </p>

          <InputField
            label="Salon Name"
            type="text"
            id="name"
            placeholder="Salon Name"
            value={basicInfo?.name}
            onChange={handleChange}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className="mb-4 text-base font-bold">
            Where is your salon located?
          </h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Tell us where your salon is based.
          </p>
          <InputField
            label="Salon Address"
            type="text"
            id="address"
            placeholder="Salon Address"
            value={basicInfo.address}
            onChange={handleChange}
          />

          <InputField
            label="Apt, Suite (optional)"
            type="text"
            id="apt"
            placeholder="Apt, Suite, etc."
            value={basicInfo.apt}
            onChange={handleChange}
          />

          <InputField
            label="City"
            type="text"
            id="city"
            placeholder="City"
            value={basicInfo.city}
            onChange={handleChange}
          />

          <div className="mb-4 flex space-x-4">
            <InputField
              label="State"
              type="text"
              id="state"
              placeholder="State"
              value={basicInfo.state}
              onChange={handleChange}
            />
            <InputField
              label="Zip Code"
              type="text"
              id="zip"
              placeholder="Zip Code"
              value={basicInfo.zip}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2 className="mb-4 text-base font-bold">Tell us about your salon</h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Tell us what makes your salon unique.
          </p>

          <TextArea
            id="about"
            placeholder="Enter a description..."
            value={basicInfo.about}
            onChange={handleTextareaChange}
          />

          <div>
            <h2 className="mb-4 text-base font-bold">Business License</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Upload a copy of your business license for verification purposes.
            </p>
            <InputField
              label="Business License #"
              type="text"
              id="businessLicense"
              placeholder="Business License"
              value={basicInfo.businessLicense}
              onChange={handleChange}
            />

            <FileUpload
              id="licenseImg"
              label="Add Business License Image"
              accept=".jpg,.jpeg,.png,.pdf"
              onFileChange={handleImageUpload}
            />
          </div>
        </div>
      )}
    </div>
  );
}
