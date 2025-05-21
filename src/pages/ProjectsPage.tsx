import "./pages.scss";

import ProjectCard from "@/projects/ProjectCard";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="page__body" id="page__404body">
      <div id="projects_page__grid">
        <ProjectCard title={"Meloetta: OCaml Markdown to React Compiler"} description={"Building Markdown to React OCaml compiler to power LLM-prompted, text-based games."} tags={"OCaml, React"} github={"https://github.com/andrlime/porygon/tree/main/meloetta"} />
        <ProjectCard title={"Espeon: Python ESP-300 Translation Stage Interface"} description={"Developing Python interface for many-decades-old ESP-300 translation stage that marshals and demarshals byte stream commands and responses."} tags={"Python"} github={"https://github.com/andrlime/porygon/tree/main/espeon"} />
        <ProjectCard title={"Sealeo: Low Overhead C++ Threads"} description={"Developing clone of Go routines and channels."} tags={"C++, CMake"} github={"https://github.com/andrlime/porygon/tree/main/sealeo"} />
        
        <ProjectCard title={"NHSDLC Debate App"} description={"Engineered digital debate judge information system for 2500 students per semester. Currently being refactored."} tags={"Flask, React/Redux, MongoDB, Docker, AWS Lambda, AWS ECR"} github={"https://github.com/andrlime/NewDebateApp/"} />
        <ProjectCard title={"Wildhacks 2025 Website"} description={"Engineered website for Northwestern Wildhacks 2025 and maintained CI/CD infrastructure, Firebase database, hosting, and maintenance."} tags={"NextJS, Firebase, Flask, Docker"} github={"https://github.com/NUWildHacks/website2025"} link={"https://www.wildhacks.net/"} />
        <ProjectCard title={"Racism Satire Text-Based Game"} description={"Built text-based, LLM-powered game to critique Orientalism for Asian American Studies department at Northwestern; played by seminar class of 15 students."} tags={"React, OpenAI API, Flask"} github={"https://github.com/andrlime/porygon/tree/main/sunflora"} />
        
        <ProjectCard title={"Clowder: Pub-Sub location streaming app for university students"} description={"Pub-sub model hackathon winner to stream location between university students looking for a study group."} tags={"Elixir, React, Docker"} github={"https://github.com/andrlime/Wildhacks2023"} youtube={"https://www.youtube.com/watch?v=rIFhqEU1GEA"} />
      </div>
    </div>
  );
};

export default ProjectsPage;
