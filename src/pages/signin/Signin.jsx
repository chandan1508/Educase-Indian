import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[375px] border border-gray-300 w-full h-screen mx-auto p-6 bg-gray-100">
      <h2 className="text-3xl font-medium mb-2">Sign in to your <br/> PopX account</h2>
      <p className="text-gray-600 text-[20px] mb-4">
        Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.
      </p>
      
      <form>
        {["Email Address", "Password"].map((label, index) => (
          <div key={index} className="mb-6 relative">
            <div className="relative">
              <input 
                type={index === 1 ? "password" : "email"} 
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full p-3 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label className="absolute -top-3 left-3 text-[#6C25FF] px-1 text-sm font-semibold  bg-gray-100">
                {label}
              </label>
            </div>
          </div>
        ))}

        <button 
          onClick={() => navigate("/account")}
          type="submit" 
          className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;