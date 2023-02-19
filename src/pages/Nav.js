import { useState } from "react";

const Nav = () => {
  let Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Register",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdBfdmESh0BrMTqPeG42sH16n7n8UoR6ruFTABKetuzvj3FIQ/viewform?usp=sf_link",
    },
    {
      name: "Events",
      link: "/Events",
    },
  ];
  let [menu, setmenu] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 text-white z-[1] ">
      <div className="md:flex items-center justify-between bg-[#14142b]  py-4 md:px-10 px-7">
        {/* <div className="font-bold text-2xl cursor-pointer flex items-center"> */}
        <div>
          <svg viewBox="0 0 1320 300" className="logo-svg w-34 h-11  pr-3">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              text-anchor="middle"
              className="logo-text"
            >
              E-ARTIFACT
            </text>
          </svg>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setmenu(!menu)}
        >
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <ul
          className={`absolute bg-[#14142b] md:flex md:items-center md:pb-0 pb-12 md:static  md:z-auto z-[-1] left-0 w-full md:w-full md:justify-end md:gap-20 md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menu ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((Link) => (
            <li
              key={Link.name}
              className="relative md:ml-8 text-xl
            hover:duration-500
        motion-safe:transition-all motion-safe:duration-200
        hover:text-xl font-semibold
        md:my-0 my-7

            "
            >
              <a href={Link.link} className="nav">
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Nav;
