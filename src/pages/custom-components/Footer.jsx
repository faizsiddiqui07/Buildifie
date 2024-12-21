import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter,FaThreads  } from "react-icons/fa6";
import logo from "../../assets/images/logoFooter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} loading="lazy" className="w-[180px] h-auto mb-4" alt="Buildifie Logo" />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/investment" className="hover:text-white transition">
                Investment
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/business" className="hover:text-white transition">
                Business Model
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm flex gap-x-1">
            <span className="font-semibold">Address:</span> Vishal Khand, Gomti
            Nagar, Lucknow
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+919119897776"
              className="text-white hover:"
            >
              (+91) 9119897776
            </a>
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:business@buildifie.com"
              className="hover:text-white transition"
            >
              business@buildifie.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
            >
              <FaThreads  size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:text-white transition">
            Buildifie | Developed by Neurocort
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
