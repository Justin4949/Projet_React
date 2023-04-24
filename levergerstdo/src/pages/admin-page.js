import React from "react";
import { NavBarButtons } from "../components/navigation/desktop/nav-bar-buttons";

export const AdminPage = () => {
  return (
    <div className="admin-page-layout">
      <NavBarButtons />
      Admin page Hello World !
      <div className="page-layout__content" />
    </div>
  );
};