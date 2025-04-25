'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TbMessages } from 'react-icons/tb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const contactRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });

    // Paragraph Animation
    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 80%',
      },
    });

    // Image Animation
    gsap.from(imageRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 85%',
      },
    });

    // Contact Box Animation
    gsap.from(contactRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 90%',
      },
    });

    // Stats Animation
    gsap.from(statsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold text-black leading-snug"
          >
            Trust of more than <br />
            <span className="text-[#f7931e] italic font-bold">9 lakh</span> people
          </h2>

          <p
            ref={paragraphRef}
            className="text-sm text-gray-500 mt-4 max-w-md"
          >
            Experience the strength of a community that has placed their confidence in us.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="mt-10 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-3xl font-semibold text-black">500+</h3>
              <p className="text-sm italic text-gray-600">Clients Served</p>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-3xl font-semibold text-black">10+</h3>
              <p className="text-sm italic text-gray-600">Years of Expertise</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-black">400</h3>
              <p className="text-sm italic text-gray-600">Successful Investments</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div ref={imageRef} className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/nek1.jpeg"
            alt="Buildings"
            width={500}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div
            ref={contactRef}
            className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm font-medium"
          >
            <TbMessages className="text-lg" />
            <span>
              Contact us now to get the <br className="hidden sm:block" /> best advice with our experts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
