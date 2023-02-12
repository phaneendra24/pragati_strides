import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <div className="welcome-greet ">
      <div className="text-3xl text-teal-800 h-24 bg-red-900 w-full ">
        <Typewriter
          options={{
            strings: [
              "Department of AI & ML",
              "Welcome! you to the Strides 2k23",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
