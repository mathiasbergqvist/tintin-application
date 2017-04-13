import React from 'react';
import TableContainer from './TableStyle';
import {Link} from 'react-router-dom';

const Table = (props) => {

  return (
    <TableContainer className="container">
      <table className="table">
        <thead>
        <tr>
          <th><span className="glyphicon glyphicon-book" aria-hidden="true"></span></th>
          <th>Album</th>
          <th>Utgivningsår</th>
        </tr>
        </thead>
        <tbody>
        {props.books.map((book, id) => (
          <tr key={id} className="item-row">
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
