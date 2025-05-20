import React from "react";
import "./navigation.scss";

import type { INavigationItem } from "@/data/navigation.ts";

import { NavigationElement } from "./NavigationElement.tsx";
import { ProfilePicture } from "./ProfilePicture.tsx";


interface INavigationBar {
  navigationItems: Array<INavigationItem>;
}

export const NavigationBar: React.FC<INavigationBar> = ({navigationItems}) => {
  return (
    <div className="navigation_bar__container">
      <ProfilePicture to="./" />
      <div className="navigation_bar__bar">
        {navigationItems.map((item) => <NavigationElement key={`navigation-bar-element-${item.text}`}  navigationItem={item} />)}
      </div>
    </div>
  );
};

export default NavigationBar;

