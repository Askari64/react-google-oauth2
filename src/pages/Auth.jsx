import reactImg from "../assets/react.svg";
import { useState } from "react";
import { GoogleLogin , googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function Auth() {
  const [user , setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    googleLogout();
    console.log("🔴 Logged Out");

  }

  return (
    <section className=" w-full h-dvh flex items-center justify-center bg-gray-50">
      <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto px-6 shadow-lg rounded-lg bg-white">
        {/* Left */}
        <div className=" p-8 space-y-2">
          <img
            src={reactImg}
            alt="react logo"
            className="animate-[spin_10s_linear_infinite] mx-auto"
          />
          <h1 className=" font-semibold text-xl text-gray-950 text-center">
            React - OAuth 2.0
          </h1>
          <p className=" font-normal text-lg text-gray-700">
            Login with Google OAuth2.0
          </p>
        </div>

        {/* Right */}
        <div className="p-8 my-auto">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              setUser(decoded)
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </section>
  );
}

export default Auth;
