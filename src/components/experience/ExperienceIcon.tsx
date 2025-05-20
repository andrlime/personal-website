import "./experience.scss";

import type { experience_icon_t } from "@/shared/types.ts";

import CapitalOneIcon from "@/assets/capitalone.svg";
import DraperIcon from "@/assets/draper.png";
import WildhacksIcon from "@/assets/wildhacks.svg";
import NorthwesternIcon from "@/assets/northwestern.svg";
import NHSDLCIcon from "@/assets/nhsdlc.png";
import NUFTIcon from "@/assets/nuft.png";
import QHFZIcon from "@/assets/qhfz.jpg";
import DefaultIcon from "@/assets/pink.png";

interface IExperienceIcon {
    icon: experience_icon_t;
}

export const ExperienceIcon: React.FC<IExperienceIcon> = ({icon}) => {
	const iconSrc: string = {
    "capitalone": CapitalOneIcon,
    "draper": DraperIcon,
    "northwestern": NorthwesternIcon,
    "nuft": NUFTIcon,
    "nhsdlc": NHSDLCIcon,
		"wildhacks": WildhacksIcon,
		"qhfz": QHFZIcon,
  }[icon] ?? DefaultIcon;

  return (
		<div className="experience__company_icon">
    	<img src={iconSrc} />
		</div>
  );
};

export default ExperienceIcon;
