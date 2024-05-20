import React from "react";
import logo from '../assets/logo.png';
import star from '../assets/star.png';
import gimage from '../assets/gimage.png';
import wordpress from '../assets/wordpress.png';

const Section1 = () => {
  return (
    <section className="text-center bg-[#000] py-20">
      <h3 className="text-2xl font-sora font-light text-[#EEE5FF] mb-20">
        Trusted by thousands of users around the world
      </h3>
      <div className="container mx-auto mt-20 px-20">
        <div className="flex flex-wrap justify-between gap-8">
          {/* First Set */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
            <div className="flex flex-col items-center">
              <img src={star} alt="Star Rating" className="w-30 h-auto" />
              <span className="text-white">4.5 Score, 9 Reviews</span>
            </div>
          </div>
          {/* Second Set */}
          <div className="flex items-center gap-4">
            <img src={gimage} alt="WordPress Logo" className="w-15 h-auto" />
            <div className="flex flex-col items-center">
              <img src={star} alt="Star Rating" className="w-30 h-auto" />
              <span className="text-white">4.5 Score, 9 Reviews</span>
            </div>
          </div>
          {/* Third Set */}
          <div className="flex items-center gap-4">
            <img src={wordpress} alt="WordPress Logo" className="w-15 h-auto" />
            <div className="flex flex-col items-center">
              <img src={star} alt="Star Rating" className="w-30 h-auto" />
              <span className="text-white">4.5 Score, 9 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;









// import React from "react"
// import logo from '../assets/logo.png';
// import star from '../assets/star.png';
// import gimage from '../assets/gimage.png';
// import wordpress from '../assets/wordpress.png';

// const Section1 = () => {
//   return ( 
//     <section className="text-center bg-[#000] py-20 ">
//     <h3 className="text-2xl font-sora font-light text-[#EEE5FF]  mb-20 ">
//       Trusted by thousands of users around the world
//     </h3>
//     <div className="container mx-auto mt-20 px-4">
//       <div className="flex justify-between">
//         {/* First Set */}
//         <div className="flex items-center gap-4">
//           <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
//           <div className="flex flex-col items-center">
//             <img src={star} alt="Star Rating" className="w-30 h-auto" />
//             <span className="text-white">4.5 Score, 9 Reviews</span>
//           </div>
//         </div>
//         {/* Second Set */}
//         <div className="flex items-center gap-4">
//           <img src={gimage } alt="WordPress Logo" className="w-15 h-auto" />
//           <div className="flex flex-col items-center">
//             <img src={star} alt="Star Rating" className="w-30 h-auto" />
//             <span className="text-white">4.5 Score, 9 Reviews</span>
//           </div>
//         </div>
//         {/* Third Set */}
//         <div className="flex items-center gap-4">
//           <img src={wordpress} alt="WordPress Logo" className="w-15 h-auto" />
//           <div className="flex flex-col items-center">
//             <img src={star} alt="Star Rating" className="w-30 h-auto" />
//             <span className="text-white">4.5 Score, 9 Reviews</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
// }

  
// //     <section className="text-center bg-gray-900  py-20">
// //         <h3 className="text-2xl  font-sora font-light text-[#EEE5FF]">Trusted by thousands of users around the world</h3>
// // //       <div className="flex justify-center space-x-10 mt-4">
// //     <div className="flex justify-center mt-4">
// //     <div className="flex gap-15">
// //       {/* First Set */}
// //       <div className="flex items-center gap-4">
// //         <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
// //         <div className="flex flex-col items-center">
// //           <img src={star} alt="Star Rating" className="w-30 h-auto" />
// //           <span className="text-white">4.5 Score, 9 Reviews</span>
// //         </div>
// //       </div>
// //       {/* Second Set */}
// //       <div className="flex items-center gap-4">
// //         <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
// //         <div className="flex flex-col items-center">
// //           <img src={star} alt="Star Rating" className="w-30 h-auto" />
// //           <span className="text-white">4.5 Score, 9 Reviews</span>
// //         </div>
// //       </div>
// //       {/* Third Set */}
// //       <div className="flex items-center gap-4">
// //         <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
// //         <div className="flex flex-col items-center">
// //           <img src={star} alt="Star Rating" className="w-30 h-auto" />
// //           <span className="text-white">4.5 Score, 9 Reviews</span>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// //   </div>
// //   </section>

// //     <section className="text-center bg-gray-900  py-20">
// //       <h3 className="text-2xl  font-sora font-light text-[#EEE5FF]">Trusted by thousands of users around the world</h3>
// //       <div className="flex justify-center space-x-10 mt-4">
// //   <div className="flex items-center gap-4">
// //     <img src={logo} alt="WordPress Logo" className="w-15 h-auto" />
// //     <div className="flex flex-col items-center">
// //       <img src={star} alt="Star Rating" className="w-30 h-auto" />
// //       <span className="text-white">4.5 Score, 9 Reviews</span>
// //     </div>
// //   </div>
// // </div>

//       // {/* <div className="flex justify-center space-x-10 mt-4">
//       // <div className=" flex items-center gap-4">
//       //   <img src={logo} alt='WordPress Logo' className="w-15 h-auto" />
//       //   <img src={star } alt='Star Rating' className="w-30 h-auto" /> 
//       //   <span className="text-white">4.5 Score, 9 Reviews</span>
//       // </div> */}


      

//       {/* <div className="mt-8 text-center">
//   <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white py-2 px-6 rounded">Purchase From Envato</button>
// </div> */}
    
  
// export default Section1;