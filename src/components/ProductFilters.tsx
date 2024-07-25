import React from 'react';

const ProductFilters: React.FC = () => {
  return (
    <div className="p-4 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Search Reway</h2>
      <form>
        <div className="mb-4">
          <label className="block font-bold mb-2">Search</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Aubrey" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>
      </form>
    </div>
  );
};

export default ProductFilters;
