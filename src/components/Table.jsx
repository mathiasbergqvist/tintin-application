import React from 'react';

const Table = (props) => {

  const {title} = props.title;

  return (
    <div className="container">
      <h2>{title}</h2>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
