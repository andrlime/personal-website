import "./socials.scss";

import type { Icon } from "@tabler/icons-react";

interface IIconWrapper {
  IconComponent: Icon;
  href?: string;
  size?: string;
  stroke?: number;
}

export const IconWrapper: React.FC<IIconWrapper> = ({IconComponent, href, size = "1.9rem", stroke = 1.1}) => {
  console.log(href);
  if (!href) {
    return (
      <span className="socials_icon">
        <IconComponent size={size} stroke={stroke} />
      </span>
    );
  }

  return ( 
    <a className="socials_icon" href={href}>
      <IconComponent size={size} stroke={stroke} />
    </a>
  );
};

export default IconWrapper;
