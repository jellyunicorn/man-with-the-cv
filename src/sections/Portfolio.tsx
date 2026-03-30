import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="bg-[#291e3b] pb-2">
      <div className="mx-8 md:mx-24 my-4">
        <div className="flex justify-center pt-2">
          <h1 className="font-bold text-[44px] font-raleway tracking-wider border-b border-gray-400">
            Portfolio
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4">
          <PortfolioCard
            name="Coderator"
            img="/src/assets/code1.png"
            stack={["JavaScript", "Git", "Node.js", "Django"]}
            desc="Developed an AI-powered code generator for Google in order to improve
                  developer productivity. Prompt results show 27.3% faster and hallucinate
                  12.9% less than ChatGPT results."
          />
          <PortfolioCard
            name="webinator.js"
            img="/src/assets/website_stock.png"
            stack={["JavaScript", "React", "CSS", "HTML", "Git", "PostgreSQL"]}
            desc="Using Coderator as a dependency, I developed an AI-powered code generator
                  for Amazon specialized in creating responsive, fast, interactive, and
                  beautifully-styled webpages."
          />
          <PortfolioCard
            name="Servify"
            img="/src/assets/server_stock.png"
            stack={["Java", "AWS", "Git"]}
            desc="Developed a program for Palantir in order to facilitate the integration of data
                  centers worldwide in order to improve the efficiency of getting surveillance
                  data for Palantir Gotham."
          />
        </div>
      </div>
    </div>
  );
}
