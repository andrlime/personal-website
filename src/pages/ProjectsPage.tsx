import "./pages.scss";

import Spacer from "@/components/spacer/Spacer";
import ProjectCard from "@/components/projects/ProjectCard";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="page__body">
      <Spacer height="sm" />
      <div id="projects_page__grid">
        <ProjectCard title={"Spinarak: 8 Bit GameBoy Emulator in C++26"} description={"Engineering GameBoy emulator in modern C++, supporting CPU instruction interpretation, memory and register emulation, and eventually graphics support using concepts and templates."} year={"2025"} tags={"c++,cmake"} github={"https://github.com/andrlime/spinarak"} />
        <ProjectCard title={"Wigglytuff: Distributed Producer Consumer Pipeline"} description={"Designing distributed producer consumer pipeline using RabbitMQ, gRPC, Go, Python for robust message consumption."} tags={"go,python,rabbitmq,grpc"} year={"2025"} github={"https://github.com/andrlime/wigglytuff"} />
        <ProjectCard title={"Conkeldurr: OCaml Build Time React Content Bundler"} description={"Employing OCaml for domain specific language to stream data for static sites to Typescript and upload dynamic content to AWS at build time."} year={"2025"} tags={"ocaml,typescript,react,aws"} github={"https://github.com/andrlime/conkeldurr"} />
        {/* <ProjectCard title={"Meloetta: OCaml Markdown to React Compiler"} description={"Building Markdown to React OCaml compiler to power LLM-prompted, text-based games."} tags={"ocaml,react"} github={"https://github.com/andrlime/meloetta"} /> */}
        <ProjectCard title={"Espeon: Python ESP-300 Translation Stage Interface"} description={"Developing Python interface for many-decades-old ESP-300 translation stage that marshals and demarshals byte stream commands and responses."} year={"2025"} tags={"python"} github={"https://github.com/andrlime/espeon"} />
        <ProjectCard title={"Northwestern University Trading Competition"} description={"Implement Brownian-motion based stochastic noise generator, interprocess data piping for trading exchange in modern C++."} year={"2024"} tags={"c++"} github={"https://github.com/northwesternfintech/NUTC"} />
        {/* <ProjectCard title={"Sealeo: Low Overhead C++ Threads"} description={"Developing clone of Go routines and channels."} tags={"c++,cmake"} github={"https://github.com/andrlime/`sealeo"} /> */}
        
        <ProjectCard title={"Racism Satire Text-Based Game"} description={"Built text-based, LLM-powered game to critique Orientalism for Asian American Studies department at Northwestern; played by seminar class of 15 students."} year={"2025"} tags={"react, openai, flask"} github={"https://github.com/andrlime/sunflora"} />
        <ProjectCard title={"NHSDLC Debate App"} description={"Engineered digital debate judge information system for 2500 students per semester. Currently being refactored."} year={"2022–25"} tags={"flask,react,redux,mongodb,docker,aws"} github={"https://github.com/andrlime/NewDebateApp/"} />
        
        <ProjectCard title={"Wildhacks Infrastructure"} description={"Engineered website and core infrastructure for Northwestern Wildhacks 2025, with Firestore, hosting, and maintenance. Added features to increase hackathon efficiency."} year={"2023–25"} tags={"nextjs,firebase,flask,docker"} github={"https://github.com/NUWildHacks/website2025"} link={"https://www.wildhacks.net/"} />
        <ProjectCard title={"Clowder: Pub-Sub location streaming app for university students"} description={"Pub-sub model hackathon winner to stream location between university students looking for a study group."} year={"2023"} tags={"elixir,react,docker"} github={"https://github.com/andrlime/Wildhacks2023"} youtube={"https://www.youtube.com/watch?v=rIFhqEU1GEA"} />
        
        <ProjectCard title={"SDRG Tensorflow Layer"} description={"Developed a Tensorflow layer to apply the strong disorder renormalisation group from percolation theory"} year={"2022"} tags={"tensorflow,python"} />
        <ProjectCard title={"THIS MUN and Research Conference Websites"} description={"Engineered fullstack apps for high school MUN and research conferences with custom form logic and automatic emails."} year={"2022"} tags={"react,express,mongodb"} />
        {/* <ProjectCard title={"Aid For Wuhan: COVID-19 Charity"} description={"Raised ¥72300/$11000 for COVID-19 relief (Jan—Apr 2020) in team of five. Sourced PPE, medical-grade disinfectants, medical masks for quarantine zones and hospitals across five provinces. Translated donation reports for transparency."} tags={"Charity, Translation, Fundraising"} link={"http://www.sohu.com/a/382349479_120209831"} /> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
