


import React from "react";
import pen from '../assets/pen.png';

const Section2 = () => {
  return (
    <section className="bg-[#000] py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start">
        <div className="text-left ml-0 lg:ml-20 max-w-screen-lg p-4 lg:mr-auto">
          <h3 className="text-4xl font-light text-[#EEE5FF] mb-4">
            Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your Visitors
          </h3>
          <p className="text-sm text-[#EEE5FFBD]">
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br /> your website with visually stunning motion art elements.
          </p>
          <div>
            <button className="bg-white text-white text-xl py-4 px-10 bg-gradient-to-r from-purple-800 to-orange-300 rounded-xl mt-8">
              Purchase From Envato
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-20 lg:mr-40 flex-shrink-0">
          <img src={pen} alt="pen" className="w-64 h-auto lg:w-80 lg:h-auto ml-auto lg:ml-0" />
        </div>
      </div>
    </section>
  );
};

export default Section2;










// import React from "react"
// import pen from '../assets/pen.png'


// const Section2 =() =>{
//     return (
//       <section className="bg-[#000] py-20">
//   <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-start">
//     <div className="text-left ml-20 max-w-screen-lg p-4 lg:mr-auto">
//       <h3 className="text-4xl font-light text-[#EEE5FF] mb-4">
//         Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your Visitors
//       </h3>
//       <p className="text-sm text-[#EEE5FFBD]">
//         Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br /> your website with visually stunning motion art elements.
//       </p>
//       <div>
//         <button className="bg-white text-white text-xl py-4 px-10 bg-gradient-to-r from-purple-800 to-orange-300 rounded-xl mt-[2rem]">
//           Purchase From Envato
//         </button>
//       </div>
//     </div>
//     <div className="mt-8 lg:mt-0 lg:ml-20 lg:mr-40 flex-shrink-0">
//       <img src={pen} alt="pen" className="w-64 h-auto lg:w-80 lg:h-auto ml-auto lg:ml-0" />
//     </div>
//   </div>
// </section>

 
//     )
// }
// export default Section2;