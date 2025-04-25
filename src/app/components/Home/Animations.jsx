// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // --- Configuration ---
// const SHRINK_START_TRIGGER = 'top top';
// const SHRINK_END_TRIGGER = '+=75vh'; // Complete over 75% of viewport height scroll

// // Define target width as a percentage NUMBER (e.g., 75 for 75%)
// const SHRINK_TARGET_WIDTH_PERCENT = 75;
// // Calculate the target scaleX value (0.0 to 1.0)
// const SHRINK_TARGET_SCALE_X = SHRINK_TARGET_WIDTH_PERCENT / 100;

// const SHRINK_TARGET_Y = -300;      // How far the section moves up (negative value)
// const SHRINK_TARGET_OPACITY = 1;   // Keep it fully opaque, or change for fade (e.g., 0.5)
// // --------------------

// const FullWidthCenteredShrinkingCard = () => {
//     const sectionRef = useRef(null); // Ref for the entire section

//     useEffect(() => {
//         // Ensure the ref is available
//         if (!sectionRef.current) {
//             console.warn("GSAP setup skipped: Section ref not ready.");
//             return;
//         }

//         const ctx = gsap.context(() => {
//             // The section starts at 100% width and scaleX 1 (default)
//             // GSAP animates it *towards* the target values
//             gsap.to(sectionRef.current, {
//                 // Animate scaleX instead of width for centered shrinking
//                 scaleX: SHRINK_TARGET_SCALE_X,
//                 y: SHRINK_TARGET_Y,         // Animate vertical position (move up)
//                 opacity: SHRINK_TARGET_OPACITY, // Animate opacity
//                 ease: 'none',               // Linear animation syncs best with scrub
//                 // transformOrigin: 'center center', // Default, but explicitly state if needed
//                 scrollTrigger: {
//                     trigger: sectionRef.current, // The section triggers its own animation
//                     start: SHRINK_START_TRIGGER, // When to START shrinking/moving
//                     end: SHRINK_END_TRIGGER,     // Over what scroll distance it completes
//                     scrub: 1,                    // Smoothly link animation to scroll position
//                     // markers: true,            // Add markers for debugging (remove in production)
//                     invalidateOnRefresh: true,   // Recalculate triggers on viewport resize
//                 },
//             });
//         }, sectionRef); // Scope GSAP context to the sectionRef

//         // Cleanup function
//         return () => ctx.revert();

//     }, []); // Run effect only once on mount

//     return (
//         <>
//             {/* Spacer div above */}
//             <div className="h-screen bg-gray-200 flex items-center justify-center">
//                  <p className="text-center text-3xl font-bold text-gray-700">Scroll Down</p>
//             </div>

//             {/* The Full Width Section that Shrinks Centered */}
//             <section
//                 ref={sectionRef}
//                 // Starts full width, has background. Crucially, scaling happens visually within this space.
//                 className="w-full bg-gradient-to-b from-purple-300 to-purple-400 py-10 md:py-20 overflow-hidden"
//                 // Make sure 'transform' is included in will-change
//                 style={{ willChange: 'transform, opacity' }} // width is no longer animated
//             >
//                 {/* Inner container for the card content (max-width, centered) */}
//                 {/* This div remains centered and its content is visually scaled by the parent */}
//                  <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
//                      {/* Card Content */}
//                      <div className="p-6 md:p-8 bg-white rounded-2xl shadow-xl overflow-hidden">
//                         {/* ... Card content (stats and image) remains the same ... */}
//                         <div className="flex flex-col md:flex-row gap-8 items-center">
//                             {/* Left Side - Stats */}
//                             <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
//                                 {/* Stat Item 1 */}
//                                 <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
//                                     <p className="text-4xl md:text-5xl font-bold text-gray-800">500+</p>
//                                     <p className="text-sm text-gray-600">Clients<br />Served</p>
//                                 </div>
//                                 {/* Stat Item 2 */}
//                                 <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
//                                     <p className="text-4xl md:text-5xl font-bold text-gray-800">10+</p>
//                                     <p className="text-sm text-gray-600">Years of<br />Expertise</p>
//                                 </div>
//                                 {/* Stat Item 3 */}
//                                 <div className="flex items-center gap-4">
//                                     <p className="text-4xl md:text-5xl font-bold text-gray-800">400</p>
//                                     <p className="text-sm text-gray-600">Successful<br />Investments</p>
//                                 </div>
//                             </div>

//                             {/* Right Side - Image */}
//                             <div className="w-full md:w-1/2">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1519999492199-e600b80b8f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnMlMjBkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" // Replace with your image
//                                     alt="Modern skyscrapers"
//                                     className="w-full h-auto object-cover rounded-lg shadow-md"
//                                 />
//                             </div>
//                         </div>
//                      </div>
//                  </div>

//             </section>

//             {/* Spacer div below */}
//             <div className="h-screen bg-gray-800 flex items-center justify-center">
//                  <p className="text-center text-3xl font-bold text-white">Content After Card</p>
//             </div>
//         </>
//     );
// };

// export default FullWidthCenteredShrinkingCard;

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assume these are your actual component imports
// import Invest from './Invest'; // Or path/to/Invest
import Service from './Service'; // Or path/to/Service

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Configuration ---
const SHRINK_START_TRIGGER = 'top top';
const SHRINK_END_TRIGGER = '+=75vh';

// Define target overall scale (0.0 to 1.0)
// If you want it to end up 75% of its original size:
const SHRINK_TARGET_SCALE = 0.75; // This will shrink both width AND height

const SHRINK_TARGET_Y = -300;      // How far the section moves up (negative value)
const SHRINK_TARGET_OPACITY = 1;   // Keep it fully opaque, or change for fade (e.g., 0.5)
// --------------------

// Renamed component for clarity
const FullWidthUniformShrinkingSection = () => {
    const sectionRef = useRef(null); // Ref for the outer section that shrinks

    useEffect(() => {
        // GSAP setup targeting the sectionRef
        if (!sectionRef.current) {
            console.warn("GSAP setup skipped: Section ref not ready.");
            return;
        }
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                // Use scale for uniform shrinking (X and Y)
                scale: SHRINK_TARGET_SCALE,
                y: SHRINK_TARGET_Y,
                opacity: SHRINK_TARGET_OPACITY,
                ease: 'none',
                // transformOrigin: 'center center', // Default is center, so usually not needed explicitly
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: SHRINK_START_TRIGGER,
                    end: SHRINK_END_TRIGGER,
                    scrub: 1,
                   // markers: true,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Spacer div above */}
            <div className="h-screen bg-gray-200 flex items-center justify-center">
                 <p className="text-center text-3xl font-bold text-gray-700">Scroll Down</p>
            </div>

            {/* The Full Width Section that Shrinks Uniformly & Centered */}
            <section
                ref={sectionRef}
                className="w-full bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden" // Background still applies to the container
                // Ensure will-change includes transform
                style={{ willChange: 'transform, opacity' }}
            >
                 {/* The Invest component renders directly within the scaled section */}
                 {/* All its contents will visually shrink due to the parent's scale */}
                {/* <Invest /> */}
                <Service/>

            </section>

            {/* Spacer div below */}
            <div className="h-screen bg-gray-800 flex items-center justify-center">
                 <p className="text-center text-3xl font-bold text-white">Content After Section</p>
            </div>
        </>
    );
};

// Make sure to export the renamed component
export default FullWidthUniformShrinkingSection;