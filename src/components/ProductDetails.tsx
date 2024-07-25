import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <div className="p-4 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Dylan Hiker Boot</h2>
      <div className="flex">
        <div className="w-1/2">
          <img src="/images/Main item Image 01.png" alt="Dylan Hiker Boot" className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-4">
          <p>Fabrication: Faux Leather</p>
          <p>Colour: Brown</p>
          <p>Brand: SuperHike</p>
          <p>Price: R 359</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
