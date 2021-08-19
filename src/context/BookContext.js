import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { bookName: "scsdc", id: 1 },
    { bookName: "vfvf", id: 2 },
    { bookName: "qqwqw", id: 3 },
    { bookName: "gbgv", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
