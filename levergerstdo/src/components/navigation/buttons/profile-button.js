import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const ProfileButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleProfile = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="button__profile" onClick={handleProfile}>
      Mon compte
    </button>
  );
};