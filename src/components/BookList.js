import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged-in" : "Logged-out"}
      </div>
      <ul>
        <li style={{ background: theme.ui }}>The Way of kings</li>
        <li style={{ background: theme.ui }}>Power of your subconcious mind</li>
        <li style={{ background: theme.ui }}>The Lean Startup</li>
      </ul>
    </div>
  );
};

export default BookList;
