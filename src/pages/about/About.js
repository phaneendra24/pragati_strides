import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  console.log(inView);

  return (
    <div className="py-32 w-[100%] bg-[#161123] text-white flex flex-col  items-center justify-evenly ">
      <motion.div
        className={`about bg-purple-700 inline-block text-gray-900 px-6 py-4 md:text-6xl shadow-xl 
        ${
          inView
            ? "opacity-1 transition-all duration-1000 ease-out translate-y-0"
            : "opacity-0  translate-y-[20%]"
        }`}
        ref={ref}
      >
        About event
      </motion.div>
      <div
        className={`pt-10 w-[90%] md:w-[60%] text-center text-lg md:text-2xl
        ${
          inView
            ? "opacity-1 transition-all duration-500 ease-out translate-y-0"
            : ""
        }
      `}
      >
        Put your technical skills on display at{" "}
        <span className="text-teal-700">"STRIDES E-ARTIFACT 2K23"</span> . Our
        event aims to bring together the brightest minds in the field to
        showcase their skills and knowledge. With a wide range of competitions
        designed to challenge and engage, this event is the perfect platform for
        students,and tech enthusiasts to learn, grow, and network. Whether
        you're a seasoned veteran or just starting out, "E-Artifact" provides an
        opportunity for everyone to demonstrate their mastery and push their
        boundaries. So come on and join us for a thrilling journey through the
        world of technology. Register now and be a part of the "E-Artifact"
        experience!
      </div>
    </div>
  );
};

export default About;
