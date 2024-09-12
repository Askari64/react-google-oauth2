import useUserStore from "../store/userStore";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useUserStore();

  if (!user) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
