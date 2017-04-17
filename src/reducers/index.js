import { combineReducers } from 'redux';
import commentsData from './commentsData';
import booksData from './booksData';

const rootReducer = combineReducers({
  booksData,
  commentsData,
});

export default rootReducer;

