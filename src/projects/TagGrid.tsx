import "./projects.scss";

import { LANGUAGE_ICONS } from "@/data/language_icons.ts";

interface ITagGrid {
  tags: string;
}

export const ProjectCard: React.FC<ITagGrid> = ({tags}) => {
  return (
    <div className="project__tag_grid">
      {tags.split(",").map((elem) => {
        const key = elem as keyof typeof LANGUAGE_ICONS;
        return (
          LANGUAGE_ICONS[key] && <img src={LANGUAGE_ICONS[key]} />
        );
      })}
    </div>
  );
};

export default ProjectCard;
