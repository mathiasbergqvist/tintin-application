import React from 'react';
import TableContainer from './TableContainer';

const Table = (props) => {

  return (
    <TableContainer className="container">
      <table className="table table-striped">
        <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Year</th>
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
    </TableContainer>
  );
};

export default Table;
