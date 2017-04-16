import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers';

const defaultState = {
  booksData: {
    isFetching: false,
    didInvalidate: false,
    books: []
  },
  comments: []
};

export default function configureStore(preloadedState = defaultState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
