import React from "react";

const MailingListSignup: React.FC = () => {
  return (
    <div className="p-4 border rounded bg-white shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">SIGN UP TO OUR MAILING LIST!</h2>
      <input
        type="email"
        placeholder="Enter email address"
        className="w-full p-2 border rounded mb-2"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        Submit
      </button>
    </div>
  );
};

export default MailingListSignup;
