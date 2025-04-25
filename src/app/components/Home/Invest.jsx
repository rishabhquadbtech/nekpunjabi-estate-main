// 'use client';

// import { FiPhoneCall } from 'react-icons/fi';

// const WhyInvest = () => {
//   const items = [
//     { number: '1', title: 'Investment', subtitle: 'Opportunities' },
//     { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
//     { number: '3', title: 'Proven', subtitle: 'Track Record' },
//     { number: '4', title: 'Expert', subtitle: 'Management' },
//   ];

//   return (
//     <section className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-semibold">
//             Why <span className="text-[#f7931e] italic font-bold">Invest</span> with us?
//           </h2>
//           <p className="text-sm text-gray-300 mt-4 max-w-md">
//             Discover why thousands trust Nek Punjabi Estate <br />
//             for reliable and profitable real estate investments.
//           </p>
//         </div>

//         <button className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0">
//           <FiPhoneCall className="text-sm" />
//           Contact us now
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
//         {items.map((item) => (
//           <div key={item.number} className="flex flex-col items-center text-center">
//             <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
//               {item.number}
//             </div>
//             <p className="text-sm">
//               {item.title} <br /> {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;



// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { FiPhoneCall } from 'react-icons/fi';

// const WhyInvest = () => {
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const buttonRef = useRef(null);
//   const itemsRef = useRef([]);

//   const items = [
//     { number: '1', title: 'Investment', subtitle: 'Opportunities' },
//     { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
//     { number: '3', title: 'Proven', subtitle: 'Track Record' },
//     { number: '4', title: 'Expert', subtitle: 'Management' },
//   ];

//   useEffect(() => {
//     gsap.from(headingRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     gsap.from(paragraphRef.current, {
//       y: 30,
//       opacity: 0,
//       delay: 0.4,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     gsap.from(buttonRef.current, {
//       x: 100,
//       opacity: 0,
//       delay: 0.6,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     itemsRef.current.forEach((el, index) => {
//       const [circle, text] = el.children;

//       gsap.from(circle, {
//         y: -30,
//         opacity: 0,
//         delay: 0.8 + index * 0.2,
//         duration: 0.8,
//         ease: 'power3.out',
//       });

//       gsap.from(text, {
//         y: 30,
//         opacity: 0,
//         delay: 1 + index * 0.2,
//         duration: 0.8,
//         ease: 'power3.out',
//       });
//     });
//   }, []);

//   return (
//     <section className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-semibold"
//           >
//             Why{' '}
//             <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
//             with us?
//           </h2>
//           <p
//             ref={paragraphRef}
//             className="text-sm text-gray-300 mt-4 max-w-md"
//           >
//             Discover why thousands trust Nek Punjabi Estate <br />
//             for reliable and profitable real estate investments.
//           </p>
//         </div>

//         <button
//           ref={buttonRef}
//           className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0"
//         >
//           <FiPhoneCall className="text-sm" />
//           Contact us now
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
//         {items.map((item, index) => (
//           <div
//             key={item.number}
//             className="flex flex-col items-center text-center"
//             ref={(el) => (itemsRef.current[index] = el)}
//           >
//             <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
//               {item.number}
//             </div>
//             <p className="text-sm">
//               {item.title} <br /> {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhoneCall } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const WhyInvest = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const itemsRef = useRef([]);

  const items = [
    { number: '1', title: 'Investment', subtitle: 'Opportunities' },
    { number: '2', title: 'Exclusive', subtitle: 'Opportunities' },
    { number: '3', title: 'Proven', subtitle: 'Track Record' },
    { number: '4', title: 'Expert', subtitle: 'Management' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Paragraph
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      // Button
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: 'power3.out',
      });

      // Items
      itemsRef.current.forEach((el, index) => {
        const [circle, text] = el.children;

        gsap.from(circle, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: -30,
          opacity: 0,
          delay: index * 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });

        gsap.from(text, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          delay: 0.2 + index * 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1c1c1c] text-white py-16 px-4 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold"
          >
            Why{' '}
            <span className="text-[#f7931e] italic font-bold">Invest</span>{' '}
            with us?
          </h2>
          <p
            ref={paragraphRef}
            className="text-sm text-gray-300 mt-4 max-w-md"
          >
            Discover why thousands trust Nek Punjabi Estate <br />
            for reliable and profitable real estate investments.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg mt-6 md:mt-0"
        >
          <FiPhoneCall className="text-sm" />
          Contact us now
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gray-600 pt-12">
        {items.map((item, index) => (
          <div
            key={item.number}
            className="flex flex-col items-center text-center"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#f7931e] bg-white text-[#f7931e] font-bold text-lg flex items-center justify-center shadow-md mb-4">
              {item.number}
            </div>
            <p className="text-sm">
              {item.title} <br /> {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyInvest;


// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Assume these are your actual component imports
// // Make sure Invest component renders the visual card content you want
// import Invest from './Invest'; // Or path/to/Invest

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // --- Configuration --- (Keep this the same)
// const SHRINK_START_TRIGGER = 'top top';
// const SHRINK_END_TRIGGER = '+=75vh';
// const SHRINK_TARGET_WIDTH_PERCENT = 75;
// const SHRINK_TARGET_SCALE_X = SHRINK_TARGET_WIDTH_PERCENT / 100;
// const SHRINK_TARGET_Y = -300;
// const SHRINK_TARGET_OPACITY = 1;
// // --------------------

// const FullWidthShrinkingCardWrapper = () => {
//     const sectionRef = useRef(null); // Ref for the outer section that shrinks

//     useEffect(() => {
//         // GSAP setup remains the same, targeting the sectionRef
//         if (!sectionRef.current) {
//             console.warn("GSAP setup skipped: Section ref not ready.");
//             return;
//         }
//         const ctx = gsap.context(() => {
//             gsap.to(sectionRef.current, {
//                 scaleX: SHRINK_TARGET_SCALE_X,
//                 y: SHRINK_TARGET_Y,
//                 opacity: SHRINK_TARGET_OPACITY,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: SHRINK_START_TRIGGER,
//                     end: SHRINK_END_TRIGGER,
//                     scrub: 1,
//                    // markers: true,
//                     invalidateOnRefresh: true,
//                 },
//             });
//         }, sectionRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <>
//             {/* Spacer div above */}
//             <div className="h-screen bg-gray-200 flex items-center justify-center">
//                  <p className="text-center text-3xl font-bold text-gray-700">Scroll Down</p>
//             </div>

//             {/* The Full Width Section that Shrinks Centered */}
//             {/* REMOVED padding (py-*) and inner container */}
//             <section
//                 ref={sectionRef}
//                 className="w-full bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden" // Keep background here IF Invest doesn't have its own full bg
//                 style={{ willChange: 'transform, opacity' }}
//             >
//                  {/* === Render your single "full cover" component directly === */}
//                  {/* The Invest component now dictates the content *within* the scaled area */}
//                  {/* Ensure the Invest component handles its own internal padding/layout */}
//                  <Invest />

//             </section>

//             {/* Spacer div below */}
//             <div className="h-screen bg-gray-800 flex items-center justify-center">
//                  <p className="text-center text-3xl font-bold text-white">Content After Card</p>
//             </div>
//         </>
//     );
// };

// export default FullWidthShrinkingCardWrapper; // Renamed component