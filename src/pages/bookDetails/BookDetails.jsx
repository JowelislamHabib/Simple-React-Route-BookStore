import React, { use, useState } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";



const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  const books = useLoaderData();



  const expectedBook = books.find((book) => book.bookId == bookParamsId);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkasRead, storedBooks, handleWishlist } =
    useContext(BookContext);


  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-center">
        <div className="w-full lg:w-[45%] bg-base-200 rounded-[2rem] p-12 lg:p-24 flex items-center justify-center">
          <img 
            src={image} 
            alt={bookName} 
            className="rounded shadow-2xl max-h-[600px] w-auto transition-transform hover:scale-105 duration-500" 
          />
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{bookName}</h1>
            <p className="text-2xl font-medium text-base-content/70">
              By : <span className="text-base-content">{author}</span>
            </p>
          </div>
          
          <div className="divider opacity-30 my-0"></div>
          <p className="text-xl font-semibold opacity-80">{category}</p>
          <div className="divider opacity-30 my-0"></div>
          
          <div className="space-y-4">
            <span className="font-bold text-lg block uppercase tracking-wider text-sm opacity-60">Review</span>
            <p className="text-lg leading-relaxed text-base-content/80 whitespace-pre-line">
              {review}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wider opacity-60">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-4 py-1.5 text-sm font-bold text-primary bg-primary/10 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="divider opacity-30 my-0"></div>

          <div className="grid grid-cols-2 gap-y-4 max-w-sm">
            <span className="opacity-60">Number of Pages:</span>
            <span className="font-bold">{totalPages}</span>
            
            <span className="opacity-60">Publisher:</span>
            <span className="font-bold">{publisher}</span>
            
            <span className="opacity-60">Year of Publishing:</span>
            <span className="font-bold">{yearOfPublishing}</span>
            
            <span className="opacity-60">Rating:</span>
            <span className="font-bold">{rating}</span>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleMarkasRead(expectedBook)}
              className="btn btn-outline btn-lg px-12 rounded-xl font-bold border-2"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishlist(expectedBook)}
              className="btn btn-info btn-lg px-12 rounded-xl text-white font-bold"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
