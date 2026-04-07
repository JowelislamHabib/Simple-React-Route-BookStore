import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router";
import { FileText, MapPin, Users } from "lucide-react";
import BookCard from "../component/Ui/BookCard";

const ReadList = ({ sortingType }) => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData);
      } else if (sortingType === "ratings") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-base-200 rounded-2xl flex items-center justify-center ">
        <h2 className="font-bold text-3xl opacity-50">No read list data found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-8">Books in Read List ({filteredReadList.length})</h2>
      <div className="flex flex-col gap-6">
        {filteredReadList.map((book) => (
          <div key={book.bookId} className="flex flex-col md:flex-row items-center gap-8 bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm">
            <div className="w-full md:w-48 h-56 bg-base-200 rounded-xl flex items-center justify-center p-4">
              <img 
                src={book.image} 
                className="h-full w-auto object-contain drop-shadow-sm" 
                alt={book.bookName} 
              />
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">{book.bookName}</h3>
                <p className="font-medium opacity-70">By : {book.author}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <span className="font-bold">Tag</span>
                {book.tags.map((tag, index) => (
                  <span key={index} className="text-primary font-bold text-sm bg-primary/5 px-4 py-1 rounded-full whitespace-nowrap">
                    #{tag}
                  </span>
                ))}
                <div className="flex items-center gap-2 opacity-70 ml-4">
                  <MapPin size={20} />
                  <span>Year of Publishing: {book.yearOfPublishing}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 opacity-70 text-sm font-medium pt-2 border-t border-base-200">
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>Publisher: {book.publisher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={20} />
                  <span>Page {book.totalPages}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">Category: {book.category}</span>
                <span className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-bold">Rating: {book.rating}</span>
                <Link to={`/bookDetails/${book.bookId}`} className="btn btn-primary btn-sm rounded-full px-6">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
