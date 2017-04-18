import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_INCREMENT_LIKE,
  RECEIVE_INCREMENT_LIKE,
} from './actionTypes';
import increment from './actionHelpers';
import { loadBooks, updateBook } from '../lib/dbService';

function requestIncrementLike() {
  console.log('REQUEST INCREMENT LIKE');
  return {
    type: REQUEST_INCREMENT_LIKE,
  };
}

function receiveIncrementLike(index, book) {
  console.log('RECEIVE INCREMENT LIKE');
  return {
    type: RECEIVE_INCREMENT_LIKE,
    payload: {
      index,
      book,
      receivedAt: Date.now(),
    },
  };
}

export function incrementLikes(index, book) {
  return (dispatch) => {
    dispatch(requestIncrementLike(book));
    return updateBook(increment(book))
      .then((bookWithIncrementedLike) => {
        dispatch(receiveIncrementLike(index, bookWithIncrementedLike));
      })
      .catch((e) => {
        throw new Error(`Error from updateBook: ${e}`);
      });
  };
}

function shouldFetchBooks(state) {
  if (state.booksData.books.length === 0) {
    return true;
  } else if (state.booksData.isFetching) {
    return false;
  }
  return state.booksData.didInvalidate;
}

function requestBooks() {
  console.log('REQUEST BOOK');
  return {
    type: REQUEST_BOOKS,
  };
}

function receiveBooks(books) {
  console.log('RECEIVE BOOK');
  return {
    type: RECEIVE_BOOKS,
    payload: {
      books,
      receivedAt: Date.now(),
    },
  };
}

function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks());
    return loadBooks()
      .then((books) => {
        dispatch(receiveBooks(books));
      })
      .catch((e) => {
        throw new Error(`Error from loadBooks: ${e}`);
      });
  };
}

export function fetchBooksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBooks(getState())) {
      return dispatch(fetchBooks());
    }
    return Promise.resolve();
  };
}

