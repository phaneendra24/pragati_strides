import { useEffect, useRef, useState } from "react";
import Heuristic from "./events/HeuristicFlick/Heuristic";
import TechConnect from "./events/TechConnect/TechConnect";
import TrickyZone from "./events/TrickZone/TrickyZone";
import AdventureQuest from "./events/adventureQuest/AdventureQuest";

const Events = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center bg-[#14141c]  text-white ">
      {/* events parent body div */}
      <div className="sm:w-[100%] flex flex-col">
        {/* main grid  */}
        <Heuristic />
        <TechConnect />
        <TrickyZone />
        <AdventureQuest />
      </div>
    </div>
  );
};

export default Events;
