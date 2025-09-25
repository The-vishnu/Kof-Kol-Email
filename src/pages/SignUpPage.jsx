import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { EyeIcon, EyeOff, MailCheck } from "lucide-react"; 
import { KofKol} from "../assets/Kof-Kol.png"


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  })

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <div className="w-[500px] bg-gray-200 shadow-lg rounded-3xl overflow-hidden">
          {/* Header like a mailbox tab */}

          {/* Form body */}
          <div className="p-6 flex flex-col gap-5">
            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Username */}

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Username
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-600 font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
              />
              {showPassword ? (
                <EyeIcon
                  className="absolute right-3 top-[50px] -translate-y-1/2 text-gray-500 cursor-pointer"
                  size={20}
                  onClick={handleShowPassword}
                />
              ) : (
                <EyeOff
                  className="absolute right-3 top-[50px] -translate-y-1/2 text-gray-500 cursor-pointer"
                  size={20}
                  onClick={handleShowPassword}
                />
              )}
            </div>

            {/* Submit button */}
            <button className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 cursor-pointer transition">
              Sign Up
            </button>
          </div>

          {/* Footer */}
          <div className="p-4 text-center text-sm text-gray-500">
            already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
               login
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ml-[50px]">
        <div>
            <img src={KofKol} alt="Kof-Kol Logo" />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
