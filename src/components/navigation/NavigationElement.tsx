import React from "react";
import "./navigation.scss";

import { useLocation } from "react-router-dom";

import type { INavigationItem } from "@/data/navigation.ts";

interface INavigationElement {
  navigationItem: INavigationItem;
}

export const NavigationElement: React.FC<INavigationElement> = ({navigationItem}) => {
  const location = useLocation();

  return (
    <div className={`${location.pathname == navigationItem.href && "active"} navigation_bar__single_element`}>
      <a href={navigationItem.href}>
        {navigationItem.text}
      </a>
    </div>
  );
};

export default NavigationElement;

