import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRegPaperPlane,
  FaTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="pb-8">
      <div className="flex mx-12 my-2 justify-center font-bold text-[44px] gap-4 items-center">
        <p className=" font-raleway tracking-wider border-b border-gray-400">
          Contact Me
        </p>
      </div>
      <div className="flex flex-col md:flex-row mx-8 md:mx-36 my-4 justify-between items-center text-2xl">
        <div className="flex items-center gap-4">
          <h2 className=" text-[#6c9de6] font-raleway">Email:</h2>
          <p className="font-raleway">john@mail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <h2 className=" text-[#6c9de6] font-raleway">Phone:</h2>
          <p className=" font-raleway">+62-XXX-XXX-XXXX</p>
        </div>
        <div className="flex items-center gap-4">
          <h2 className=" text-[#6c9de6] font-raleway">Or find me at:</h2>
          <div className="flex gap-4 text-white justify-center items-center">
            <a href="http://github.com">
              <FaGithub />
            </a>
            <a href="http://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="http://twitter.com">
              <FaTwitter />
            </a>
            <a href="http://facebook.com">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-8 lg:mx-72 pt-4 pb-4 items-center bg-[#291e3b] rounded-2xl">
        <h2 className="text-2xl lg:text-3xl text-[#6c9de6] font-raleway">
          I would love to hear from you!
        </h2>
        <div className="flex flex-col lg:flex-row gap-3 mt-4 justify-center md:items-center w-full">
          <input
            type="text"
            placeholder="Name"
            className="border-b border-[#6c9de6] p-1 font-raleway mx-8 lg:mx-0 focus:outline-none"
          />
          <FaRegPaperPlane className="hidden lg:block text-2xl" />
          <input
            type="text"
            placeholder="Email"
            className="border-b border-[#6c9de6] p-1 font-raleway mx-8 lg:mx-0 focus:outline-none"
          />
        </div>
        <textarea
          placeholder="Message"
          className="mt-4 w-95 lg:w-120 h-60 border border-[#6c9de6] p-1 font-raleway rounded-xl focus:outline-none"
        />
        <button className="mt-3 border border-[#6c9de6] px-2 py-1.5 rounded-md font-raleway font-bold hover:bg-[#6c9de6] hover:text-[#2a2633] transition-all duration-200 ease-in-out">
          Send message
        </button>
      </div>
    </div>
  );
}
