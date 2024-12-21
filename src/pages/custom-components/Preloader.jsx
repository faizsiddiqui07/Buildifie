import React from "react";
import logo from "../../assets/images/logoHeader.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
      <img
        src={logo} className="w-[60%] zoom-in" alt="Buildifie logo"
      />
      {/* <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
    </div>
  );
};

export default Preloader;
