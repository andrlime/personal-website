import "./projects.scss";

import LinkIcon from "@/components/socials/LinkIcon";
import GithubIcon from "@/components/socials/GithubIcon";
import VideoIcon from "@/components/socials/VideoIcon";

import TagGrid from "./TagGrid.tsx";

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
        <div className="project__socials_flex">
          {github && <GithubIcon link={github} size={"1.4rem"} bordered />}
          {link && <LinkIcon link={link} size={"1.4rem"} bordered />}
          {youtube && <VideoIcon link={youtube} size={"1.4rem"} bordered />}
        </div>
        <TagGrid tags={tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
