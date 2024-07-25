import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faStar, faHeart, faTag } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <img src="/images/Logo.svg" alt="reway" className="h-10" />
      <nav className="flex space-x-8">
        <a href="#" className="hover:text-blue-500 font-bold text-black">APPARELS</a>
        <a href="#" className="hover:text-blue-500 font-bold text-blue-500">SHOES</a>
        <a href="#" className="hover:text-blue-500 font-bold text-black">EQUIPMENT</a>
        <a href="#" className="hover:text-blue-500 font-bold text-black">GIFT</a>
      </nav>
      <div className="flex space-x-6 items-center">
        <FontAwesomeIcon icon={faGift} className="text-gray-500" style={{ fontSize: '1.5rem' }} />
        <FontAwesomeIcon icon={faStar} className="text-gray-500" style={{ fontSize: '1.5rem' }} />
        <FontAwesomeIcon icon={faHeart} className="text-gray-500" style={{ fontSize: '1.5rem' }} />
        <FontAwesomeIcon icon={faTag} className="text-gray-500" style={{ fontSize: '1.5rem' }} />
      </div>
      <div className="flex space-x-4">
        <button className="text-blue-500 font-bold">SIGN UP</button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded font-bold">LOGIN</button>
      </div>
    </header>
  );
};

export default Header;
