import "./pages.scss";

import SocialsGrid from "@/components/socials/SocialsGrid.tsx";
import Spacer from "@/components/spacer/Spacer";
import ExperienceBox from "@/components/experience/ExperienceBox";

export const HomePage: React.FC = () => {
  return (
    <div className="page__body">
      <Spacer height="xs" />

      <SocialsGrid />
      <div id="page__heading">I'm <span className="page__heading__name">Andrew Li</span>, a software engineer and chemistry student at <span className="page__heading__school">Northwestern University</span></div>

      <Spacer height="xs" />

      <div className="page__two_columns">
        <div className="page__two_columns__left">
          <div id="page__inside_body">I'm currently building a Markdown to React compiler in OCaml, a Python interface for controlling old optics hardware, and some deep learning + spectroscopy research using Pytorch.</div>
          <div id="page__inside_body">I have a background in systems and low-latency programming, cloud infrastructure, and chemistry. I also have many years of frontend and backend development in React TypeScript. For other projects, my main programming languages are C++, Python, and OCaml.</div>
          <div id="page__inside_body">Some more of my projects can be found <a href="./projects">here</a>! I also do photography of small animals and landscapes. Some sample pictures can be found <a href="./photos">here</a>!</div>
        </div>
        
        <ExperienceBox />
      </div>
    </div>
  );
};

export default HomePage;
