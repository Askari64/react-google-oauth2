import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useUserStore from "../store/userStore";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ selectedPriceId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUserStore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      const response = await fetch("https://k4dllrexf1.execute-api.ap-south-1.amazonaws.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, email: user.email, priceId: selectedPriceId }),
      });

      const subscription = await response.json();
      console.log(subscription);
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-4">Complete Your Subscription</h2>
      
      <div className="mb-4">
        <label htmlFor="card" className="block text-sm font-medium text-gray-700">Card Details</label>
        <CardElement className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      <button 
        type="submit" 
        disabled={!stripe} 
        className="w-full mt-5 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

export default CheckoutForm;