// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/404.png'

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className='flex flex-col justify-center items-center'>
        <div className="">
        <img src={notFoundImage} className='w-full' alt="" />
        </div>
        <Link
          to="/"
          className="mt-6 text-3xl text-[#454b68] hover:text-[#23283e] transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
