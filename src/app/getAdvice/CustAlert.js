import React from 'react';


const CustAlert = ({ message, onClose, type }) => {
  // Determine styles based on alert type
  const alertStyles = type === 'success'
    ? { backgroundColor: '#28a745', borderColor: '#28a745' } // Green for success
    : { backgroundColor: '#dc3545', borderColor: '#dc3545' }; // Red for error

  const iconColor = type === 'success' ? '#ffffff' : '#ffffff'; // White tick or cross icon color
  const iconBackground = type === 'success' ? '#3498db' : '#dc3545'; // Blue for success, red for error

  const iconPath = type === 'success'
    ? 'M5 13l4 4L19 7' // Check mark
    : 'M6 18L18 6M6 6l12 12'; // Cross mark for error

  return (
    <div
      className="fixed top-4 right-4 p-4 w-96 rounded-lg shadow-lg flex flex-col items-center justify-center"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '40px',
        paddingRight: '40px',
        backgroundColor: alertStyles.backgroundColor, // Dynamic background color
        borderColor: alertStyles.borderColor, // Dynamic border color
      }}
      role="alert"
    >
      {/* Circle with Tick or Cross */}
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: iconBackground, // Dynamic background color
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={iconColor} // White color for tick or cross
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={iconPath} // Dynamic icon path based on success or error
          />
        </svg>
      </div>

      {/* Bold Message */}
      <div
        className="text-xl font-bold text-center mb-2"
        style={{ color: '#2d3436' }}
      >
        {message}
      </div>

      {/* Second Message */}
      {type === 'success' ? (
        <div className="text-sm text-center mb-4" style={{ color: '#636e72' }}>
          We've received your information and our expert team will contact you soon
          to discuss your needs.
        </div>
      ) : (
        <div className="text-sm text-center mb-4" style={{ color: '#636e72' }}>
          Something went wrong. Please try again later.
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="w-full py-2 border-2 rounded-md text-black font-semibold hover:bg-gray-200 transition-all"
        style={{
          borderRadius: '5px',
          borderColor: 'black',
          borderWidth: '3px',
        }}
      >
        Close
      </button>
    </div>
  );
};

export default CustAlert;
