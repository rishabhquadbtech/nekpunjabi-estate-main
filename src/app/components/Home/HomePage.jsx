
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCom from "./ImageCom"; 


gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);     
  const firstSectionRef = useRef(null); 
  const textRef = useRef(null);         
  const imageComContainerRef = useRef(null); 

  useGSAP(() => {
    
    const imageElement = imageComContainerRef.current?.querySelector('img') || imageComContainerRef.current;

    if (!firstSectionRef.current || !textRef.current || !imageElement) {
      console.warn("GSAP target elements not found for HomePage animation.");
      return;
    }


    gsap.set(textRef.current, { opacity: 1, yPercent: 0 }); 
    gsap.set(imageComContainerRef.current, { opacity: 0, yPercent: 100 }); 


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstSectionRef.current, 
        start: "top top",            
        end: "+=150%",               
        scrub: 1,                     
        pin: true,                    
        pinSpacing: true,            
          
      },
    });

   
    tl.to(
      textRef.current,
      {
        opacity: 0,
        yPercent: -20, 
        ease: "power1.in", 
      },
      0 
    );

  
    tl.to( 
      imageComContainerRef.current, 
      {
        yPercent: 0,   
        opacity: 1,    
        ease: "power2.out", 
      },
      0 
    );

  }, { scope: containerRef }); 

  return (
    <>
    
      <div ref={containerRef}>
     
        <section
          ref={firstSectionRef}
          className="relative h-screen flex flex-col items-center justify-center w-full overflow-hidden px-4"
 
           style={{ backgroundImage: "url('/bg.svg')" }} 
        >
          
          <div
            ref={textRef}
            className="text-white text-center z-10 relative" 
          
          >
            <h1 className="text-5xl md:text-6xl font-light">
              Invest With <span className="italic font-bold">Confidence</span> <br />
              For Your <br /> Real Estate Future
            </h1>
            <p className="mt-4 mb-6">
              Submit your number to receive the best advice from our experts.
            </p>
            <div className="flex items-center justify-center gap-2 backdrop-blur-sm p-2 rounded">
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-2 rounded outline-none bg-white/80 text-black placeholder-gray-600"
              />
              <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Submit
              </button>
            </div>
          </div>

          <div
            ref={imageComContainerRef}
           
            className="absolute inset-0 z-0 flex items-center justify-center  "
           
          >
      
            <ImageCom />
          
          </div>
        </section>
      </div>

    
    </>
  );
};



export default HomePage;