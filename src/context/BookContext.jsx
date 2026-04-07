import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadlistToLocal,
  addWishlistToLocal,
  getReadlistFromLocal,
  getWishlistFromLocal,
} from "../utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(() => getReadlistFromLocal());

  const handleMarkasRead = (currentBook) => {
    addReadlistToLocal(currentBook);
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} has been added to read list`);
    }
  };

  const [storeWishlist, setStoreWishlist] = useState(() =>
    getWishlistFromLocal(),
  );

  const handleWishlist = (currentBook) => {
    const isReadlist = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
      {},
    );

    if (isReadlist) {
      toast.error("Already in read list");
      return;
    }

    const isExistBook = storeWishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is already exist in the wishlist");
    } else {
      addWishlistToLocal(currentBook);
      setStoreWishlist([...storeWishlist, currentBook]);
      toast.success(`${currentBook.bookName} has been added to wishlist`);
    }
  };

  const data = {
    handleMarkasRead,
    storedBooks,
    setStoredBooks,
    handleWishlist,
    storeWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
