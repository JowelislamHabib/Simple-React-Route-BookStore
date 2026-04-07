import React from "react";
import { LucideStar } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 border border-base-200 hover:border-primary transition-colors h-full"
    >
      <figure className="p-10 bg-base-200 rounded-xl m-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-[200px] w-auto object-contain drop-shadow-sm"
        />
      </figure>
      
      <div className="card-body p-6 pt-0">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {book.tags.map((tag, index) => (
            <span key={index} className="text-primary font-bold text-sm bg-primary/5 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-base-content line-clamp-1">
          {book.bookName}
        </h2>
        <p className="font-medium opacity-70">
          By : {book.author}
        </p>
        
        <div className="divider opacity-50"></div>
        
        <div className="flex justify-between items-center font-medium">
          <span>{book.category}</span>
          <div className="flex items-center gap-2">
            <span>{book.rating}</span>
            <LucideStar size={18} fill="currentColor" className="text-yellow-400" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
