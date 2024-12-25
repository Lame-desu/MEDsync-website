import React from "react";
import AuthCard from "../../Components/AuthCard/AuthCard.jsx";

const AuthPage = () => {
  return (
    <div
      className="max-w-screen-lg bg-primary mx-auto p-8 text-center"
      id="root"
    >
      <h1>I am biruk</h1>
      <div className="flex h-screen">
        {/* Left Section: Background Image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/background.jpg')" }}
        ></div>

        {/* Right Section: Aqua Background with Login Card */}
        <div className="w-1/2 bg-aqua flex justify-center items-center">
          <div className="bg-white w-4/5 max-w-sm p-8 rounded-lg shadow-lg">
            {/* Auth Card Component */}
            <AuthCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
