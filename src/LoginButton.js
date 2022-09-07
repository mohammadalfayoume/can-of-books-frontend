import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const button={
    border:'2px solid black',
    borderRadius:'5px',
    backgroundColor:'#0000ff8f',
    padding:'5px 20px',
    
}
const h1 ={
    padding: '20px 50px'
}

  return (
    <div>
        <h2 style={h1}>Login from here 👉 {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()} style={button}>Log In</button>
      )}</h2>
      
    </div>
  );
};

export default LoginButton;
