import reactImg from "../assets/react.svg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { setUser } = useUserStore();

  const Navigate = useNavigate();

  return (
    <section className=" w-full h-dvh flex flex-col items-center justify-center bg-gray-50 space-y-4">
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
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              setUser(decoded);
              Navigate("/Home");
              console.log();
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
