import "./pages.scss";

import SocialsGrid from "@/components/socials/SocialsGrid.tsx";
import ExperienceBox from "@/components/experience/ExperienceBox";

export const HomePage: React.FC = () => {
  return (
    <div className="page__body">
      <SocialsGrid />
      
      <div id="page__heading">I'm Andrew Li, a software engineer and chemistry student at Northwestern University</div>

      <div className="page__two_columns">
        <div className="page__two_columns__left">
          <div id="page__inside_body">I'm currently building a Markdown to React compiler in OCaml, a Python interface for controlling old optics hardware, and some deep learning + spectroscopy research using Pytorch.</div>
          <div id="page__inside_body">I have a background in systems and low-latency programming, cloud infrastructure, and chemistry. I can also do fullstack development but find it quite boring. My main programming languages are C++, Python, and OCaml for interesting projects, and TypeScript for frontend development. Some more of my projects can be found <a href="./projects">here</a>!</div>
          <div id="page__inside_body">I do photography of small animals and landscapes. When the page is complete, some sample pictures can be found <a href="./photos">here</a>!</div>
        </div>
        
        <ExperienceBox />
      </div>
    </div>
  );
};

export default HomePage;
