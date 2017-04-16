import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_INCREMENT_LIKE,
  RECEIVE_INCREMENT_LIKE,
  ADD_COMMENT
} from './actionTypes';
import {loadBooks, updateBook} from '../lib/dbService';

export function incrementLikes(index, book) {
  return (dispatch) => {
    dispatch(requestIncrementLike(book));
    return updateBook(increment(book))
      .then(book => {
        dispatch(receiveIncrementLike(index, book));
      })
      .catch(e => {
        throw new Error(`Error from updateBook: ${e}`);
      })
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

export function addComment(comment, author, bookId) {
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

function fetchBooks() {
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

function increment(book){
  return {...book, likes: book.likes + 1}
}

function shouldFetchBooks(state) {
  if (state.booksData.books.length === 0) {
    return true;
  } else if (state.booksData.isFetching) {
    return false;
  } else {
    return state.booksData.didInvalidate;
  }
}

function requestIncrementLike() {
  console.log("REQUEST INCREMENT LIKE");
  return {
    type: REQUEST_INCREMENT_LIKE
  }
}

function receiveIncrementLike(index, book) {
  console.log("RECEIVE INCREMENT LIKE");
  return {
    type: RECEIVE_INCREMENT_LIKE,
    payload: {
      index,
      book
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


