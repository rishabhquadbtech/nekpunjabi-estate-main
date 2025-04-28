'use client';

import { useState } from 'react';
import { sendContactForm } from './sendContactForm';
import CustAlert from './CustAlert';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Image from 'next/image';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage('');
    setShowAlert(false);

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Required';
    if (!phone.trim()) newErrors.phone = 'Required';
    if (!location.trim()) newErrors.location = 'Required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const formData = { name, phone, location };

    let gRecaptchaToken = null;
    if (executeRecaptcha) {
      gRecaptchaToken = await executeRecaptcha('contactFormSubmit');
    }

    try {
      await sendContactForm(formData, gRecaptchaToken);
      setAlertMessage('Your message has been sent!');
      setAlertType('success');
      setShowAlert(true);
      setName('');
      setPhone('');
      setLocation('');
      setErrors({});
    } catch (error) {
      setAlertMessage('Failed to send message. Please try again.');
      setAlertType('error');
      setShowAlert(true);
    }

    setTimeout(() => setShowAlert(false), 5000);
  };

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '16px',
    border: '1.6px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    outline: 'none',
  };

  const errorTextStyle = {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '-0.5rem',
    marginBottom: '0.5rem',
  };

  return (
    <div className="w-screen overflow-hidden bg-white">
      {showAlert && (
        <CustAlert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="relative w-full">
        <Image
          src="/bg.svg"
          alt="Sky Background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div
          style={{
            position: 'absolute',
            top: 150,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div className="flex gap-3 flex-wrap justify-center items-start max-w-1200">
            <div style={{ flex: 1, maxWidth: '462px', color: '#333' }}>
              <h2 style={{ fontSize: '80px', fontWeight: 500, color: 'white', marginBottom: '25px' }}>Get in Touch</h2>
              <p style={{ fontSize: '1rem', color: 'white' }}>
                If you’d like to know more information about us, please get in touch.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ flex: 1, maxWidth: '552px', padding: '2rem' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
              {errors.name && <div style={errorTextStyle}>{errors.name}</div>}

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
              />
              {errors.phone && <div style={errorTextStyle}>{errors.phone}</div>}

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={inputStyle}
              />
              {errors.location && <div style={errorTextStyle}>{errors.location}</div>}

              <button
                type="submit"
                style={{
                  padding: '0.75rem',
                  backgroundColor: 'white',
                  color: 'rgba(174, 202, 234, 1)',
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-8">
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
