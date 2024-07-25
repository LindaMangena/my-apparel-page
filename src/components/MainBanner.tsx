import React from "react";

const MainBanner: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/Top Banner.png"
        alt="Main Banner"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">SUMMER SALE!</h1>
          <p className="text-xl text-white">UP TO 50% OFF!</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
