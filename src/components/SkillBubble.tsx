import type React from "react";

interface BubbleProps {
  name: string;
  Icon: React.ElementType;
}

export default function SkillBubble(props: BubbleProps) {
  return (
    <div className="flex flex-col border border-[#6c9de6] rounded-full p-4 md:p-6 items-center gap-2 h-24 w-24 md:h-36 md:w-36">
      <props.Icon className="text-white size-16" />
      <p className="text-[12px] md:text-[18px] text-white font-raleway">{props.name}</p>
    </div>
  );
}
