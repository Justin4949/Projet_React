import React from "react";
import { NavBarButtons } from "../components/navigation/desktop/nav-bar-buttons";
import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();


  return (
    <div className="home-page-layout">
      <NavBarButtons />
     {user && isAuthenticated &&
        <h2>
           Bonjour {user.name} !
        </h2>
      }
    </div>
  );
};