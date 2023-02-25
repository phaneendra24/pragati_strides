import { Blinker, Inter } from "@next/font/google";
import Nav from "./Nav";

import SvgCom from "./home/Svg-component";
import Welcome from "./home/Welcome";

import { motion } from "framer-motion";
import About from "./about/About";
import Footer from "./footer/Footer";
import { useInView } from "react-intersection-observer";
import Head from "next/head";

export default function Home() {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <Head>
        <title>E-ARTIFACT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" w-[100%]">
        <marquee
          className="text-white absolute left-[15%] sm:left-[10%] right-0 top-24 sm:top-28"
          width="70%"
        >
          Last Date for Registrations - 26th February 2023
        </marquee>
        <div className="main-section bg-home-bg w-[100%] h-[100vh] text-white ">
          <div className="sm:mt-32 mt-24 w-[100%] flex justify-between">
            <div className="h-[70%] flex flex-col justify-start ml-10 gap-10">
              <motion.h1 className="text-lg sm:text-3xl text-teal-700">
                Pragati Engineering college
              </motion.h1>
              <h3 className="text-[#b968c7] sm:text-2xl text-4xl">
                E-ARTIFACT
              </h3>
              <div className="pr-10 sm:4/6 text-xl">
                Modern technology is not good or evil in itself.<br></br> It's
                all about how people choose to use it.
              </div>
              <Welcome />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdBfdmESh0BrMTqPeG42sH16n7n8UoR6ruFTABKetuzvj3FIQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="w-48 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
                  >
                    Register Now
                  </motion.button>
                </div>
              </a>
            </div>
            <SvgCom />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
}
