import useUserStore from "../store/userStore";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    
  const { logoutUser } = useUserStore();
  const Navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    googleLogout();
    Navigate("/");
    console.log("🔴 Logged Out");
  };

  return (
    <button className=" bg-red-300 text-black p-2" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
