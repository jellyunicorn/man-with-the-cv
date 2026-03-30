import AboutMeCard from "../components/AboutMeCard";

export default function () {
  return (
    <div className="bg-[#291e3b]">
      <div className="flex mx-12 mt-10 mb-4 justify-center">
        <p className="font-bold text-[44px] font-raleway tracking-wider border-b border-gray-400 pt-2">
          About Me
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-12 my-4">
        <AboutMeCard
          title="Bio"
          content="Born in Palembang, Indonesia, I excel at both front-end and back-end development. I began web development when I was 5 years old and have been keeping my skills sharp ever since."
        />
        <AboutMeCard
          title="Core Skills"
          content="I am fluent in various programming languages such as JavaScript and Java, and mainly use React and PostgreSQL in order to deliver fast, responsive, and high-quality webpages." />
        <AboutMeCard
          title="Key Values"
          content="I believe that we are all learners. The tug of war of learning and unlearning is the process that drives human experience, and so, more than anything, I aim to learn as much as possible, not just at programming but life in general."
        />
      </div>
    </div>
  );
}
