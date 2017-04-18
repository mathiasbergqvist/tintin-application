export default function getBooksWithIncrementedLike(bookIndex, book, applicationState) {
  return [
    ...applicationState.books.slice(0, bookIndex),
    book,
    ...applicationState.books.slice(bookIndex + 1),
  ];
};
