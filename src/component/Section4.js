import React from "react";
import social from '../assets/social.png';

const Section4 = () => {
  return (
    <section className="text-center bg-[#000] py-20">
      <div className="container mx-auto">
        <div className="w-full md:w-1/2 bg-gray-900 p-6 rounded-2xl shadow-lg mx-auto">
          <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4">Supported by All Popular Browsers</h3>
          <p className="text-[#EEE5FFBD] mt-4">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
          <div className="flex justify-center mt-4">
            <img src={social} alt="page" className="w-96 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

  






// import React from "react";
// import social from '../assets/social.png'
// const Section4 =() => {

// return(
//     <section className="text-center bg-[#000] py-10">
//     <div className="container   flex justify-center h-screen items-center">
//         <div className="w-full h-[15rem] bg-gray-900 p-6 rounded-2xl shadow-lg ml-20 mr-20">
//           <h3 className="text-3xl text-[#EEE5FF] font-lightbold mb-4"> Supported by All Popular Browsers</h3>
//           <p className="text-[#EEE5FFBD] mt-4">Rest assured, Motion Art is designed to be compatible <br />with all major web browsers.</p>
//           <div className="flex justify-center mt-4">
//             <img src={social} alt="page" className="w-[30rem] h-auto" />
//           </div>
//         </div>
//       </div>
//       </section>
// )
// }
// export default Section4;