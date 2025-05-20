import React from "react";
import "./navigation.scss";

import type { INavigationItem } from "../../data/navigation.ts";

interface INavigationElement {
  navigationItem: INavigationItem;
}

export const NavigationElement: React.FC<INavigationElement> = ({navigationItem}) => {
  return (
    <div className="navigation_bar__single_element">
      <a href={navigationItem.href}>
        {navigationItem.text}
      </a>
    </div>
  );
}

export default NavigationElement;

