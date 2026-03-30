import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-bold text-[44px] font-raleway tracking-wider border-b border-gray-400 pt-2">
          Experience
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-4 md:mx-36 mt-8">
        <ExperienceCard
          company="Google"
          job="Senior Developer"
          duration="2025-"
          desc="Responsible for improving Google Translate by implementing
                AI integration and tokenization into translation prompts."
        />
        <ExperienceCard
          company="Amazon"
          job="Junior Developer"
          duration="2023-2025"
          desc="Worked on improving algorithms in Amazon's webpage and
                made load times 13.7% faster."
        />
        <ExperienceCard
          company="Palantir"
          job="Intern"
          duration="2022-2023"
          desc="Helped manage database relations for Palantir Gotham, an
                AI-driven intelligence tool for counter-terrorism analysis."
        />
      </div>
    </div>
  );
}
