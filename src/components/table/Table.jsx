import React from 'react';
import TableContainer from './TableContainer';
import {Link} from 'react-router-dom';

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
          <tr key={id}  >
            <td>
              <img src={book.thumbnail} alt=""/>
            </td>
            <td>
              <Link to={`book/${book.id}`}>
                <p>{book.title}</p>
              </Link>
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
