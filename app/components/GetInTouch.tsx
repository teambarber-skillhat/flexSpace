'use client';
import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import GetInTouchForm from './GetInTouchForm';

export default function GetInTouch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="rounded-2xl bg-cardBgThree px-4 py-6 md:flex md:justify-between md:p-8">
        <div>
          <h2 className="mb-2 text-lg font-semibold leading-6 tracking-[-0.3px]">
            Still have questions?
          </h2>
          <p className="mb-4 text-sm font-medium leading-5 tracking-[-0.2px] text-cardTwoText md:text-base">
            Can&apos;t find the answer you&apos;re looking for? Please get in
            touch with our team.
          </p>
        </div>

        <Button onClick={openModal}>Get in Touch</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <GetInTouchForm closeModal={closeModal} />
      </Modal>
    </>
  );
}
