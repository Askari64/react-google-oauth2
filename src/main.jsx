import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const clientID = import.meta.env.VITE_CLIENT_ID;
const stripePromise = loadStripe("pk_test_51PyW8y2KAA8OEDPVG3jsz7Q8ZBPdDux8SggaxYXTE9g2BuH3b6cppwm3uZCOyVkDb8Oow74OpnyFkkbY6CpYAjxk00xkxNQVRt");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientID}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);