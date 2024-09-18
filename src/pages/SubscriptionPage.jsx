import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckOutForm";
import { useState, useEffect } from "react";
import useUserStore from "../store/userStore";

const stripePromise = loadStripe('pk_test_51PyW8y2KAA8OEDPVG3jsz7Q8ZBPdDux8SggaxYXTE9g2BuH3b6cppwm3uZCOyVkDb8Oow74OpnyFkkbY6CpYAjxk00xkxNQVRt');

const SubscriptionPage = () => {
  const { priceId } = useParams();
  const [clientSecret, setClientSecret] = useState("");

  const { user } = useUserStore()

  useEffect(() => {
    if (priceId && user.email) { // Ensure both are defined
      fetch("http://localhost:5000/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, email: user.email }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch client secret");
          }
          return res.json();
        })
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => console.error("Error fetching client secret:", error));
    }
  }, [priceId, user.email]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Subscribe</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        { stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm selectedPriceId={priceId} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;