import { IconBrandGithub } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";

interface IIcon {
  link: string;
}

export const GithubIcon: React.FC<IIcon> = ({link}) => (
  <IconWrapper href={link} IconComponent={IconBrandGithub} />
);

export default GithubIcon;
