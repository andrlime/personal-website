import "./socials.scss";

import { useState } from "react";

import GithubIcon from "./GithubIcon.tsx";
import LinkedinIcon from "./LinkedinIcon.tsx";
import EmailIcon from "./EmailIcon.tsx";
import ResumeIcon from "./ResumeIcon.tsx";
import IconWrapper from "./IconWrapper.tsx";

import { SWE_RESUME_LINK, QD_RESUME_LINK } from "@/data/navigation.ts";
import { IconDeviceDesktopDollar, IconWorldCode } from "@tabler/icons-react";

interface ISocialsGrid {
  isFooter?: boolean
}

export const SocialsGrid: React.FC<ISocialsGrid> = ({isFooter = false}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="socials-grid">
      <div className={`cv-div ${isFooter && "footer"}`}>
        <div className="cv-unexpanded-div">
          <div className="cv-div-icon"><GithubIcon link={"https://github.com/andrlime/"} /></div>

          <div className="cv-div-icon"><LinkedinIcon /></div>

          <div className="cv-div-icon"><EmailIcon /></div>

          <div className="cv-div-icon" onClick={() => setOpen(!open)}>
            <ResumeIcon />
          </div>
        </div>

        <div className={`cv-expanded-div ${open ? "open" : "closed"} ${isFooter ? "footer" : "standard"}`}>
          <div>
            <IconWrapper href={QD_RESUME_LINK} IconComponent={IconDeviceDesktopDollar} />
            <div><span className="category-label-red">Quant</span></div>
          </div>
          <div>
            <IconWrapper href={SWE_RESUME_LINK} IconComponent={IconWorldCode} />
            <div><span className="category-label-purple">SWE</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsGrid;
