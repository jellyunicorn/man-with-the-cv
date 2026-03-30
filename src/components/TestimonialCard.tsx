import { FaStar } from "react-icons/fa";

interface CardProps {
  name: string;
  review: string;
  thumbnail: string;
}

export default function TestimonialCard(props: CardProps) {
  return (
    <div className="border border-[#6c9de6] rounded-xl p-3">
      <div className="grid grid-cols-[1fr_3fr] items-center gap-3">
        <div>
          <img
            src={props.thumbnail}
            alt="Testimonial portrait"
            className="rounded-full h-25 w-25"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl text-white font-raleway">{props.name}</h2>
          <div className="flex border-b border-gray-400 gap-1 text-yellow-300 mt-0.5 pb-1.5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-[18px] text-gray-400 mt-1 font-serif">
            {props.review}
          </p>
        </div>
      </div>
    </div>
  );
}
