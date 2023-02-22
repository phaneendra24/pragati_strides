const Footer = () => {
  return (
    <div className="h-[80vh]  bg-[#000000] w-[100%] text-white p-10 flex flex-col justify-center items-center">
      <div className="sm:w-[50%] h-fit grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center">
        <div className="flex flex-col">
          <h1>Faculty</h1>
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>
              A.JANARDHANRAO <br />
              <span className="pl-5">ph- 9951754338</span>{" "}
            </p>
            <p>
              Dr.A.Radha Krishna
              <br /> (professor & HOD)
              <br />
              M.Tech,Ph.D
              <br />
              <span className="pl-5">ph- 9440614466</span>{" "}
            </p>
          </div>
        </div>
        <div>
          Co-ordinators
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>M.vanitha</p>
            <p>M.S.Bhaskhar</p>
          </div>
        </div>
        <div>
          Event Co-ordinators
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>Sk.Nazmeer</p>
            <p>D.Venkata surya</p>
            <p>C.Swetha</p>
            <p>v.Vinod</p>
            <p>D.Aditya</p>
            <p>G.Srujana</p>
            <p>J.s.v.Bhargavi</p>
            <p>G.Dileep</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Contact</h1>
          <div className="flex mt-10 flex-col  text-sm text-[#8d8d8d]">
            ph : 8008457585 <br />
            ph : 8106207191
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-20 sm:gap-36">
        Pragati Strides
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
