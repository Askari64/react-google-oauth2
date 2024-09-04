import reactImg from "../assets/react.svg";
import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Profile from "../components/profile";

function Auth() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    googleLogout();
    console.log("🔴 Logged Out");
  };

  return (
    <section className=" w-full h-dvh flex flex-col items-center justify-center bg-gray-50 space-y-4">
    
    {(user) && <Profile name={user.name} email={user.email} picture={user.picture} />}
    
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
        <div className="p-8 my-auto flex justify-center">
          {user ? (
            <button className=" bg-red-300 text-black p-2"
             onClick={handleLogout}>Logout</button>
          ) : (
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                console.log(decoded);
                setUser(decoded);
                console.log()
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Auth;
