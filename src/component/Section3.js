import React from "react";
import sec from '../assets/sec.png';
import page from '../assets/page.png';

const Section3 = () => {
  return (
    <section className="text-center bg-[#000] py-20">
      <h3 className="text-2xl font-light font-sora text-[#EEE5FF] mb-8">
        Apply On Any Section Or Enable For Whole Page
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4">Apply On Section</h3>
          <p className="text-[#EEE5FFBD] mt-4">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
          <img src={sec} alt="section" className="w-full h-auto mt-4" />
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4"> Apply On Page</h3>
          <p className="text-[#EEE5FFBD] mt-4">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          <img src={page} alt="page" className="w-full h-auto mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Section3;


// import React from "react"
// import sec from '../assets/sec.png'
// import page from '../assets/page.png'

// const Section3 = () => {

//   return (
//     <section className="text-center bg-[#000] py-20">
//       <h3 className="text-5xl font-normal text-[#EEE5FF] leading-normal">Apply On Any Section Or Enable <br />For Whole Page</h3>
//       <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center mt-10">
//         <div className="lg:mr-2 lg:mt-10 text-left">
//           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4">Apply On Section</h3>
//             <p className="text-[#EEE5FFBD] mt-4">Apply on section is a game-changer, offering an unparalleled way to <br /> manage applications directly from your website. </p>
//             <img src={sec} alt="section" className="w-full h-auto mt-4" />
//           </div>
//         </div>
//         <div className="lg:ml-4 lg:mt-20 self-end text-left">
//           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4"> Apply On Page</h3>
//             <p className="text-[#EEE5FFBD] mt-4">Take your website to new heights with Motion Art for Elementor.<br /> Embrace the power of motion and animation.</p>
//             <img src={page} alt="page" className="w-full h-auto mt-4" />
//           </div>
//         </div>
//       </div>
//       {/* <div className="container   flex justify-center h-screen items-center">
//         <div className="w-full h-[15rem] bg-gray-900 p-6 rounded-2xl shadow-lg ml-20 mr-20">
//           <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4"> Supported by All Popular Browsers</h3>
//           <p className="text-[#EEE5FFBD] mt-4">Rest assured, Motion Art is designed to be compatible <br />with all major web browsers.</p>
//           <div className="flex justify-center mt-4">
//             <img src={social} alt="page" className="w-[30rem] h-auto" />
//           </div>
//         </div>
//       </div> */}
//     </section>
//   )
// };




// export default Section3;