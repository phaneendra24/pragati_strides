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
            <p className="text-purple-700 text-4xl">Adventure Quest</p>
            <button className="h-fit p-1 sm:p-2 w-14 bg-purple-700 ">
              close
            </button>
          </div>
          <div className="w-full">
            <div className="w-full">
              <img src="/poster.png" className="w-72 " />
            </div>
            <h1 className="bg-teal-700 w-fit p-2 text-xl font-medium mt-8">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5 text-center"></p>
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
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Co-ordinators Details
            </h1>
            <ul className="mt-2">
              <li>
                D.Adithya Kumar Reddy
                <span className="text-blue-400 pl-11">Contact: 9390799936</span>
              </li>
              <li>
                G.Srujana
                <span className="text-blue-400 pl-11">Contact: 8790216597</span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              DATE
            </h1>
            <p>3rd March 2023</p>
            <p>Registration last date : </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
