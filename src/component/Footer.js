import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-400 to-purple-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-10 text-white">&copy; 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className="mr-10 text-white">
          <a href="#" className="mr-4">Documentation</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
