import React from "react";
import "./footer.scss";
import SocialsGrid from "@/components/socials/SocialsGrid.tsx";

export const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <hr />
      <div className="footer__text">
        <SocialsGrid isFooter />
        <div><strong>© 2025</strong> Andrew Li</div>
      </div>
    </div>
  );
};

export default Footer;

