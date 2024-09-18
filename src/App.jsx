import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./utility/ProtectedRoute";
import FreePage from "./pages/FreePage";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/free" element={<FreePage />} />
        <Route path="/subscribe/:priceId" element={<SubscriptionPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;