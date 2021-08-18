import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>The Way of kings</li>
          <li style={{ background: theme.ui }}>
            Power of your subconcious mind
          </li>
          <li style={{ background: theme.ui }}>The Lean Startup</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
