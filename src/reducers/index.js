import {combineReducers} from 'redux';
import comments from './commentsData';
import booksData from './booksData';

const rootReducer = combineReducers({
  booksData,
  comments
});

export default rootReducer;

