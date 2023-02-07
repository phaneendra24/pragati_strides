const Nav = () => {
  return (
    <>
      <nav className="bg-transparent  fixed w-full text-white  px-10 flex justify-between items-center py-5 ">
        <div className="text-4xl">Strides</div>
        <div className="flex justify-end  gap-7 sm:gap-32">
          <div
            className="
          hover:underline
          decoration-purple-500 decoration-[0.25rem]
          motion-safe:transition-all motion-safe:duration-200
          hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-purple-500/50 focus:decoration-purple-500/50
          
        "
          >
            <a>Home</a>
          </div>
          <div
            className="
        hover:underline
        decoration-purple-500 decoration-[0.25rem]
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-purple-500/50 focus:decoration-purple-500/50
        "
          >
            <a>Register</a>
          </div>
          <div
            className="
        hover:underline
        decoration-purple-500 decoration-[0.25rem]
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-purple-500/50 focus:decoration-purple-500/50
        
        "
          >
            <a>Events</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
