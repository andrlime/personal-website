import GithubIcon from "./GithubIcon.tsx";
import LinkedinIcon from "./LinkedinIcon.tsx";
import EmailIcon from "./EmailIcon.tsx";
import ResumeIcon from "./ResumeIcon.tsx";

export const SocialsGrid: React.FC = () => (
  <div>
    <GithubIcon link={"https://github.com/andrlime/"} />
    <LinkedinIcon />
    <EmailIcon />
    <ResumeIcon />
  </div>
);

export default SocialsGrid;
