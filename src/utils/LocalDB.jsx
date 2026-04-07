const getReadlistFromLocal = () => {
  const allReadlist = localStorage.getItem("readList");

  if (allReadlist) return JSON.parse(allReadlist);
  return [];
};

const addReadlistToLocal = (book) => {
  const allBooks = getReadlistFromLocal();
  const isAlreadyExist = allBooks.find(
    (singleBook) => singleBook.bookId === book.bookId,
  );
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

const getWishlistFromLocal = () => {
  const allWishlist = localStorage.getItem("wishList");

  if (allWishlist) return JSON.parse(allWishlist);
  return [];
};

const addWishlistToLocal = (book) => {
  const allBooks = getWishlistFromLocal();
  const isAlreadyExist = allBooks.find(
    (singleBook) => singleBook.bookId === book.bookId,
  );
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

export {
  addReadlistToLocal,
  getReadlistFromLocal,
  addWishlistToLocal,
  getWishlistFromLocal,
};
