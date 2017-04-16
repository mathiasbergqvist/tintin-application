import {combineReducers} from 'redux';
import comments from './comments';
import booksData from './booksData';

const rootReducer = combineReducers({
  booksData,
  comments
});

export default rootReducer;

