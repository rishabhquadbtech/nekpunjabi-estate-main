'use client';

import { useState } from 'react';
import { sendContactForm } from './sendContactForm'; // Assuming you have this utility function
import CustAlert from './CustAlert';// Import the custom alert component
import Image from 'next/image';
export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const formData = {
      name,
      phone,
      location,
    };

    try {
      // Call the sendContactForm function to send the form data
      await sendContactForm(formData);

      // Show the success message
      setAlertMessage('Your message has been sent!');
      setAlertType('success');
      setShowAlert(true);

      // Reset the form fields
      setName('');
      setPhone('');
      setLocation('');
    } catch (error) {
      setAlertMessage('Failed to send message. Please try again.');
      setAlertType('error');
      setShowAlert(true);
    }

    // Hide the alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="w-screen overflow-hidden bg-white">
      {/* Conditionally render the custom alert */}
      {showAlert && <CustAlert message={alertMessage} type={alertType} onClose={() => setShowAlert(false)} />}

      <div className="relative w-full">
        <Image
          src="/bg.svg"
          alt="Sky Background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-6 md:p-12">
          <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-sm">
              If you’d like to know more information about us and any of our
              services, please get in touch with the below details or the contact
              form provided.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Yashika"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="9876x-xxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Ludhiana"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative -mt-20 w-full z-10">
        <Image
          src="/2.png"
          alt="House"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
