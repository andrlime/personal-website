import "./pages.scss";

import ProjectCard from "@/projects/ProjectCard";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="page__body" id="page__404body">
      <div id="projects_page__grid">
        <ProjectCard title={"Meloetta: OCaml Markdown to React Compiler"} description={"Building Markdown to React OCaml compiler to power LLM-prompted, text-based games."} tags={"OCaml, React"} link={"a"} />
        <ProjectCard title={"Espeon: Python ESP-300 Translation Stage Interface"} description={"Developing Python interface for many-decades-old ESP-300 translation stage that marshals and demarshals byte stream commands and responses."} tags={"Python"} link={"a"} />
        {/* <ProjectCard title={"Sealeo: Low Overhead C++ Threads"} description={"Developing clone of Go routines and channels."} tags={"C++, CMake"} link={"a"} /> */}
        
        <ProjectCard title={"NHSDLC Debate App"} description={"Engineered digital debate judge information system for 2500 students per semester."} tags={"Flask, React/Redux, MongoDB, Docker, AWS Lambda, AWS ECR"} link={"a"} />
        <ProjectCard title={"Wildhacks 2025 Website"} description={"Engineered website for Northwestern Wildhacks 2025 and maintained CI/CD infrastructure, Firebase database, hosting, and maintenance."} tags={"NextJS, Firebase, Flask, Docker"} link={"a"} />
        <ProjectCard title={"Racism Satire Text-Based Game"} description={"Built text-based, LLM-powered game to critique Orientalism for Asian American Studies department at Northwestern; played by seminar class of 15 students."} tags={"React, OpenAI API, Flask"} link={"a"} />
        
        <ProjectCard title={"Clowder: Pub-Sub location streaming app for university students"} description={"Pub-sub model hackathon winner to stream location between university students looking for a study group."} tags={"Elixir, React, Docker"} link={"a"} />
      </div>
    </div>
  );
};

export default ProjectsPage;
