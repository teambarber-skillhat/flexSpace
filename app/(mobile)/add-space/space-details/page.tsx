'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import TextArea from '@/app/components/TextArea';
import FileUpload from '@/app/components/FileUpload';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import CheckboxInput from '@/app/components/CheckboxInput';
import { SpaceDetails } from '@/app/context/AddSpaceContext';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type RentalType =
  | 'chair'
  | 'dedicated-studio'
  | 'shared-space'
  | 'pop-up-space';

export default function SpaceDetailsPage() {
  const router = useRouter();
  const { currentStep, spaceDetails, setSpaceDetails, basicInfo } =
    useAddSpaceContext();
  const [activeIdx, setActiveIdx] = useState(0);
  const [count, setCount] = useState(spaceDetails?.workstationNumber);

  useEffect(() => {
    if (!basicInfo.name || !basicInfo.address) {
      router.push('/add-space/basic-info');
    }
  }, [basicInfo.address, basicInfo.name, router]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setSpaceDetails((prevState) => ({
      ...prevState,
      workstationNumber: count + 1,
    }));
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setSpaceDetails((prevState) => ({
      ...prevState,
      workstationNumber: count - 1,
    }));
  };

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpaceDetails((prevState) => ({
      ...prevState,
      rentalType: e.target.value as RentalType,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      if (id === 'salonImage') {
        const readerPromises = fileArray.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        });

        Promise.all(readerPromises)
          .then((imageDataArray) => {
            setSpaceDetails((prevState) => ({
              ...prevState,
              salonImages: [...prevState.salonImages, ...imageDataArray],
            }));
          })
          .catch((error) => console.error('Error reading files:', error));
      } else {
        const file = fileArray[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setSpaceDetails((prevState) => ({
            ...prevState,
            [id]: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setSpaceDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCheckboxChange =
    (category: keyof SpaceDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, checked } = event.target;

      setSpaceDetails((prevState) => ({
        ...prevState,
        [category]: checked
          ? [...(prevState[category] as string[]), id]
          : (prevState[category] as string[])?.filter((item) => item !== id),
      }));
    };

  return (
    <div>
      {currentStep === 4 && (
        <>
          <div className="mb-6">
            <h2 className="mb-4 text-base font-bold">Workspace Type</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Choose the Workspace Type(s) That Best Match Your Business
            </p>

            <div className="flex flex-col gap-4">
              <CheckboxInput
                label="Salon"
                id="Salon"
                checked={spaceDetails.workspace.includes('Salon')}
                onInputChange={handleCheckboxChange('workspace')}
              />
              <CheckboxInput
                label="Barber Shop"
                id="Barber shop"
                checked={spaceDetails.workspace.includes('Barber shop')}
                onInputChange={handleCheckboxChange('workspace')}
              />
              <CheckboxInput
                label="Nail Salon"
                id="Nail salon"
                checked={spaceDetails.workspace.includes('Nail salon')}
                onInputChange={handleCheckboxChange('workspace')}
              />
              <CheckboxInput
                label="Makeup Studio"
                id="Makeup Studio"
                checked={spaceDetails.workspace.includes('Makeup Studio')}
                onInputChange={handleCheckboxChange('workspace')}
              />
              <CheckboxInput
                label="Esthetics Studio"
                id="Esthetics Studio"
                checked={spaceDetails.workspace.includes('Esthetics Studio')}
                onInputChange={handleCheckboxChange('workspace')}
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">Speciality</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Who Can Rent Your Space?
            </p>
            <div className="flex flex-col gap-4">
              <CheckboxInput
                label="Barber"
                id="Barber"
                checked={spaceDetails.speciality.includes('Barber')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Hairstylist"
                id="Hairstylist"
                checked={spaceDetails.speciality.includes('Hairstylist')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Makeup Artist"
                id="Makeup Artist"
                checked={spaceDetails.speciality.includes('Makeup Artist')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Braider"
                id="Braider"
                checked={spaceDetails.speciality.includes('Braider')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Nail Tech"
                id="Nail Tech"
                checked={spaceDetails.speciality.includes('Nail Tech')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Locs Stylist"
                id="Locs Stylist"
                checked={spaceDetails.speciality.includes('Locs Stylist')}
                onInputChange={handleCheckboxChange('speciality')}
              />
              <CheckboxInput
                label="Esthetician"
                id="Esthetician"
                checked={spaceDetails.speciality.includes('Esthetician')}
                onInputChange={handleCheckboxChange('speciality')}
              />
            </div>
          </div>
        </>
      )}

      {currentStep === 5 && (
        <div>
          <h2 className="mb-4 text-base font-bold">What makes it special</h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Select the features that set your space apart.
          </p>

          <div className="mb-5">
            <div className="flex rounded bg-gray p-1">
              <button
                className={clsx(
                  activeIdx === 0
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => setActiveIdx(0)}
              >
                Essential Amenities
              </button>
              <button
                className={clsx(
                  activeIdx === 1
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => setActiveIdx(1)}
              >
                Workspace Amenities
              </button>
            </div>
          </div>

          {activeIdx === 0 && (
            <div className="flex flex-col gap-4">
              <CheckboxInput
                label="Wi-Fi"
                id="Wi-Fi"
                checked={spaceDetails.amenities.includes('Wi-Fi')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Restrooms"
                id="Restrooms"
                checked={spaceDetails.amenities.includes('Restrooms')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Heating and Cooling"
                id="Heating and Cooling"
                checked={spaceDetails.amenities.includes('Heating and Cooling')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Security System"
                id="Security System"
                checked={spaceDetails.amenities.includes('Security System')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Parking"
                id="Parking"
                checked={spaceDetails.amenities.includes('Parking')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Waiting Area"
                id="Waiting Area"
                checked={spaceDetails.amenities.includes('Waiting Area')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Reception Area"
                id="Reception Area"
                checked={spaceDetails.amenities.includes('Reception Area')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Kitchenette or Shared Kitchen"
                id="Kitchenette or Shared Kitchen"
                checked={spaceDetails.amenities.includes(
                  'Kitchenette or Shared Kitchen',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Cleaning Supplies"
                id="Cleaning Supplies"
                checked={spaceDetails.amenities.includes('Cleaning Supplies')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Point-of-Sale System"
                id="Point-of-Sale System"
                checked={spaceDetails.amenities.includes(
                  'Point-of-Sale System',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Retail Display Area"
                id="Retail Display Area"
                checked={spaceDetails.amenities.includes('Retail Display Area')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Staff Lounge"
                id="Staff Lounge"
                checked={spaceDetails.amenities.includes('Staff Lounge')}
                onInputChange={handleCheckboxChange('amenities')}
              />
            </div>
          )}

          {activeIdx === 1 && (
            <div className="flex flex-col gap-4 pb-[104px]">
              <CheckboxInput
                label="Comfortable Chairs"
                id="Comfortable Chairs"
                checked={spaceDetails.amenities.includes('Comfortable Chairs')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Mirrors"
                id="Mirrors"
                checked={spaceDetails.amenities.includes('Mirrors')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Sufficient Lighting"
                id="Sufficient Lighting"
                checked={spaceDetails.amenities.includes('Sufficient Lighting')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Outlets"
                id="Outlets"
                checked={spaceDetails.amenities.includes('Outlets')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Storage Space"
                id="Storage Space"
                checked={spaceDetails.amenities.includes('Storage Space')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Sink"
                id="Sink"
                checked={spaceDetails.amenities.includes('Sink')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Barber Chairs"
                id="Barber Chairs"
                checked={spaceDetails.amenities.includes('Barber Chairs')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Barber Stations"
                id="Barber Stations"
                checked={spaceDetails.amenities.includes('Barber Stations')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Shaving Station"
                id="Shaving Station"
                checked={spaceDetails.amenities.includes('Shaving Station')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Shampoo Bowls"
                id="Shampoo Bowls"
                checked={spaceDetails.amenities.includes('Shampoo Bowls')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Hairdryers & Styling Tools"
                id="Hairdryers & Styling Tools"
                checked={spaceDetails.amenities.includes(
                  'Hairdryers & Styling Tools',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Makeup Station"
                id="Makeup Station"
                checked={spaceDetails.amenities.includes('Makeup Station')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Makeup Lighting"
                id="Makeup Lighting"
                checked={spaceDetails.amenities.includes('Makeup Lighting')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Makeup Chair"
                id="Makeup Chair"
                checked={spaceDetails.amenities.includes('Makeup Chair')}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Manicure/Pedicure Stations"
                id="Manicure/Pedicure Stations"
                checked={spaceDetails.amenities.includes(
                  'Manicure/Pedicure Stations',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Sterilization Equipment"
                id="Sterilization Equipment"
                checked={spaceDetails.amenities.includes(
                  'Sterilization Equipment',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Treatment Beds or Chairs"
                id="Treatment Beds or Chairs"
                checked={spaceDetails.amenities.includes(
                  'Treatment Beds or Chairs',
                )}
                onInputChange={handleCheckboxChange('amenities')}
              />
              <CheckboxInput
                label="Skincare Products"
                id="Skincare Products"
                checked={spaceDetails.amenities.includes('Skincare Products')}
                onInputChange={handleCheckboxChange('amenities')}
              />
            </div>
          )}
        </div>
      )}

      {currentStep === 6 && (
        <>
          <div className="mb-6">
            <h2 className="mb-4 text-base font-bold">Rental Type</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Select the features that set your space apart.
            </p>
          </div>

          <fieldset className="mb-6 flex flex-col gap-4">
            <label className="mb-4 w-full">
              <div className="mb-1 flex justify-between">
                <p className="text-sm font-medium text-headerColor">
                  Chair Rental
                </p>
                <input
                  type="radio"
                  name="rental-type"
                  value="chair"
                  className="mr-2 w-4"
                  onChange={handleTypeChange}
                  checked={spaceDetails.rentalType === 'chair'}
                />
              </div>

              <p className="max-w-[300px] text-xs font-medium text-[#838383]">
                A single workstation within a shared salon or barbershop.
              </p>
            </label>

            <label className="mb-4 w-full">
              <div className="mb-1 flex justify-between">
                <p className="text-sm font-medium text-headerColor">
                  Dedicated Studio
                </p>
                <input
                  type="radio"
                  name="rental-type"
                  value="dedicated-studio"
                  className="mr-2 w-4"
                  onChange={handleTypeChange}
                  checked={spaceDetails.rentalType === 'dedicated-studio'}
                />
              </div>

              <p className="max-w-[300px] text-xs font-medium text-[#838383]">
                A private, enclosed space for a single professional or small
                team.
              </p>
            </label>

            <label className="mb-4 w-full">
              <div className="mb-1 flex justify-between">
                <p className="text-sm font-medium text-headerColor">
                  Shared Space
                </p>
                <input
                  type="radio"
                  name="rental-type"
                  value="shared-space"
                  className="mr-2 w-4"
                  onChange={handleTypeChange}
                  checked={spaceDetails.rentalType === 'shared-space'}
                />
              </div>

              <p className="max-w-[300px] text-xs font-medium text-[#838383]">
                A common area with multiple workstations for freelancers or
                small businesses.
              </p>
            </label>

            <label className="mb-4 w-full">
              <div className="mb-1 flex justify-between">
                <p className="text-sm font-medium text-headerColor">
                  Pop-up Space
                </p>
                <input
                  type="radio"
                  name="rental-type"
                  value="pop-up-space"
                  className="mr-2 w-4"
                  onChange={handleTypeChange}
                  checked={spaceDetails.rentalType === 'pop-up-space'}
                />
              </div>

              <p className="max-w-[300px] text-xs font-medium text-[#838383]">
                Short-term rental options for events or product launches.
              </p>
            </label>
          </fieldset>

          <div>
            <h2 className="mb-4 text-base font-bold">
              Number of Available Workstations
            </h2>

            <div className="flex w-24 items-center justify-between rounded-lg bg-[#F2F2F2] px-2.5 py-4">
              <button onClick={decrement} disabled={count === 0}>
                <Image
                  src="/minus.svg"
                  alt="icon-minus"
                  width={16}
                  height={16}
                />
              </button>
              <span className="text-xl">{count}</span>
              <button onClick={increment}>
                <Image
                  src="/plus-add.svg"
                  alt="icon-plus"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </>
      )}

      {currentStep === 7 && (
        <div className="pb-32">
          <div className="mb-6">
            <h2 className="mb-4 text-base font-bold">Upload Cover Photo</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Picking an excellent cover photo can help you create the first
              impression you desire.
            </p>

            <FileUpload
              id="coverImg"
              label="Add Cover Photo"
              accept=".jpg,.jpeg,.png,.pdf"
              onFileChange={handleImageUpload}
            />
            {spaceDetails.coverImg && (
              <Image
                src={spaceDetails.coverImg}
                alt="salon cover"
                className="mt-4 rounded-lg border border-gray object-cover"
                width={380}
                height={180}
              />
            )}
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">
              Add Photos of Your Salon
            </h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Add as many pictures as you like but at least 5 are required to
              publish your listing
            </p>
            <FileUpload
              id="salonImage"
              label="Add Salon Photo"
              accept=".jpg,.jpeg,.png,.pdf"
              onFileChange={handleImageUpload}
              multiple={true}
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {spaceDetails.salonImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Salon ${index}`}
                  className="rounded-lg border border-gray object-cover"
                  width={180}
                  height={180}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentStep === 8 && (
        <div>
          <div>
            <h2 className="mb-4 text-base font-bold">Space Rules</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Set Clear Guidelines for Your Renters
            </p>

            <TextArea
              id="rules"
              placeholder="Enter a description..."
              value={spaceDetails.rules}
              onChange={handleTextareaChange}
            />
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">Cancelation Policy</h2>
            <p className="mb-4 text-sm font-medium text-[#838383]">
              Define the terms for refunds and rescheduling to protect your
              bookings and provide clarity for your guests.
            </p>

            <TextArea
              id="policy"
              placeholder="Enter a description..."
              value={spaceDetails.policy}
              onChange={handleTextareaChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
