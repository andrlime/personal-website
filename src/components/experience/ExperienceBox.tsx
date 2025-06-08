import "./experience.scss";
import ExperienceRow from "./ExperienceRow";

export const ExperienceBox = () => (
  <div className="experience_box__box">
    <ExperienceRow icon="capitalone" company="Capital One" title="SWE Intern - Synthetic Testing" time="June 2025 – Present" />
    <ExperienceRow icon="northwestern" company="Northwestern University" title="Undergrad TA" time="September 2023 – Present" />
    <ExperienceRow icon="nuft" company="Northwestern Fintech Club" title="Core Software Dev" time="October 2022 – Present" />
    <ExperienceRow icon="nhsdlc" company="National HS Debate League of China" title="Software Dev & Debate Coach" time="April 2022 – Present" />
    <ExperienceRow icon="wildhacks" company="Northwestern Wildhacks" title="Director of Tech" time="April 2023 – May 2025" />
    <ExperienceRow icon="capitalone" company="Capital One" title="SWE Intern - Cloud Infrastructure" time="June 2024 – August 2024" />
    <ExperienceRow icon="draper" company="Draper Laboratory" title="SWE Intern - Frontend" time="June 2023 – August 2023" />
    <ExperienceRow icon="qhfz" company="Tsinghua University High School" title="Web Developer" time="May 2021 – June 2022" />
  </div>
);

export default ExperienceBox;

