import React from "react";
import "./navigation.scss";

import pinkSquare from "@/assets/pink.png";

interface IProfilePicture {
  to: string;
}

export const ProfilePicture: React.FC<IProfilePicture> = ({to}) => {
  return (
    <div className="navigation_bar__picture">
      <a href={to}><img src={pinkSquare} alt="Solid pink square" height={36} /></a>
    </div>
  );
};

export default ProfilePicture;

