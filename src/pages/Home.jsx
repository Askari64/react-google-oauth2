import useUserStore from "../store/userStore";
import Profile from "../components/Profile";

function Home() {
  const { user } = useUserStore();
  return <Profile name={user.name} email={user.email} picture={user.picture} />;
}

export default Home;
