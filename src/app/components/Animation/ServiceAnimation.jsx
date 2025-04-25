
"use client";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Service from '../Home/Service';

gsap.registerPlugin(ScrollTrigger);

const ServiceAnimation = () => {
  const sectionRef = useRef(null);
  const [shrinkReady, setShrinkReady] = useState(false);

  useEffect(() => {
    if (!shrinkReady || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        scale: 0.75, // Shrink the section visually
        opacity: 0.5, // Reduce opacity for a smoother effect
        ease: 'power2.inOut', // Smooth easing
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top+=200',  // Shrink when it is visible in viewport
          end: 'bottom top',     // Shrink only when it moves out of view
          scrub: 1,              // Make the animation sync with scroll
          markers: false,        // Disable debugging markers after testing
          toggleActions: 'play none reverse none',  // Ensures reverse effect
          invalidateOnRefresh: true, // Refresh scroll triggers on resize
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shrinkReady]);

  return (
    <>
      <section ref={sectionRef} className="w-full overflow-hidden relative rounded-b-2xl">
        <Service onComplete={() => setShrinkReady(true)} />
      </section>
    </>
  );
};

export default  ServiceAnimation;
