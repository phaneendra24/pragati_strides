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
            <p className="text-purple-700 text-4xl">TrickyZone</p>
            <button className="h-fit p-1 sm:p-2 w-14 bg-purple-700 ">
              close
            </button>
          </div>
          <div className="w-full">
            <div className="w-full">
              <img src="/eventPosters/trickyzone.jpg" className="w-72 " />
            </div>
            <h1 className="bg-teal-700 w-fit p-2 pr-2 text-xl font-medium mt-8">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5">
              Our event consists of two rounds.
              <br />
              round 1- Brain Teaser
              <br />
              It mainly focusses on finding words in the puzzle. Where we
              provide a puzzle and hints related to find the technical word. And
              the hint also contain more than symbolic word the participants
              have to choose the right word and have to fill in the given space.
              The participant who find maximum words will be allowed to the
              round-2.
              <br />
              round 2 - Code Comprehension
              <br />
              The round 2 is a code comprehension where the participants who got
              filtered in round 1 are allowed to participate where they have to
              write the optimized code for the given code with more efficiency.
              The participant who tends to complete the code faster and with
              accurate answer will be the winner. Guidelines for Round-1:
              <br />
              1. The participation should be individual.
              <br />
              2. The participant must have to fill the answer that match with
              the word in the puzzle only, then only marks will be awarded if
              any word other than the answer will not be considered.
              <br />
              3.The students have to answer them perfectly in the allotted time
              only.
              <br />
              Guidelines for Round-2:
              <br />
              1.The students who got filtered in Round 1 only will be allowed to
              participate.
              <br />
              2.Problem statement will be given and the participant must write
              the code (any programming language).
              <br />
              3.The code must be written in the optimized way (better
              efficiency).
              <br />
              4.The participant must have to pass all the test cases .<br />
              5.Participant must submit their codes in the alloted time only.
              <br />
              6.No plagiarism should be encouraged.
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
            *Merit certificates will be issued to the winners*
            <br /> **E-certificates will be issued for all participants **
          </div>
          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Co-ordinators Details
            </h1>
            <ul className="mt-2">
              <li>
                Nazmeer
                <span className="text-blue-400 pl-11">
                  Contact: 91537 44777
                </span>
              </li>
              <li>
                Venkata Surya
                <span className="text-blue-400 pl-11">
                  Contact: 91 95500 49654
                </span>
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
