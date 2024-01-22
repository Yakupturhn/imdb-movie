import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#04152e] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl font-bold">My Movie App</h2>
          <p className="mt-2 text-sm">En sevdiğiniz filmleri keşfedin!</p>
        </div>

        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <Link href="#" className="hover:text-gray-500">
            Anasayfa
          </Link>
          <Link to={`/Favorite`} className="hover:text-gray-500">
            Favoriler
          </Link>
          <Link to={`/SignUp`} className="hover:text-gray-500">
            Üye Ol
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition duration-300 border rounded-full p-2"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition duration-300 border rounded-full p-2"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition duration-300 border rounded-full p-2"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition duration-300 border rounded-full p-2"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm">
        <p>&copy; 2024 My Movie App. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
