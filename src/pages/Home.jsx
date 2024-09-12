import useUserStore from "../store/userStore";
import Profile from "../components/Profile";
import LogoutButton from "../components/LogoutButton";

function Home() {
  const { user } = useUserStore();
  return (
    <>
      <Profile name={user.name} email={user.email} picture={user.picture} />
      <LogoutButton />
    </>
  );
}

export default Home;
