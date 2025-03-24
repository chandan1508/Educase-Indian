import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center border border-gray-300 max-w-[375px] h-screen mx-auto bg-gray-100">
      <div className="p-6 w-full mt-auto">
        <div className="text-left mb-4">
          <h1 className="text-2xl font-medium">Welcome to PopX</h1>
          <p className="text-gray-500 text-base mt-1">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
          </p>
        </div>

        <button 
          onClick={() => navigate("/signup")}
          className="w-full bg-[#6C25FF] text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Create Account
        </button>
        <button 
          onClick={() => navigate("/signin")}
          className="w-full mt-2 bg-purple-100 text-purple-700 py-3 rounded-lg font-medium hover:bg-purple-200 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
