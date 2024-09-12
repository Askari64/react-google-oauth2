import useUserStore from "../store/userStore";
import Profile from "../components/Profile";
import LogoutButton from "../components/LogoutButton";
import Card from "../components/Card";

function Home() {
  const { user } = useUserStore();
  return (
    <div className=" w-dvw flex flex-col">
      <div className=" flex flex-col gap-5 my-10 justify-center items-center">
        <Profile name={user.name} email={user.email} picture={user.picture} />
        <LogoutButton />
      </div>
      <Card />
    </div>
  );   
}

export default Home;
