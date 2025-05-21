import "./projects.scss";

import LinkIcon from "@/components/socials/LinkIcon";
import GithubIcon from "@/components/socials/GithubIcon";
import VideoIcon from "@/components/socials/VideoIcon";

interface IProjectCard {
  title: string;
  description: string;
  tags: string;
  github?: string;
  link?: string;
  youtube?: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({title, description, tags, github, link, youtube}) => {
  return (
    <div className="project__card">
      <div className="project__title">{title}</div>
      <div>{description}</div>
      <div className="project__bottom">
        <div><strong>{tags}</strong></div>
        {github && <GithubIcon link={github} />}
        {link && <LinkIcon link={link} />}
        {youtube && <VideoIcon link={youtube} />}
      </div>
    </div>
  );
};

export default ProjectCard;
