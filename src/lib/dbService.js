const BASE_URL = "http://localhost:3031/books";

export const loadBooks = () => {
  return fetch(BASE_URL)
    .then(res => res.json());
};

export const getBook = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json());
}
