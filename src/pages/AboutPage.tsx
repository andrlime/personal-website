import "./pages.scss";

import { Spacer } from "@/components/spacer/Spacer.tsx";

import PlanePicture from "@/assets/plane-msp.jpg";

export const AboutPage: React.FC = () => {
  return (
    <div className="page__body">
      <Spacer height="sm" />
      <div id="page__heading">I'm <span className="page__heading__name">Andrew Li</span>, a software engineer and chemistry student at <span className="page__heading__school">Northwestern University</span> from Beijing, China and Seattle, Washington.</div>
      <Spacer height="xs" />
      <div className="page__two_columns reverse">
        <div className="page__two_columns__left">
          <div id="page__inside_body">I've lived in the Pacific Northwest for 7 years and Beijing, China for 7 years.</div>
          <div id="page__inside_body">I'm building a GameBoy emulator in modern C++, leveraging std concepts and templates for instruction parsing and interpreting.</div>
          <div id="page__inside_body">I'm developing a CSV to TypeScript compiler in OCaml to compile static content for static sites at build time without having to manually write JavaScript or hook up an API. In a sense, it's kind of like constexpr for React.</div>
          <div id="page__inside_body">I'm working on a research project integrating deep learning and 2D spectroscopy with neural networks, mainly leveraging Pytorch.</div>
          <div id="page__inside_body">Finally, I'm an undergrad TA at Northwestern's Computer Science Department. I've TAed <strong>C/C++ programming</strong> (Fall 2023, Winter 2024, Winter 2025), <strong>Intro to Computer Systems</strong> (Spring 2024, Fall 2024), and <strong>Intro to Parallel Programming</strong> (Spring 2025).</div>
        </div>
        
        <div className="page__image">
          <img src={PlanePicture} alt="Picture of me in Airbus A220 cockpit in Minneapolis, MN" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
