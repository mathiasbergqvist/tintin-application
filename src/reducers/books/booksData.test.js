/* eslint-disable no-undef */
import booksData from './booksData';
import { REQUEST_BOOKS, RECEIVE_BOOKS, RECEIVE_INCREMENT_LIKE } from '../../actions/actionTypes';

test('booksData reducer should update isFetching for REQUEST actions', () => {
  const stateBefore = {
    isFetching: false,
    didInvalidate: false,
    books: [],
  };

  const action = {
    type: REQUEST_BOOKS,
  };

  const actual = booksData(stateBefore, action);
  const expected = { books: [], didInvalidate: false, isFetching: true };
  expect(actual).toEqual(expected);
});

test('booksData reducer should update books and isFetching for RECEIVE actions', () => {
  const stateBefore = {
    isFetching: true,
    didInvalidate: false,
    books: [],
  };

  const action = {
    type: RECEIVE_BOOKS,
    payload: {
      books: [
        {
          id: 2,
          title: 'Tintin I Kongo',
          year: '1931',
          originalTitle: 'Tintin au Congo',
          location: 'Kongo',
          thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
          image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
          likes: 9,
        },
      ],
      receivedAt: 1492537122624,
    },
  };

  const actual = booksData(stateBefore, action);
  const expected = {
    books: [{
      id: 2,
      image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
      likes: 9,
      location: 'Kongo',
      originalTitle: 'Tintin au Congo',
      thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
      title: 'Tintin I Kongo',
      year: '1931',
    }],
    didInvalidate: false,
    isFetching: false,
    lastUpdated: 1492537122624,
  };
  expect(actual).toEqual(expected);
});

test('booksData reducer should update books for RECEIVE_INCREMENT_LIKE action', () => {
  const stateBefore = {
    isFetching: false,
    didInvalidate: false,
    books: [
      {
        id: 2,
        title: 'Tintin I Kongo',
        year: '1931',
        originalTitle: 'Tintin au Congo',
        location: 'Kongo',
        thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
        image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
        likes: 9,
      },
    ],
    lastUpdated: 1492537122624,
  };

  const action = {
    type: RECEIVE_INCREMENT_LIKE,
    payload: {
      index: 0,
      book: {
        id: 2,
        title: 'Tintin I Kongo',
        year: '1931',
        originalTitle: 'Tintin au Congo',
        location: 'Kongo',
        thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
        image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
        likes: 10,
      },
      receivedAt: 1492537122625,
    },
  };

  const actual = booksData(stateBefore, action);
  const expected = {
    books: [{
      id: 2,
      image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
      likes: 10,
      location: 'Kongo',
      originalTitle: 'Tintin au Congo',
      thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
      title: 'Tintin I Kongo',
      year: '1931',
    }],
    didInvalidate: false,
    isFetching: false,
    lastUpdated: 1492537122625,
  };
  expect(actual).toEqual(expected);
});

