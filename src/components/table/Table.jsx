import React from 'react';
import {Link} from 'react-router-dom';
import './Table.css';
import ListedBook from '../ListedBook';

const Table = (books) => {
  console.log("Books in table", books);
  return (
    <div className="container">
      <table className="table">
        <thead>
        <tr>
          <th><span className="glyphicon glyphicon-book" aria-hidden="true"></span></th>
          <th>Album</th>
          <th>Utgivningsår</th>
        </tr>
        </thead>
        <tbody>
        {books.books.map((book, id) => (
          <ListedBook
            key={id}
            {...book}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
