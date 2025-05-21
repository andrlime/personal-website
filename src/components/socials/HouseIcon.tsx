import { IconHome } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";

interface IIcon {
  link: string;
  size: string;
}

export const HouseIcon: React.FC<IIcon> = ({link, size}) => (
  <IconWrapper href={link} IconComponent={IconHome} size={size} />
);

export default HouseIcon;
