import { assets } from "../assets/assets";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../index.css';

const Footer = () => {
  return (
    <div className="lightbrown">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Modern clothing brand delivering premium quality, timeless style, comfort, and confidence for everyday fashion lovers.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li>Delivery</li>
             <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-500" />
              <span>+880 1992113015</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-500" />
              <span>pureloom@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Pureloom. All rights reserved.
          <span className="ml-1">
            Designed & Developed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Pureloom & Company
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
