import { combineReducers } from 'redux';
import commentsData from './comments/commentsData';
import booksData from './books/booksData';

const rootReducer = combineReducers({
  booksData,
  commentsData,
});

export default rootReducer;

