const Events = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-home-bg ">
        <img
          src="/poster.jpg"
          className=" h-[80%] sm:h-full w-[100%] sm:w-[90%] "
        ></img>
        <div className="mt-14 flex  text-white">
          <div className="px-14 w-screen h-96 flex justify-between">
            <div className="w-1/2">
              <h1 className="text-3xl pb-12">Tech connect</h1>
              <p>
                Only individual participation is allowed to participate in the
                event.Participants must have "Unstop" account (details will be
                provided in prior). Participant should participate in the given
                allotted time. Guidelines: Participants will be shortlisted in
                each round depending on score secured.In case of time breaker,
                we will consider best time.
              </p>
            </div>
            <div className="w-1/2 h-72 flex flex-col  justify-start gap-10 items-center">
              <img src="/technook.jpg" className="w-64"></img>
              <div className="w-36 bg-blue-800 text-center">register</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
