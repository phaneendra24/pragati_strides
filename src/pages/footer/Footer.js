const Footer = () => {
  return (
    <div className="h-[70vh] bg-[#000000] w-[100%] text-white p-10 flex flex-col justify-center items-center">
      <div className="w-[50%] h-fit grid grid-cols-4 justify-items-center">
        <div className="flex flex-col">
          <h1>Faculty</h1>
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
          </div>
        </div>
        <div>
          Coordinatos
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
          </div>
        </div>
        <div>
          Something
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
            <p>someOne</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>contact</h1>
          <div className="flex flex-col mt-10 text-sm text-[#8d8d8d]">
            <p>Mail address</p>
            <p>m.number</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-36">
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
