import React from "react";
import random from '../assets/random.png';
import thumb from '../assets/thumb.png';
import moon from '../assets/moon.png';

const Section5 = () => {
  return (
    <section className="py-12 bg-[#000]">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-4 text-[#EEE5FF] leading-normal">An All-Round Plugin With <br/>Powerful Features</h3>
        <p className="text-[#EEE5FFBD]  mb-8 leading-normal">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:space-x-4">
          <div className="max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-left mb-4 md:mb-0">
            <img src={random} alt="random" className="h-auto mb-4 rounded-lg" />
            <h3 className="text-[#EEE5FF] text-3xl mb-5">Light Weight</h3>
            <p className="text-[#EEE5FFBD] text-bold mb-5">Motion Art for Elementor is designed to be lightweight.</p>
          </div>
          <div className="max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-left mb-4 md:mb-0">
            <img src={thumb} alt="thumb" className="h-auto mb-4 rounded-lg" />
            <h3 className="text-[#EEE5FF] text-3xl mb-5">100% Responsive</h3>
            <p className="text-[#EEE5FFBD] text-bold mb-5">Create a consistent visual experience across all devices.</p>
          </div>
          <div className="max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-left">
            <img src={moon} alt="moon" className="h-auto mb-4 rounded-lg" />
            <h3 className="text-[#EEE5FF] text-3xl mb-5">User Friendly Interface</h3>
            <p className="text-[#EEE5FFBD]  text-bold mb-5">Ensure a smooth experience for both applicants and administrators.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;







// import React from "react";
// import moon from '../assets/moon.png'
// import random from '../assets/random.png'
// import thumb from '../assets/thumb.png'
// const Section5 = () => {
//     return (
//         <section className="py-12 bg-[#000]">
//   <div className="container mx-auto text-center">
//     <h3 className="text-4xl font-semibold mb-4 text-[#EEE5FF] leading-normal">An All-Round Plugin With <br/>Powerful Features</h3>
//     <p className="text-[#EEE5FFBD]  mb-8 leading-normal">Whether you're a seasoned web designer or just starting out, Motion Art for<br/> Elementor seamlessly integrates with the Elementor platform, providing you<br/> with a seamless and intuitive experience.</p>
//     <div className="flex justify-center ">
//       <div className="w-full lg:w-1/4 mx-8 bg-gray-900 rounded-lg shadow-lg p-6 text-left ">
//         <img src={random} alt="random" className="h-auto mb-4 rounded-lg" />
//         <h3 className="text-[#EEE5FF] text-3xl mb-5 ">Light Weight</h3>
//         <p className="text-[#EEE5FFBD] text-bold mb-5">Motion Art for Elementor is designed to be<br/> lightweight.</p>
//       </div>
//       <div className="w-full lg:w-1/4 mx-8 bg-gray-900 rounded-lg shadow-lg p-6 text-left">
//         <img src={thumb} alt="thumb" className="h-auto mb-4 rounded-lg" />
//         <h3 className="text-[#EEE5FF] text-3xl mb-5">100% Responsive</h3>
//         <p className="text-[#EEE5FFBD] text-bold mb-5 ">Create a consistent visual experience<br/> across all devices.</p>
//       </div>
//       <div className="w-full lg:w-1/4 mx-8 bg-gray-900 rounded-lg shadow-lg p-6 text-left">
//         <img src={moon} alt="moon" className="h-auto mb-4 rounded-lg" />
//         <h3 className="text-[#EEE5FF] text-3xl mb-5">User Friendly Interface</h3>
//         <p className="text-[#EEE5FFBD]  text-bold mb-5 ">Ensure a smooth experience for both <br/>applicants and administrators.</p>
//       </div>
//     </div>
//   </div>
// </section>

    
//     //   <section className="py-12 bg-[#000]">
//     //     <div className="container mx-auto text-center">
//     //       <h3 className="text-3xl font-semibold mb-4 text-[#EEE5FF]">An All-Round Plugin With <br/>Powerful Features</h3>
//     //       <p className="text-[#EEE5FFBD]  mb-8">Whether you're a seasoned web designer or just starting out, Motion Art for<br/> Elementor seamlessly integrates with the Elementor platform, providing you<br/> with a seamless and intuitive experience.</p>
//     //       <div className="container   flex justify-center  items-center">
//     //         <div className="max-w-15xl mx-4 bg-gray-900 rounded-lg shadow-lg p-6 text-left ">
//     //           <img src={random} alt="random" className=" h-auto mb-4 rounded-lg" />
//     //           <h3 className="text-[#EEE5FF]">Light Weight</h3>
//     //           <p className="text-[#EEE5FFBD] ">Motion Art for Elementor is designed to be<br/> lightweight.</p>
//     //         </div>
//     //         <div className="max-w-15xl mx-4 bg-gray-900 rounded-lg shadow-lg p-6 text-left">
//     //           <img src={thumb} alt="thumb" className=" h-auto mb-4 rounded-lg" />
//     //           <h3 className="text-[#EEE5FF]">100% Responsive</h3>
//     //           <p className="text-[#EEE5FFBD] ">Create a consistent visual experience<br/> across all devices.</p>
//     //         </div>
//     //         <div className="max-w-15xl mx-4 bg-gray-900 rounded-lg shadow-lg p-6 text-left">
//     //           <img src={moon} alt="moon" className="align-left h-auto mb-4 rounded-lg" />
//     //           <h3 className="text-[#EEE5FF]">User Friendly Interface</h3>
//     //           <p className="text-[#EEE5FFBD] ">Ensure a smooth experience for both <br/>applicants and administrators.</p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     );
//   };
  
//   export default Section5;
  