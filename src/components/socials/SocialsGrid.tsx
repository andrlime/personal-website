import GithubIcon from "./GithubIcon.tsx";
import LinkedinIcon from "./LinkedinIcon.tsx";
import EmailIcon from "./EmailIcon.tsx";
import ResumeIcon from "./ResumeIcon.tsx";

interface ISocialsGrid {
  isFooter?: boolean
}

export const SocialsGrid: React.FC<ISocialsGrid> = ({isFooter = false}) => (
  <div className="socials-grid">
    <GithubIcon link={"https://github.com/andrlime/"} />
    <LinkedinIcon />
    <EmailIcon />
    <ResumeIcon isFooter={isFooter} />
  </div>
);

export default SocialsGrid;
