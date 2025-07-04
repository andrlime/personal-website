import "./experience.scss";
import ExperienceRow from "./ExperienceRow";

export const ExperienceBox = () => (
  <div className="experience_box__box">
    {/* <ExperienceRow icon="someone" company="Anonymous Finance Company" title="SWE Intern - Low Latency" time="June 2026 – August 2026" /> */}
    <ExperienceRow icon="capitalone" company="Capital One" title="SWE Intern - Distributed Systems" time="June 2025 – Present" />
    <ExperienceRow icon="northwestern" company="Northwestern University" title="Undergrad Systems TA" time="September 2023 – Present" />
    <ExperienceRow icon="nuft" company="Northwestern Fintech Club" title="Quantitative Software Dev" time="October 2022 – Present" />
    <ExperienceRow icon="nhsdlc" company="National HS Debate League of China" title="Software Dev" time="April 2022 – April 2025" />
    <ExperienceRow icon="wildhacks" company="Northwestern Wildhacks" title="Director of Tech" time="May 2023 – May 2025" />
    <ExperienceRow icon="capitalone" company="Capital One" title="SWE Intern - Cloud Infra" time="June 2024 – August 2024" />
    <ExperienceRow icon="draper" company="Draper Laboratory" title="SWE Intern - Frontend" time="June 2023 – August 2023" />
    <ExperienceRow icon="qhfz" company="Tsinghua University High School" title="Web Developer" time="May 2021 – June 2022" />
  </div>
);

export default ExperienceBox;

