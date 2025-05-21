import { IconLink } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";

interface IIcon {
  link: string;
}

export const LinkIcon: React.FC<IIcon> = ({link}) => (
  <IconWrapper href={link} IconComponent={IconLink} />
);

export default LinkIcon;
