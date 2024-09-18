import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const SubscriptionPage = () => {
  const { priceId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Subscribe</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <CheckoutForm selectedPriceId={priceId} />
      </div>
    </div>
  );
};

export default SubscriptionPage;