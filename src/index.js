import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon best seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
