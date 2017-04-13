import React, {Component} from 'react';

class Book extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const bookId = this.props.match.params.bookId;
    return (
      <h1>Book: {bookId}</h1>
    );
  }
  
}

export default Book;
