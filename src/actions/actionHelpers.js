export default function increment(book) {
  return { ...book, likes: book.likes + 1 };
}
