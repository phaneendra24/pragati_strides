import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import EventNav from "../EventNav";
import Modal from "./Modal";

const TechConnect = () => {
  const { ref, inView, entry } = useInView();
  const [modalOpen, setModelOpen] = useState(false);
  const open = () => setModelOpen(true);
  const close = () => setModelOpen(false);

  const eventRules = [
    "some random text to display",
    "some random text to display",
    "some random text to display",
    "some random text to display",
  ];

  return (
    <>
      <div
        className="relative w-[100%] md:flex-col md:items-center px-10 mb-10"
        id="gimmeFocus-Tech"
      >
        <EventNav />
        <div className="md:flex mt-7 md:justify-between md:w-auto">
          <div id="TechConnect" className="text-[#64239f] text-4xl md:ml-6 ">
            TechConnect
          </div>
          <div className="shadow-2xl shadow-purple-700/50 mt-5 md:m-10 w-full sm:w-1/2 sm:h-[70vh] flex flex-col opacity-70">
            {/* card with image div */}
            <div>
              <Image
                src="/eventpics/huristic.jpeg"
                width={400}
                height={100}
                className="w-full h-56"
                alt="loading..."
              />
            </div>
            <div className=" h-full w-full flex flex-col justify-evenly p-5">
              {/* bottom card div */}

              <div className="my-3">
                Only individual participation is allowed to participate in the
                event.Participants must have "Unstop" account (details will be
                provided in prior). Participant should participate in the given
                allotted time.
              </div>
              <div className="flex justify-around">
                <button className="border-2 p-2 w-36 border-purple-700 hover:bg-[#8729d9] ">
                  Register
                </button>
                <button
                  className="border-2 p-2 w-36 border-purple-700 hover:bg-[#8729d9]  ease-in"
                  onClick={async () => {
                    await document
                      .getElementById("gimmeFocus-Tech")
                      .scrollIntoView({ behavior: "smooth" });
                    modalOpen ? close() : open();
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="p-5 flex flex-col">
            <div className="text-violet-700 text-3xl">Event Rules</div>
            <ul
              className={`my-10 md:flex md:justify-evenly ${
                inView
                  ? "transition duration-1000 ease-out blur-0 translate-x-0"
                  : "translate-x-[-100%] blur-sm transition-all duration-1000 opacity-0"
              } gap-6`}
              ref={ref}
            >
              {eventRules.map((rule, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 h-32 flex  justify-center items-center border-2 border-purple-700"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    {rule}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="">
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </div>
      </div>
    </>
  );
};

export default TechConnect;
