import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  INCREMENT_LIKE
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
    case INCREMENT_LIKE:
      const i = action.payload.index;
      return [
        ...state.books.slice(0, i),
        {...state.books[i], likes: state.books[i].likes + 1},
        ...state.books.slice(i + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default booksData;
