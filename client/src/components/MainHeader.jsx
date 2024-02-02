import { useState } from "react";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HomeHeaderOptional from "./HomeHeaderOptional";

/* eslint-disable react/prop-types */
const MainHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [userDetailsDisplay, setUserDetailsDisplay] = useState(false);
  return (
    <>
      {!isClicked && (
        <div className="bg-gray-100 p-5 flex justify-center items-center relative">
          <a href="#" className="text-black underline font-medium">
            Learn about Guest Favourites, the most loved homes on Airbnb
          </a>
          <span
            onClick={() => setIsClicked(true)}
            className="absolute text-sm px-1 font-semibold cursor-pointer text-black top-2 right-3"
          >
            X
          </span>
        </div>
      )}
      <div className="w-full sticky top-0 bg-white">
        <header className="w-full flex py-4 lg:px-[5rem] md:px-[2rem] sm:px-[1rem] items-center justify-between">
          <Link to={"/"} className="text-sm text-red-500 flex">
            <Logo />
          </Link>
          <HomeHeaderOptional />
          <section className="w-1/8 flex items-center justify-center gap-1">
            <div className="text-sm font-semibold cursor-pointer hover:rounded-lg hover:bg-gray-50 p-2">
              Airbnb your home
            </div>
            <span className="cursor-pointer hover:rounded-xl hover:bg-gray-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </span>
            <div
              onClick={() => setUserDetailsDisplay((display) => !display)}
              className="relative flex items-center gap-[0.5rem] border-2 p-2 rounded-3xl hover:shadow-md cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
              <span className="w-8 h-8 bg-gray-300 rounded-2xl">
                <img src="" alt="" />
              </span>
            </div>
          </section>
          {userDetailsDisplay && <UserDetails />}
        </header>
        <section className="flex items-center justify-evenly m-auto border-2 lg:w-[55vw] md:w-[60vw] sm:w-[95vw] h-[4rem] rounded-full shadow-md">
          <div className="w-1/2 hover:rounded-full px-6 hover:py-3 border-r-2 cursor-pointer hover:bg-gray-200">
            <p className="text-[0.8rem] w-full h-full font-semibold">Where</p>
            <label htmlFor="input-dest"></label>
            <input
              type="text"
              id="input-dest"
              name="destination"
              className="border-none outline-none text-sm w-[10rem] bg-transparent"
              placeholder="Search destinations"
            />
          </div>
          <div className="w-1/4 -ml-2 px-6 hover:py-3 hover:rounded-full border-r-2 cursor-pointer hover:bg-gray-200">
            <p className="text-[0.8rem] font-semibold">Check-in</p>
            <span className="text-sm font-light">Add dates</span>
          </div>
          <div className="w-1/4 -ml-2 px-6 hover:py-3 border-r-2 hover:rounded-full cursor-pointer hover:bg-gray-200">
            <p className="text-[0.8rem] font-semibold">Check-out</p>
            <span className="text-sm font-light">Add dates</span>
          </div>
          <div className="w-1/2 -ml-2 px-5 hover:py-3 hover:bg-gray-200 hover:rounded-full cursor-pointer flex items-center justify-between">
            <div>
              <p className="text-[0.8rem] font-semibold">Who</p>
              <span className="text-sm font-light">Add guests</span>
            </div>
            <span className="bg-rose-500 p-3 rounded-full flex gap-1 text-md items-center text-white hover:bg-red-500 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              {isClicked ? `Search` : ""}
            </span>
          </div>
        </section>
        <hr className="mt-6" />
      </div>
    </>
  );
};

export default MainHeader;
