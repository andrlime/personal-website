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
          <div id="page__inside_body">I'm currently building a 8-bit GameBoy emulator in modern C++ 26 and a CSV-schema to TypeScript compiler in OCaml. I'm interested broadly in type safety, compilers, and distributed systems. I'm scoping and planning a medium-scale deep learning and spectroscopy project in Pytorch, where time dependent linear combinations cannot be resolved analytically; a properly trained deep neural network can likely do a reasonable job.</div>
          <div id="page__inside_body">My background is in systems, low-latency programming, distributed systems, and chemistry. I TA several low-level classes at Northwestern, including Intro C/C++ programming where students write a Python interpreter in C and a Python debugger in C++. My main programming languages are C++, Go, Python, and OCaml. I am proficient in C, Java, TypeScript, x86 Assembly; and I've worked with (but am not proficient in) Rust and Elixir.</div>
          <div id="page__inside_body">Strictly when necessary, I have enough background in frontend development to create visually appealing GUIs, CLIs, and web apps. The components of this website were all <em>manually styled</em> in SCSS.</div>
          <div id="page__inside_body">Some more of my projects can be found <a href="./projects">here</a>! I also do photography of small animals and landscapes. Some sample pictures can be found <a href="./photos">here</a>!</div>
        </div>
        
        <ExperienceBox />
      </div>
    </div>
  );
};

export default HomePage;
