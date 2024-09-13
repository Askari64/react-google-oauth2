import useUserStore from "../store/userStore";
import Profile from "../components/Profile";

function FreePage() {
    const { user } = useUserStore();
  return (

    <div className=" w-dvw flex flex-col">
      <div className=" flex flex-col gap-5 my-10 justify-center items-center">
        <Profile name={user.name} email={user.email} picture={user.picture} />
        <h1 className=" text-2xl font-bold" >Free Plan 🎉</h1>
      </div>
    </div>
  )
}

export default FreePage