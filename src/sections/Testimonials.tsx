import TestimonialCard from "../components/TestimonialCard";
import testimonialThumb1 from "../assets/testimonial1.png";
import testimonialThumb2 from "../assets/testimonial2.png";

export default function Testimonials() {
  return (
    <div className="bg-[#291e3b] pb-2">
      <div className="flex mx-12 mt-10 mb-4 justify-center">
        <p className="font-bold text-[44px] font-raleway tracking-wider border-b border-gray-400 pt-2">
          Testimonials
        </p>
      </div>
      <div className="mx-8 md:mx-36 mt-8 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="John Cena"
            review="The most skilled web developer I have ever met."
            thumbnail={testimonialThumb1}
          />
          <TestimonialCard
            name="Jane Cena"
            review="He taught me how to be a full-stack web developer in 2 weeks."
            thumbnail={testimonialThumb2}
          />
        </div>
      </div>
    </div>
  );
}
