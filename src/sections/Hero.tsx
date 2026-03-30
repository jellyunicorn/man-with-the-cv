import man from "../assets/man_portrait.png";

export default function () {
  return (
    <div>
      <div className="mx-0 md:mx-10 pt-10 grid gap-8 px-8 md:px-16 grid-cols-1 md:grid-cols-[4fr_3fr]">
        <div className="flex flex-col order-2 md:order-1 justify-center-safe border border-[#6c9de6] rounded-xl px-4 pb-4 pt-1 bg-[#291e3b]">
          <div className="border-b pb-4 border-gray-400">
            <p className="font-extrabold text-[44px] font-raleway">
              John Odion Mann
            </p>
            <p className="text-3xl text-[#6c9de6] font-raleway">
              Full-stack web developer
            </p>
          </div>
          <p className="text-[18px] text-gray-400 mt-4 font-serif">
            Specialized in building web solutions that supercharge your
            business. Ten years of experience in web development for companies
            such as Google and Amazon.
          </p>
          <div className="flex flex-row gap-3 mt-4">
            <button className="border border-[#6c9de6] px-2 py-1.5 rounded-xl font-raleway font-bold hover:bg-[#6c9de6] hover:text-[#2a2633] transition-all duration-200 ease-in-out">
              View resume
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={man}
            alt="My Portrait"
            className="rounded-full border-4 border-[#6c9de6]"
          />
        </div>
      </div>
    </div>
  );
}
