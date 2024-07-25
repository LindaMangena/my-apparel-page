import React from "react";

const ProductList: React.FC = () => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">More from Boots</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="/images/Boots 01.png"
            alt="Boot 1"
            className="w-full h-auto mb-2"
          />
          <p>Hargrave Ankle Boot</p>
          <p>Price: R 500</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="/images/Boots 02.png"
            alt="Boot 2"
            className="w-full h-auto mb-2"
          />
          <p>Cameron Leather Boot</p>
          <p>Price: R 450</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
