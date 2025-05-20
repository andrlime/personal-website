import "./socials.scss";

import type { Icon } from "@tabler/icons-react";

interface IIconWrapper {
  href: string;
  IconComponent: Icon;
}

export const IconWrapper: React.FC<IIconWrapper> = ({href, IconComponent}) => (
  <a className="socials_icon" href={href}>
    <IconComponent size="1.9rem" stroke={1.1} />
  </a>
);

export default IconWrapper;
