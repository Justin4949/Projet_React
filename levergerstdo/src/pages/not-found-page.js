import React from "react";
import { NavBarButtons } from "../components/navigation/desktop/nav-bar-buttons";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page-layout">
      <NavBarButtons />
     <b>Error 404 - Not Found Page</b>
    </div>
  );
};