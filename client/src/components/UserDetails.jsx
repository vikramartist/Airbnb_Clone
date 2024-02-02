import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="w-[14rem] h-[12rem] flex flex-col gap-4 items-start px-4 py-5 bg-white rounded-lg shadow-lg shadow-gray-200 absolute right-2 top-[4.5rem]">
      <Link to={"/register"} className="cursor-pointer text-sm font-semibold">
        Sign up
      </Link>
      <Link to={"/login"} className="cursor-pointer text-sm">
        Login
      </Link>
      <hr className="m-auto" />
    </div>
  );
};

export default UserDetails;
