const BASE_URL = "http://localhost:3031/books";

export const loadBooks = () => {
  return fetch(BASE_URL)
    .then(res => res.json());
};
