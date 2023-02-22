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
            <p className="text-purple-700 text-4xl">AdventureQuest</p>
            <button className="h-fit p-1 sm:p-2 w-14 bg-purple-700 ">
              close
            </button>
          </div>
          <div className="w-full">
            <div className="w-full">
              <img src="/eventPosters/AdventureQuest.jpg" className="w-72 " />
            </div>
            <h1 className="bg-teal-700 w-fit p-2 pr-2 text-xl font-medium mt-8">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5">
              It is an exciting event of searching something that is difficult
              to find.It is an online experience that challenges players to find
              specified items or solve puzzles before the allotted time runs
              out.Finding a treasure by passing the challenges through the clues
              from previous levels....The challenges may include any technical
              questions and tricky questions.You need to solve questions to get
              to the next question or clue and one step closer to the final
              prize. The type of question will be changing from one level to the
              next, but it would have one thing in common- we will make you
              scratch your brains out !!!
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
            *Merit certificates will be issued to the winners* **E-certificates
            will be issued for all participants **
          </div>

          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 pr-2 text-lg font-medium mt-8 mb-1">
              Guidlines:-
            </h1>
            1)Number of participants restricted to 1 member only. <br /> 2)Every
            registered student can access the link only once.
            <br /> 3) The participant who clears all the challenges as early as
            possible will be awarded the first position and remaining as
            follows. <br />
            4)Only the person who registered will be able to take the quest from
            the registered email id <br />
            5)Do not share the clue with others you may lose your position.
          </div>
          <div className="text-lg">
            <h1 className="bg-teal-700 w-fit p-1 text-lg font-medium mt-8">
              Co-ordinators Details
            </h1>
            <ul className="mt-2">
              <li>
                SRUJANA
                <span className="text-blue-400 pl-11">Contact: 8790216597</span>
              </li>
              <li>
                ADITHYA 
                <span className="text-blue-400 pl-11">Contact: 9390799936</span>
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
