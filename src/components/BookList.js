import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
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
                      <li style={{ background: theme.ui }}>
                        Power of your subconcious mind
                      </li>
                      <li style={{ background: theme.ui }}>The Lean Startup</li>
                    </ul>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default BookList;
