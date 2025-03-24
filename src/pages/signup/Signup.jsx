import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[375px] border border-gray-300 h-screen w-full mx-auto p-6 bg-gray-100 flex flex-col">
      <div>
        <h2 className="text-3xl font-bold mb-8">
          Create your <br /> PopX account
        </h2>

        <form className="flex flex-col h-full">
          {[
            "Full Name",
            "Phone Number",
            "Email Address",
            "Password",
            "Company Name",
          ].map((label, index) => (
            <div
              key={index}
              className={`relative ${index < 4 ? "mb-6" : "mb-3"}`}
            >
              <div className="relative">
                <input
                  type={index === 3 ? "password" : "text"}
                  placeholder={
                    label === "Company Name"
                      ? "Company name (optional)"
                      : `Enter ${label.toLowerCase()}`
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                  required={index < 4}
                />
                <label className="absolute -top-3 left-3 px-1 text-sm font-semibold text-[#6C25FF] bg-gray-100">
                  {label}
                  {index < 4 && "*"}
                </label>
              </div>
            </div>
          ))}

          <div className="mb-6">
            <div className="relative">
              Are you an Agency?*
              <div className="flex items-center space-x-4 pt-2">
                {["Yes", "No"].map((option, idx) => (
                  <label key={idx} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="agency"
                      value={option.toLowerCase()}
                      className="w-4 h-4 text-[#6C25FF] focus:ring-[#6C25FF]"
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/account")}
            type="submit"
            className="w-full bg-[#6C25FF] text-white py-3 rounded-md font-medium hover:bg-[#5815e0] transition mt-auto"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
