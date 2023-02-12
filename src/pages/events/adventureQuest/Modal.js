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
        className="w-[50%] h-[50%] flex flex-col items-center"
        // onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="h-1/2 w-full flex flex-col justify-evenly items-center">
          <p className="text-white">Some Description need to be provided</p>
          <button className="p-2 w-14 bg-purple-700 ">close</button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
