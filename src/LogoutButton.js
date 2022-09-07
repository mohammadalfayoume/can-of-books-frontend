import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const button={
    border:'2px solid black',
    borderRadius:'5px',
    backgroundColor:'#fff',
    padding:'2px 15px',
    
}

  return (
    <div>
      {isAuthenticated && (
        <button style={button} onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
