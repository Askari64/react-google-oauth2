import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

const clientID = import.meta.env.VITE_CLIENT_ID;;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientID}>
          <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);