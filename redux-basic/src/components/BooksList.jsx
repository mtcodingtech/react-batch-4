import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../redux/booksSlice";

function BooksList() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log(books);

  const handleAdd = () => {
    if (name && author) {
      dispatch(addBook({ name, author }));
      setName("");
      setAuthor("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Please add book name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Please add author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add Book</button>
      {
        books.map((book, index) => {
            return (
                <React.Fragment key={index}>
                    <h1>{book.name}</h1>
                    <p>{book.author}</p>
                    <button onClick={() => dispatch(removeBook(index))}>Delete</button>
                </React.Fragment>
            )
        })
      }
    </>
  );
}

export default BooksList;
