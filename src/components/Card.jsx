import { useNavigate } from "react-router-dom";
function Card() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-around gap-8 py-8">
      {Tiers.map((tier, index) => (
        <div
          key={index}
          className="bg-white shadow-lg p-8 rounded-lg w-80 flex flex-col items-center transition-transform transform hover:scale-105 duration-300"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-wide">
            {tier.name}
          </h3>
          <ul className="mb-6 text-gray-700 text-left w-full">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="mb-2 flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="text-xl font-bold text-green-500 rounded-full border-2 bg-white border-green-500 px-6 py-2 hover:text-white hover:bg-green-500 transition-colors duration-300"
          onClick={() => {
            if (tier.route) {
              navigate(tier.route)
            }
          }} >
            {tier.price === 0 ? "FREE" : `$ ${tier.price}/month`}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;

const Tiers = [
  {
    name: "Free",
    price: 0,
    features: [
      "Basic support",
      "Access to limited resources",
      "Community access",
    ],
    route: "/free",
  },
  {
    name: "Silver",
    price: 4.99,
    features: [
      "Priority support",
      "Access to premium resources",
      "10GB cloud storage",
      "Community access",
    ],
    route: null,
  },
  {
    name: "Gold",
    price: 9.99,
    features: [
      "24/7 support",
      "Unlimited resources",
      "50GB cloud storage",
      "VIP community access",
    ],
    route: null,
  },
];
