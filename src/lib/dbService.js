import fetch from 'isomorphic-fetch';

const BASE_URL_BOOKS = 'http://localhost:3031/books';
const BASE_URL_COMMENTS = 'http://localhost:3031/comments';

export const loadBooks = () => fetch(BASE_URL_BOOKS)
    .then(res => res.json());

export const updateBook = book => fetch(`${BASE_URL_BOOKS}/${book.id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(book),
}).then(res => res.json());

export const loadComments = () => fetch(BASE_URL_COMMENTS)
    .then(res => res.json());

export const addCommentToDb = comment => fetch(BASE_URL_COMMENTS, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(comment),
}).then(res => res.json());

