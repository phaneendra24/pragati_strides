import { useEffect, useRef, useState } from "react";
import Heuristic from "./events/Heuristic";
import TechConnect from "./events/TechConnect";

const Events = () => {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center bg-[#14141c]  text-white ">
        {/* events parent body div */}
        <div className=" w-[95%] sm:w-[90%] flex flex-col">
          {/* main grid  */}
          <Heuristic />
          <TechConnect />
        </div>
      </div>
    </>
  );
};

export default Events;
