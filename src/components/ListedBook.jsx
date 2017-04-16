import React from 'react';

const ListedBook = ({id, title, year, location, originalTitle, thumbnail, image, likes}) => {
  return (
    <tr className="item-row">
      <td>
        <img src={thumbnail} alt=""/>
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{year}</p>
      </td>
    </tr>
  );
};

export default ListedBook;
