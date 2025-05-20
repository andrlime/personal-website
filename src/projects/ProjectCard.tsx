import "./projects.scss";

interface IProjectCard {
  title: string;
  description: string;
  tags: string;
  link: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({title, description, link, tags}) => {
  return (
    <div className="project__card">
      <div className="project__title">{title}</div>
      <div>{description}</div>
      <div className="project__bottom">
        <div><strong>{tags}</strong></div>
        <a>{link}</a>
      </div>
    </div>
  );
};

export default ProjectCard;
