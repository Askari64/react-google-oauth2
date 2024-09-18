import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completed`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Payment succeeded!");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-4">Complete Your Subscription</h2>
      <div className="mb-4">
        <PaymentElement />
      </div>
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full mt-5 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {isProcessing ? "Processing" : "Pay Now"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CheckoutForm;