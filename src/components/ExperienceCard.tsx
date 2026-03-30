interface ExperienceProps {
  company: string;
  job: string;
  duration: string;
  desc: string;
}

export default function ExperienceCard(props: ExperienceProps) {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div className="border-r border-gray-500 text-right px-4 lg:px-8 py-2">
        <p className="text-[14px] md:text-[18px] text-gray-400 font-raleway">{props.duration}</p>
      </div>
      <div className="px-4 lg:px-8 py-2">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:items-center-safe lg:gap-2">
            <h1 className="text-3xl text-[#6c9de6] font-raleway">{props.company}</h1>
            <h2 className="text-2xl font-extrabold text-white font-raleway hidden lg:block">
              ·
            </h2>
            <h2 className="text-xl lg:text-2xl text-white font-raleway">
              {props.job}
            </h2>
          </div>
          <p className="text-[18px] text-gray-400 mt-1 font-serif">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
