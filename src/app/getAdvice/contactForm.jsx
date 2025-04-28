// ContactForm.js
'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA v2
import { sendContactForm } from './sendContactForm'; // Function to send form data to API
import CustAlert from './CustAlert'; // Alert component to show success or error messages
import Image from 'next/image'; // To keep the Image as per original code

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Store reCAPTCHA token
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage('');
    setShowAlert(false);

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Required';
    if (!phone.trim()) newErrors.phone = 'Required';
    if (!location.trim()) newErrors.location = 'Required';
    if (!recaptchaValue) newErrors.recaptcha = 'Please verify that you are human'; // Ensure reCAPTCHA is verified

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // If there are errors, stop submission

    const formData = { name, phone, location, recaptchaToken: recaptchaValue };

    try {
      await sendContactForm(formData);
      setAlertMessage('Your message has been sent!');
      setAlertType('success');
      setShowAlert(true);
      setName('');
      setPhone('');
      setLocation('');
      setErrors({});
      setRecaptchaValue(null); // Reset reCAPTCHA after submission
    } catch (error) {
      setAlertMessage('Failed to send message. Please try again.');
      setAlertType('error');
      setShowAlert(true);
    }

    setTimeout(() => setShowAlert(false), 5000); // Auto-hide alert after 5 seconds
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              style={{ flex: 1, maxWidth: '552px', padding: '2rem' }}
            >
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

              {/* Add reCAPTCHA v2 widget here */}
              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"  // Replace with your reCAPTCHA v2 site key
                onChange={(value) => setRecaptchaValue(value)} // Store the reCAPTCHA token
              />
              {errors.recaptcha && <div style={errorTextStyle}>{errors.recaptcha}</div>}

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
