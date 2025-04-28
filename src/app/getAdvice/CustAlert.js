import React from 'react';


const CustAlert = ({ message, onClose, type }) => {
  // Determine styles based on alert type
  const alertStyles = { backgroundColor: 'white', borderColor: 'black' } // Green for success


  const iconColor = type === 'success' ? '#ffffff' : '#ffffff'; 
  const iconBackground = type === 'success' ? '#3498db' : '#dc3545'; 

  const iconPath = type === 'success'
    ? 'M5 13l4 4L19 7' 
    : 'M6 18L18 6M6 6l12 12'; 

  return (
    <div
      className="fixed top-4 right-4 p-4 w-96 rounded-lg shadow-lg flex flex-col items-center justify-center "
      style={{
        zIndex:100,
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '40px',
        paddingRight: '40px',
        backgroundColor: alertStyles.backgroundColor, 
        borderColor: alertStyles.borderColor,
      }}
      role="alert"
    >
    
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: iconBackground, 
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={iconColor} 
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={iconPath} 
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
