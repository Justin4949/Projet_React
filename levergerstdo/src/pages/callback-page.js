import React from "react";
import { NavBarButtons } from "../components/navigation/desktop/nav-bar-buttons";

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <NavBarButtons />
      Callback page Hello World !
      <div className="page-layout__content" />
    </div>
  );
};