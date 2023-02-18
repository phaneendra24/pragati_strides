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
        className="w-[80%] sm:w-[70%]   flex flex-col items-center mt-24 overflow-scroll p-4"
        // onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col">
          <div className="w-full flex justify-between mb-10">
            <p className="text-purple-700 text-4xl">TechConnect</p>
            <button className="p-2 w-14 bg-purple-700 ">close</button>
          </div>
          <div className="w-full">
            <h1 className="bg-teal-700 w-fit p-2 text-xl font-medium">
              Description
            </h1>
            <p className="h-2/3 text-lg mt-5">
              Welcome to our Machine Learning for Students!
              <br /> Are you interested in applying your machine learning skills
              in a fun and competitive environment? Look no further! Our
              competition is designed to challenge students to develop
              innovative solutions using machine learning techniques.
              <br /> To participate in the competition, students will be
              required to submit a project proposal outlining their intended
              approach and goals. The project can be on any topic related to
              machine learning, such as image recognition, natural language
              processing, predictive modeling, or any other relevant area. The
              proposal should include a clear problem statement, data sources,
              and a description of the machine learning techniques that will be
              applied.
              <br />
              Finally, the top performing models will be evaluated, and the
              winners will be announced. The winners will be determined based on
              the performance of their models, the novelty and creativity of
              their approach, and the overall quality of their project.
              <br /> The top winners will be awarded prizes and recognition for
              their achievement, and all participants will have the opportunity
              to showcase their work and network with other students and
              professionals in the field of machine learning.
              <br /> So, are you ready to put your machine learning skills to
              the test and compete for the top prize? Submit your project
              proposal today and show us what you're made of!
            </p>
          </div>
          <div className="mt-10">
            <h1 className="bg-teal-700 w-fit px-2 text-xl font-medium">
              Price
            </h1>
            <p className="mt-5">prices will be distributed accordingly</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
