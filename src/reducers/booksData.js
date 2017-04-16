import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_INCREMENT_LIKE,
  RECEIVE_INCREMENT_LIKE
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  books: []
};

function booksData(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        books: action.payload.books,
        lastUpdated: action.payload.receivedAt
      });
    case REQUEST_INCREMENT_LIKE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_INCREMENT_LIKE:
      const incrementedBookIndex = action.payload.index;
      const incrementedLikeBooks = [
        ...state.books.slice(0, incrementedBookIndex),
        action.payload.book,
        ...state.books.slice(incrementedBookIndex + 1)
      ];
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        books: incrementedLikeBooks,
        lastUpdated: action.payload.receivedAt
      };
    default:
      return state;
  }
  return state;
}

export default booksData;
