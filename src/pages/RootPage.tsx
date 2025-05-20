import "../app.scss";
import "./pages.scss";

import { NavigationBar } from "@/components/navigation/NavigationBar.tsx";
import { Spacer } from "@/components/spacer/Spacer.tsx";
import { Footer } from "@/components/footer/Footer.tsx";

import { NAVIGATION_ITEMS } from "../data/navigation.ts";

import { Outlet } from "react-router-dom";

export const RootPage: React.FC = () => {
  return (
    <div id="main">
      <div id="body">
        <NavigationBar navigationItems={NAVIGATION_ITEMS} />
        <Spacer height="sm" />
        <Outlet />
        <Spacer height="xs" />
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
