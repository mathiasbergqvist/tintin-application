import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_INCREMENT_LIKE,
  RECEIVE_INCREMENT_LIKE,
} from '../../actions/actionTypes';
import getBooksWithIncrementedLike from './bookReducerHelpers';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  books: [],
};

function booksData(state = initialState, action) {
  var foo = true;
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        books: action.payload.books,
        lastUpdated: action.payload.receivedAt,
      });
    case REQUEST_INCREMENT_LIKE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_INCREMENT_LIKE: // eslint-disable-line no-case-declarations
      const incrementedLikeBooks =
        getBooksWithIncrementedLike(action.payload.index, action.payload.book, state);
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        books: incrementedLikeBooks,
        lastUpdated: action.payload.receivedAt,
      };
    default:
      return state;
  }
}

export default booksData;
