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
            <p className="text-purple-700 text-4xl">Tech Connect</p>
            <button className="h-fit p-1 sm:p-2 w-14 bg-purple-700 ">
              close
            </button>
          </div>
          <div className="w-full">
            <div className="w-full">
              <img src="/poster.png" className="w-72 " />
            </div>
            <h1 className="bg-teal-700 w-fit p-2 pr-2 text-xl font-medium mt-8">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5">
              1.The first round is “Odd One Out”- In this Participants have to
              select the odd one in the given technical question.
              <br /> 2. The second round is “Technical Quiz”- In this
              Participants are allotted questions are based on the latest
              technologies and further more. The third round is “Debug The
              Code”- In this some codes are allotted and participants need to
              find the error. <br /> Evaluation Procedure: <br />
              Participants will be shortlisted in each round depending on score
              secured. In case of tie breaker, we will consider best time.
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
          <div>
            <h1 className="bg-teal-700 w-fit p-1 pr-2 text-lg font-medium mt-8 mb-1">
              Rules
            </h1>
            -Only individual participation is allowed to participate in the
            event.
            <br />
            -Participants must have "Unstop" account (details will be provided
            in prior).
            <br />- Participant should participate in the given allotted time.
          </div>
          <div>
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Co-ordinators Details
            </h1>
            <ul className="mt-2">
              <li>
                J V S BHARGAVI
                <span className="text-blue-400 pl-11">Contact: 9490863868</span>
              </li>
              <li>
                G.DILEEP
                <span className="text-blue-400 pl-11">Contact: 8919035396</span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Faculty co-ordinators
            </h1>
            <ul className="mt-2">
              <li>Dr.Subodh Kumar panda</li>
              <li>Dr.k.lakshmi viveka</li>
            </ul>
          </div>
          <div className="flex-col sm:flex mt-8">
            <div className="bg-teal-700 p-1 w-fit text-lg font-medium mr-10">
              Registration Fee
            </div>
            <div className="mt-2">No Registration Fee required</div>
          </div>
          <div>
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
