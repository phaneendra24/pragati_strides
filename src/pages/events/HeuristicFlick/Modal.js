import { motion, spring } from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      duration: 0.1,
      type: spring,
      damping: 25,
      stiffneess: 500,
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-[90%] sm:w-[70%]   flex flex-col  mt-24 overflow-y-scroll p-4 "
        // onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col">
          <div className="w-full flex justify-between mb-10">
            <p className="text-purple-700 text-4xl">Heuristic Flick</p>
            <button className="h-fit p-1 sm:p-2 w-14 bg-purple-700 ">
              close
            </button>
          </div>
          <div className="w-full">
            <div className="w-full">
              <img src="/eventPosters/heuristic.jpg" className="w-72 " />
            </div>
            <h1 className="bg-teal-700 w-fit p-2 pr-2 text-xl font-medium mt-8">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5">
              The technical topics that can be used for making Short films are-
              <br />
              <div className="ml-6">
                The power of Big data or data visualisation.
                <br /> Possibilities in Automated vehicles.
                <br /> The potential of Block chain technology
                <br /> Role of robotics in automation
                <br /> Future of A.I ( how the applications made future more
                easy compared to today)
                <br /> Job based - Explaining more job scope either in ai or
                cloud computing etc
              </div>
              <br /> Other Topics can be -<br />
              <div className="ml-6">
                Interview panel or Interview preparation Role or impact of
                technology in students Life (A msg For the ones who's wasting
                time and not caring about their future) Social Media Advantages,
                disadvantages Social media growth from past to present Imp of
                Time management (exams, or any other situation) Necessity of
                Stress management
              </div>
            </p>
          </div>
          <div className="mt-10">
            <h1 className="bg-teal-700 w-fit px-2 text-xl font-medium">
              Prize Pool
            </h1>
            <div className="flex gap-10">
              <p className="mt-5">First Prize : 1200/-</p>
              <p className="mt-5">Second Prize : 800/-</p>
              <p className="mt-5">Third Prize : 500/-</p>
            </div>
          </div>
          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 pr-2 text-lg font-medium mt-8 mb-1">
              Rules
            </h1>
            -The participant must choose from the topics given .
            <br />
            -Number of participants is restricted to 3-6 members only .
            <br />- The video presentations can be done in any of the three ways
            - short videos or animations or even slideshows with transitions
            with voiceover (preferred not mandatory).
            <br />
            -Strictly restrict any kind of vulgarity in the film.
            <br />
            -Evaluation will be done based on the judgement during the event .
          </div>
          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Co-ordinators Details
            </h1>
            <ul className="mt-2">
              <li>
                C.Swetha
                <span className="text-blue-400 pl-11">Contact: 7995972848</span>
              </li>
              <li>
                A.Vinod
                <span className="text-blue-400 pl-11">Contact: 9398734369</span>
              </li>
            </ul>
          </div>

          <div className="flex-col sm:flex mt-8 text-lg">
            <div className="bg-teal-700 p-1 w-fit text-lg font-medium mr-10">
              Registration Fee
            </div>
            <div className="mt-2">No Registration Fee required</div>
          </div>
          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              EVENT DATE
            </h1>
            <p>3rd March 2023</p>
            <p>Last date for Registration - some date </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
