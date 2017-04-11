import React from 'react';
import Style from './TableStyle';

const Table = (props) => {

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
        <tr>
          <th></th>
          <th style={Style.tableHeader}>Name</th>
          <th style={Style.tableHeader}>Year</th>
        </tr>
        </thead>
        <tbody>
        {props.books.map((book, id) => (
          <tr key={id}>
            <td>
              <img src={book.thumbnail} alt=""/>
            </td>
            <td>
              <p>{book.title}</p>
            </td>
            <td>
              <p>{book.year}</p>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
