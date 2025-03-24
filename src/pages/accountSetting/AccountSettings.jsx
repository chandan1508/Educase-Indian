import React from "react";
import "remixicon/fonts/remixicon.css";

const AccountSettings = () => {
  return (
    <div className="max-w-[375px] border border-gray-300 h-screen w-full mx-auto  bg-gray-100">
      <div className="bg-white p-6 mb-4">
        <h2 className="text-xl text-gray-500 font-medium">Account Settings</h2>
      </div>

      {/* Profile Section */}
      <div className=" pl-6 ">
        <div className="flex items-start space-x-4">
          {" "}
          {/* Changed to items-start */}
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="./photo.jpg"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            {/* Small Icon on Picture */}
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] w-5 h-5 flex items-center justify-center rounded-full">
              <span className="text-white text-xs">
                <i className="ri-camera-fill"></i>
              </span>
            </div>
          </div>
          {/* Name & Email - now properly aligned to start */}
          <div className="relative top-[-8px] flex flex-col items-start">
            {" "}
            {/* Added pt-1 for slight upward shift */}
            <p className="text-lg font-semibold text-gray-900">Marry Doe</p>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* Thicker Dashed Divider */}
      <div className="border-t-2 border-dashed border-gray-400 mt-4"></div>
    </div>
  );
};

export default AccountSettings;
