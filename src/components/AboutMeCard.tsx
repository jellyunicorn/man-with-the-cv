interface CardProps {
  title: string;
  content: string;
}

export default function AboutMeCard(props: CardProps) {
  return (
    <div className="border border-[#6c9de6] rounded-xl px-2 py-3">
      <div className="flex justify-center-safe border-b border-gray-400 pb-1.5">
        <h1 className="text-3xl text-[#6c9de6] font-raleway">{props.title}</h1>
      </div>
      <p className="text-[18px] text-gray-400 text-center mt-2 mx-2 font-serif">
        {props.content}
      </p>
    </div>
  );
}
