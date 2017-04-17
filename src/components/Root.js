import React, {Component} from 'react';
import App from './app/App';
import Book from './book/Book';
import configureStore from '../store';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {fetchCommentsIfNeeded} from '../actions/commentsActions';
import {fetchBooksIfNeeded} from '../actions/bookActions';
const store = configureStore();

export default class Root extends Component {
  render() {


    store.dispatch(fetchBooksIfNeeded())
      .then(() => {
        console.log("Store in root: ", store);
      });
    store.dispatch(fetchCommentsIfNeeded()).then(() => {
      console.log("Store in root: ", store);
    });

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={App}/>
            <Route path="/book/:bookId" component={Book}/>
          </div>
        </Router>
      </Provider>
    );
  }
}
