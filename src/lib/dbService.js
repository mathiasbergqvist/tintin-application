const BASE_URL_BOOKS = "http://localhost:3031/books";
const BASE_URL_COMMENTS = "http://localhost:3031/comments";

export const loadBooks = () => {
  return fetch(BASE_URL_BOOKS)
    .then(res => res.json());
};

export const getBook = (id) => {
  return fetch(`${BASE_URL_BOOKS}/${id}`)
    .then(res => res.json());
};

export const updateBook = (book) => {
  return fetch(`${BASE_URL_BOOKS}/${book.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(book)
  }).then(res => res.json());
};

export const getCommentsFromBookId = (bookId) => {
  return fetch(`${BASE_URL_COMMENTS}?bookId=${bookId}`)
    .then(res => {
      console.log(`${BASE_URL_COMMENTS}?bookId=${bookId}`, res.json);
      res.json()
    });
};


