import "./pages.scss";

import ProjectCard from "@/components/projects/ProjectCard";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="page__body">
      <div id="projects_page__grid">
        <ProjectCard title={"Conkeldurr: OCaml Build Time React Content Bundler"} description={"Employing OCaml for domain specific language to stream data for static sites to Typescript and upload dynamic content to AWS at build time."} tags={"ocaml,typescript,react,aws"} github={"https://github.com/andrlime/conkeldurr"} />
        <ProjectCard title={"Meloetta: OCaml Markdown to React Compiler"} description={"Building Markdown to React OCaml compiler to power LLM-prompted, text-based games."} tags={"ocaml,react"} github={"https://github.com/andrlime/meloetta"} />
        <ProjectCard title={"Espeon: Python ESP-300 Translation Stage Interface"} description={"Developing Python interface for many-decades-old ESP-300 translation stage that marshals and demarshals byte stream commands and responses."} tags={"python"} github={"https://github.com/andrlime/espeon"} />
        {/* <ProjectCard title={"Sealeo: Low Overhead C++ Threads"} description={"Developing clone of Go routines and channels."} tags={"c++,cmake"} github={"https://github.com/andrlime/`sealeo"} /> */}
        
        <ProjectCard title={"NHSDLC Debate App"} description={"Engineered digital debate judge information system for 2500 students per semester. Currently being refactored."} tags={"flask,react,redux,mongodb,docker,aws"} github={"https://github.com/andrlime/NewDebateApp/"} />
        <ProjectCard title={"Wildhacks 2025 Website"} description={"Engineered website for Northwestern Wildhacks 2025 and maintained CI/CD infrastructure, Firebase database, hosting, and maintenance."} tags={"nextjs,firebase,flask,docker"} github={"https://github.com/NUWildHacks/website2025"} link={"https://www.wildhacks.net/"} />
        <ProjectCard title={"Racism Satire Text-Based Game"} description={"Built text-based, LLM-powered game to critique Orientalism for Asian American Studies department at Northwestern; played by seminar class of 15 students."} tags={"react, openai, flask"} github={"https://github.com/andrlime/sunflora"} />
        
        <ProjectCard title={"Northwestern University Trading Competition"} description={"Implement stochastic market noise generator, improved logging, interprocess data piping for a trading exchange in modern C++."} tags={"c++"} github={"https://github.com/northwesternfintech/NUTC"} />
        <ProjectCard title={"Clowder: Pub-Sub location streaming app for university students"} description={"Pub-sub model hackathon winner to stream location between university students looking for a study group."} tags={"elixir,react,docker"} github={"https://github.com/andrlime/Wildhacks2023"} youtube={"https://www.youtube.com/watch?v=rIFhqEU1GEA"} />
        
        <ProjectCard title={"SDRG Tensorflow Layer"} description={"Developed a Tensorflow layer to apply the strong disorder renormalisation group from percolation theory"} tags={"tensorflow,python"} />
        <ProjectCard title={"THIS MUN and Research Conference Websites"} description={"Engineered fullstack apps for high school MUN and research conferences with custom form logic and automatic emails."} tags={"react,express,mongodb"} />
        {/* <ProjectCard title={"Aid For Wuhan: COVID-19 Charity"} description={"Raised ¥72300/$11000 for COVID-19 relief (Jan—Apr 2020) in team of five. Sourced PPE, medical-grade disinfectants, medical masks for quarantine zones and hospitals across five provinces. Translated donation reports for transparency."} tags={"Charity, Translation, Fundraising"} link={"http://www.sohu.com/a/382349479_120209831"} /> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
