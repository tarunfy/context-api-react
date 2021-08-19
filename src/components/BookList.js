import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext);
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
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.bookName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
