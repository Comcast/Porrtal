import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { View } from "@porrtal/r-api";
import { BannerData, ShellState } from "@porrtal/r-shell";
import { ShellBlueprint } from "@porrtal/r-shell-blueprint";

import React from "react";
import AccountNav from "./Account/account-nav";

function App() {
  const porrtalViews: View[] = [
    {
      key: "AccountNav",
      launchAtStartup: true,
      displayText: "Account Navigation",
      paneType: "nav",
      displayIcon: "mugshot",
      componentName: "AccountNav",
      componentModule: () => import("./Account/account-nav"),
    },
  ];
  const porrtalBanner: BannerData = {
    displayText: "My Quick Start App",
    displayIcon: "build",
    childData: []
  };

  return (
    <ShellState views={porrtalViews}>
      <ShellBlueprint bannerData={porrtalBanner} />
    </ShellState>
  );
}

export default App;
