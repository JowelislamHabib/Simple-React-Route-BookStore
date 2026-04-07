import React, { use } from "react";
import BookCard from "../Ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div>
      <div className="container mx-auto px-4 my-20">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Books</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => {
            return <BookCard key={book.bookId} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
