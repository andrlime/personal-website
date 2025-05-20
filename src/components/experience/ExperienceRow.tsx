import "./experience.scss";

import type { experience_icon_t } from "@/shared/types.ts";
import ExperienceIcon from "./ExperienceIcon";

interface IExperienceRow {
  icon: experience_icon_t;
  company: string;
  title: string;
  time: string;
}

export const ExperienceRow: React.FC<IExperienceRow> = ({icon, company, title, time}) => (
	<div className="experience_box__row">
		<ExperienceIcon icon={icon} />
		<div className="experience_box__company_info">
			<div className="experience_box__company_info__bold">{company}</div>
			<div className="experience_box__company_info__row">
				<div className="experience_box__company_info__text">{title}</div>
				<div className="experience_box__company_info__text">{time}</div>
			</div>
		</div>
	</div>
);

export default ExperienceRow;
