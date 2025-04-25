
// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const services = [
//   {
//     title: 'Real Estate Consulting & Advisory',
//     description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
//   },
//   {
//     title: 'Market Analysis and Property Valuation',
//     description: 'Understand market trends and accurate property valuations tailored to your needs.',
//   },
//   {
//     title: 'Property Management Solutions',
//     description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
//   },
//   {
//     title: 'Investment Portfolio Optimization',
//     description: 'Strategically diversify and grow your assets with real estate investment planning.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description: 'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
//   {
//     title: 'Legal and Regulatory Compliance',
//     description: 'Stay compliant and secure with our legal expertise throughout your journey.',
//   },
// ]

// const RealEstateServices = () => {
//   const containerRef = useRef(null)
//   const itemsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: `+=${services.length * 300}`,
//           scrub: true,
//           pin: true,
//         },
//       })

//       services.forEach((_, i) => {
//         if (i < services.length - 1) {
//           tl.to(
//             itemsRef.current[i],
//             { y: -100, opacity: 0, duration: 0.5 },
//             i
//           ).fromTo(
//             itemsRef.current[i + 1],
//             { y: 100, opacity: 0 },
//             { y: 0, opacity: 1, duration: 0.5 },
//             i
//           )
//         }
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
//     >
//       <div className="mb-16">
//         <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
//           <div className="w-3 h-3 bg-orange-500 rounded-full" />
//           SERVICES
//         </div>
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Unlock Your Real Estate Potential
//         </h2>
//         <p className="text-white max-w-2xl">
//           From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
//         </p>
//       </div>

//       {/* Service Cards Area */}
//       <div className="relative h-[300px] mt-10 border-2 ">
       
//         <div className="absolute top-0 -left-[16px] h-full w-[2px] bg-white opacity-50 z-0" />

//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 transform translate-y-10"
//             style={{
//               opacity: index === 0 ? 1 : 0,
//               transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
//             }}
//           >
//             <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
//             <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
//             <p className="text-white max-w-xl">{service.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Right Image */}
//       <img
//         src="/nek2.png" // <-- Replace this path with your image file
//         alt="Real Estate"
//         className="absolute bottom-0 right-0 w-[75%] h-auto  opacity-90"
//       />
//     </section>
//   )
// }

// export default RealEstateServices
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Real Estate Consulting & Advisory',
    description: 'Navigate the market with confidence. We provide expert guidance tailored to your unique goals, ensuring informed decisions and optimal outcomes.',
  },
  {
    title: 'Market Analysis and Property Valuation',
    description: 'Understand market trends and accurate property valuations tailored to your needs.',
  },
  {
    title: 'Property Management Solutions',
    description: 'Let us handle the day-to-day operations, so you can enjoy peace of mind.',
  },
  {
    title: 'Investment Portfolio Optimization',
    description: 'Strategically diversify and grow your assets with real estate investment planning.',
  },
  {
    title: 'Legal and Regulatory Compliance',
    description: 'Stay compliant and secure with our legal expertise throughout your journey.',
  },
];

const RealEstateServices = ({ onComplete }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${services.length * 200}`,
          scrub: true,
          pin: true,
          onLeave: () => {
      
            if (onComplete) onComplete();
          },
        },
      });

      services.forEach((_, i) => {
        if (i < services.length - 1) {
          tl.to(itemsRef.current[i], { y: -100, opacity: 0, duration: 0.5 }, i)
            .fromTo(
              itemsRef.current[i + 1],
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 },
              i
            );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  
  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-blue-300 to-blue-100 px-6 md:px-20 py-20 overflow-hidden"
    >
      <div className="mb-16">
        <div className="text-sm font-semibold text-white mb-2 tracking-widest flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full" />
          SERVICES
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Unlock Your Real Estate Potential
        </h2>
        <p className="text-white max-w-2xl">
          From groundbreaking investments to crafting your dream home, we’re with you every step of the way.
        </p>
      </div>

      <div className="relative h-[300px] mt-10 ">
        <div className="absolute top-0 -left-[16px] h-full w-[2px] bg-white opacity-50 z-0" />

        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 transform translate-y-10"
            style={{
              opacity: index === 0 ? 1 : 0,
              transform: index === 0 ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div className="absolute -left-[23px] top-2 w-4 h-4 bg-white rotate-45 z-10" />
            <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-white max-w-xl">{service.description}</p>
          </div>
        ))}
      </div>

      <img
        src="/nek2.png"
        alt="Real Estate"
        className="absolute bottom-0 right-0 w-[75%] h-auto opacity-90"
      />
    </section>
  );
};

export default RealEstateServices;

