import { useInView } from "react-intersection-observer";

const EventNav = () => {
  const { ref, inView, entry } = useInView();

  return (
    <div
      ref={ref}
      className={`${
        inView
          ? "bg-purple-700 bg-gradient-to-t transition-all duration-1000 from-[#14141c] to-purple-700"
          : ""
      }mr-5 absolute h-full w-2 invisible md:visible`}
    ></div>
  );
};

export default EventNav;
