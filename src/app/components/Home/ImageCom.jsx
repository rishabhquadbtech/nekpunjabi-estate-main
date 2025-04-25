// import React from 'react'
// import Image from 'next/image';
// const ImageCom = () => {
//   return (
//        <div className="w-screen overflow-hidden bg-white">
//           {/* Sky Section with Form */}
       
    
//           {/* House Image Overlapping from bottom */}
//           <div className="relative -mt-20 w-full z-10">
//             <Image
//               src="/2.png"
//               alt="House"
//               width={1920}
//               height={800}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//   )
// }

// export default ImageCom

import React from 'react'
import Image from 'next/image';
const ImageCom = (ref) => {
  return (
     
        <div
      className="w-screen h-screen  bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/one.png')" }}
    >
    

          <div
             
              className="relative -mt-20 w-full z-10">
            <Image
              src="/2.png"
              alt="House"
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
            />
        
          </div>
      
      
     
      </div> 
  )
}

export default ImageCom

   