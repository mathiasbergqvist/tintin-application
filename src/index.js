import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Book from './components/book/Book';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/book/:bookId" component={Book}/>
    </div>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
