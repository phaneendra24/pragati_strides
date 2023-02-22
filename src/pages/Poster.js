import Image from "next/image";

const Poster = () => {
  return (
    <>
      <div className="mt-[75px] h-[100%] bg-[#161123]  w-[100%]">
        <Image
          src="/poster.png"
          alt="Loading..."
          width={400}
          height={900}
          className="h-[85%] w-screen mt-[75px]"
        />
      </div>
    </>
  );
};

export default Poster;
