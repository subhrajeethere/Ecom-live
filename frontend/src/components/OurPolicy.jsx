import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-around gap-6 text-center py-10 sm:py-20 text-gray-700">

      {/* First Item (Full width on mobile) */}
      <div className="w-full sm:w-auto">
        <img
          src={assets.exchange_icon}
          alt="icon"
          className="w-8 sm:w-12 m-auto mb-3"
        />
        <p className="font-semibold text-xs sm:text-sm">
          Easy Exchange Policy
        </p>
        <p className="text-gray-400 text-xs">
          We offer hassle free exchange policy
        </p>
      </div>

      {/* Second Item */}
      <div className="w-1/2 sm:w-auto">
        <img
          src={assets.quality_icon}
          alt="icon"
          className="w-8 sm:w-12 m-auto mb-3"
        />
        <p className="font-semibold text-xs sm:text-sm">
          7 Days Return Policy
        </p>
        <p className="text-gray-400 text-xs">
          We provide 7 day free return policy
        </p>
      </div>

      {/* Third Item */}
      <div className="w-1/2 sm:w-auto">
        <img
          src={assets.support_img}
          alt="icon"
          className="w-8 sm:w-12 m-auto mb-3"
        />
        <p className="font-semibold text-xs sm:text-sm">
          Best customer support
        </p>
        <p className="text-gray-400 text-xs">
          We provide 24/7 customer support
        </p>
      </div>

    </div>
  );
};

export default OurPolicy;