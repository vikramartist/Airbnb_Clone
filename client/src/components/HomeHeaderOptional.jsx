import { NavLink } from "react-router-dom";

const HomeHeaderOptional = () => {
  return (
    <section className="w-1/3 text-sm text-center flex justify-center items-center gap-1 font-light text-md">
      <NavLink className="hover:bg-gray-100 cursor-pointer hover:rounded-xl py-1 px-3 active:font-bold">
        Stays
      </NavLink>
      <NavLink className="hover:bg-gray-100 cursor-pointer hover:rounded-xl py-1 px-3 active:font-bold">
        Experiences
      </NavLink>
      <NavLink className="hover:bg-gray-100 cursor-pointer hover:rounded-xl py-1 px-3 active:font-bold">
        Online Experiences
      </NavLink>
    </section>
  );
};

export default HomeHeaderOptional;
