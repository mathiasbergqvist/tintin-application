import React from 'react';
import ListedBook from '../listed-book/ListedBook';
import './Table.css';

const Table = (books) => {

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
