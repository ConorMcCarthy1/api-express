import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Header = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <p>
      Welcome {context.userName}! Enjoy your stay at the Movies App <button onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p>
      What's in the box?{" "}
      <button onClick={() => navigate('/login')}>Open</button>
    </p>
  );
};

export default Header;