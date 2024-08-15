import { FiEdit3 } from "react-icons/fi";
import profilePic from "../assets/user.png";
import { useSearch } from "../providers/useSearch";

const ProfileDetails = () => {
  const { currentUser, setCurrentUser } = useSearch();
  const logout = async () => {
    try {
      await fetch("/api/user/signout");
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
    console.log("logout");
  };

  return (
    <section>
      <div className="grid grid-cols-12 gap-10 px-10">
        <div className="relative col-span-3 aspect-square rounded-full">
          <img
            src={profilePic}
            alt="user profile picture"
            className="aspect-square rounded-full"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
          <FiEdit3 size={24} className="" />
          Edit
          </button>
        </div>
        <div className="col-span-9 flex flex-col py-3 gap-y-4">
          <div className="flex justify-between items-center text-white">
            <h2 className="text-5xl font-bold">
              {currentUser.name}
            </h2>
            <button className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
              <FiEdit3 size={24} className="" />
              Change
            </button>
          </div>
          <div className="grid grid-cols-9 items-center text-white">
            <div className="col-span-2 text-2xl font-light">
              name:
            </div>
            <div className="col-span-7 flex justify-between">
              <div className="text-2xl font-bold">
                {currentUser.name}
              </div>
              <button className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
                <FiEdit3 size={24} className="" />
                Change
              </button>
            </div>
          </div>
          <div className="grid grid-cols-9 items-center text-white">
            <div className="col-span-2 text-2xl font-light">
              Email Address:
            </div>
            <div className="col-span-7 flex justify-between">
              <div className="text-2xl font-bold">
                {currentUser.email}
              </div>
              <button className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
                <FiEdit3 size={24} className="" />
                Change
              </button>
            </div>
          </div>
          <div className="grid grid-cols-9 items-center text-white">
            <div className="col-span-2 text-2xl font-light">
              Default Location:
            </div>
            <div className="col-span-7 flex justify-between">
              <div className="text-2xl font-bold">
                Toronto, Ontario, Canada
              </div>
              <button className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
                <FiEdit3 size={24} className="" />
                Change
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center text-white">
            <div className="col-span-7 flex justify-end">
              <div className="flex gap-x-5">
                <button className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm">
                  Change Password
                </button>
                <button
                  onClick={logout}
                  className="flex gap-[10px] px-6 py-1 items-center shadow-glass bg-black/40 rounded-full italic text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
