interface PortfolioProps {
  name: string;
  img: string;
  stack: string[];
  desc: string;
}

export default function PortfolioCard(props: PortfolioProps) {
  return (
    <div className="flex flex-col border border-white rounded-xl">
      <img
        src={props.img}
        alt="Portfolio image"
        className="rounded-t-xl border-b border-gray-400 h-57.5"
      />
      <div className="p-2">
        <div className="flex flex-wrap justify-center">
          <h1 className="text-3xl text-[#6c9de6] font-raleway border-b border-gray-400">
            {props.name}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {props.stack.map((tech) => {
            return (
              <div className="border border-[#6c9de6] px-1.5 py-1 rounded-md text-[10px] font-raleway font-bold hover:bg-[#6c9de6] hover:text-[#2a2633] transition-all duration-200 ease-in-out">
                <p>{tech}</p>
              </div>
            );
          })}
        </div>
        <p className="text-[18px] text-gray-400 mx-1 mt-1 font-serif">
          {props.desc}
        </p>
        <div className="flex justify-center mt-1.5">
          <button className="border border-[#6c9de6] px-2 py-1.5 rounded-xl font-raleway font-bold hover:bg-[#6c9de6] hover:text-[#2a2633] transition-all duration-200 ease-in-out">
            View project
          </button>
        </div>
      </div>
    </div>
  );
}
