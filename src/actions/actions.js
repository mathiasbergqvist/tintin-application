import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  INCREMENT_LIKE,
  ADD_COMMENT
} from './actionTypes';
import {loadBooks} from '../lib/dbService';

function fetchBooks() {
  console.log("FETCH BOOKS");
  return (dispatch) => {
    dispatch(requestBooks());
    return loadBooks()
      .then(books => {
        dispatch(receiveBooks(books));
      })
      .catch(e => {
        throw new Error(`Error from loadBooks: ${e}`)
      });
  }
}

function shouldFetchBooks(state) {
  console.log("shouldFetchBooks", state);
  if (state.booksData.books.length === 0) {
    return true;
  } else if (state.booksData.isFetching) {
    return false;
  } else {
    return state.booksData.didInvalidate;
  }
}

export function fetchBooksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBooks(getState())) {
      return dispatch(fetchBooks());
    } else {
      return Promise.resolve();
    }
  }
}

function requestBooks() {
  console.log("REQUEST BOOK");
  return {
    type: REQUEST_BOOKS
  }
}

function receiveBooks(books) {
  console.log("RECEIVE BOOK");
  return {
    type: RECEIVE_BOOKS,
    payload: {
      books,
      receivedAt: Date.now()
    }
  }
}

function incrementLike(index) {
  console.log("INCREMENT LIKE");
  return {
    type: INCREMENT_LIKE,
    payload: {
      index
    }
  }
}

function addComment(comment, author, bookId) {
  console.log("ADD COMMENT");
  return {
    type: ADD_COMMENT,
    payload: {
      bookId,
      comment,
      author
    }
  }
}


