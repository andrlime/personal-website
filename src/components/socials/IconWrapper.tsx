import "./socials.scss";

import type { Icon } from "@tabler/icons-react";

interface IIconWrapper {
  href: string;
  IconComponent: Icon;
  size?: string;
  stroke?: number;
}

export const IconWrapper: React.FC<IIconWrapper> = ({href, IconComponent, size = "1.9rem", stroke = 1.1}) => (
  <a className="socials_icon" href={href}>
    <IconComponent size={size} stroke={stroke} />
  </a>
);

export default IconWrapper;
