import "./projects.scss";

import LinkIcon from "@/components/socials/LinkIcon";
import GithubIcon from "@/components/socials/GithubIcon";
import VideoIcon from "@/components/socials/VideoIcon";

import TagGrid from "./TagGrid.tsx";

interface IProjectCard {
  title: string;
  description: string;
  tags: string;
  year: string;
  github?: string;
  link?: string;
  youtube?: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({title, description, tags, year, github, link, youtube}) => {
  return (
    <div className="project__card">
      <div className="project__title">
        <img src={`https://img.shields.io/badge/-${encodeURIComponent(year)}-%23AB84A8?style=flat-square`} />
        {title}
      </div>
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
