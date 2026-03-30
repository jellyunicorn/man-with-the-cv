import { FaAws, FaCss3, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import SkillBubble from "../components/SkillBubble";
import { DiPostgresql } from "react-icons/di";

export default function Skills() {
  return (
    <div className="mx-12 my-4">
      <div className="flex justify-center">
        <h1 className="font-bold text-[44px] font-raleway tracking-wider border-b border-gray-400">
          Skills
        </h1>
      </div>
      <p className="text-3xl text-[#6c9de6] font-raleway text-center mt-2">
        I am proficient in...
      </p>
      <div className="flex flex-wrap mt-8 mx-8 md:mx-32 gap-x-6 gap-y-8 justify-center">
        <SkillBubble name="JavaScript" Icon={IoLogoJavascript} />
        <SkillBubble name="Java" Icon={FaJava} />
        <SkillBubble name="React" Icon={FaReact} />
        <SkillBubble name="HTML" Icon={FaHtml5} />
        <SkillBubble name="CSS" Icon={FaCss3} />
        <SkillBubble name="Node.js" Icon={FaNodeJs} />
        <SkillBubble name="Django" Icon={SiDjango} />
        <SkillBubble name="Git" Icon={FaGitAlt} />
        <SkillBubble name="AWS" Icon={FaAws} />
        <SkillBubble name="PostgreSQL" Icon={DiPostgresql} />
      </div>
    </div>
  );
}
