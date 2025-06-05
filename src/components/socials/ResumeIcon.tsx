import "./socials.scss";
import { useState } from "react";

import { IconFileCv, IconDeviceDesktopDollar, IconWorldCode } from "@tabler/icons-react";

import IconWrapper from "./IconWrapper";

import { SWE_RESUME_LINK, QD_RESUME_LINK } from "@/data/navigation.ts";

interface IResumeIcon {
  isFooter: boolean
}

export const ResumeIcon: React.FC<IResumeIcon> = ({isFooter}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cv-div">
      <div className="cv-div-icon" onClick={() => setOpen(!open)}>
        <IconWrapper IconComponent={IconFileCv} />
      </div>
      <div className={`cv-expanded-div ${open ? "open" : "closed"} ${isFooter ? "footer" : "standard"}`}>
        <div>
          <IconWrapper href={QD_RESUME_LINK} IconComponent={IconDeviceDesktopDollar} />
          <div><span className="category-label-red">Quant Dev</span></div>
        </div>
        <div>
          <IconWrapper href={SWE_RESUME_LINK} IconComponent={IconWorldCode} />
          <div><span className="category-label-purple">General Tech</span></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeIcon;
