import React from "react";

interface ISpacer {
  height: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Spacer: React.FC<ISpacer> = ({height}) => {
  // funny hack because js doesn't have match
  const padding: string = {
    "xs": "1em",
    "sm": "2em",
    "md": "3em",
    "lg": "5em",
    "xl": "8em",
  }[height] ?? "default";

  return <div style={{padding: padding}}></div>;
};

export default Spacer;
