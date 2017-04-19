import React, { Component } from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { fetchCommentsIfNeeded } from '../../actions/commentsActions';
import { fetchBooksIfNeeded } from '../../actions/bookActions';
import App from '../app/App.jsx';
import Book from '../book/Book';
import configureStore from '../../store';

const store = configureStore();

export default class Root extends Component {

  render() {
    store.dispatch(fetchBooksIfNeeded())
      .then(() => {
        console.log('Store in root: ', store);
      });
    store.dispatch(fetchCommentsIfNeeded()).then(() => {
      console.log('Store in root: ', store);
    });

    const history = createBrowserHistory();

    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/book" component={App} />
            <Route path="/book/:bookId" component={Book} />
          </div>
        </Router>
      </Provider>
    );
  }
}
