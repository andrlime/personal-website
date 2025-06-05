import "../app.scss";
import "./pages.scss";

import { NavigationBar } from "@/components/navigation/NavigationBar.tsx";
import { Spacer } from "@/components/spacer/Spacer.tsx";
import { Footer } from "@/components/footer/Footer.tsx";
import { HouseIcon } from "@/components/socials/HouseIcon";

import { Outlet } from "react-router-dom";
import type { INavigationItem } from "@/data/navigation";

const NAVIGATION_ITEMS: Array<INavigationItem> = [
  {text: <HouseIcon link="/" size={"1.5rem"} />, href: "/"},
  {text: "About", href: "/about"},
  {text: "Projects", href: "/projects"},
  {text: "Photography", href: "/photos"}
];

export const RootPage: React.FC = () => {
  return (
    <div id="main">
      <div id="body">
        <NavigationBar navigationItems={NAVIGATION_ITEMS} />
        <Outlet />
        <Spacer height="xs" />
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
