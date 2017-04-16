import React, {Component} from 'react';
import BookDetails from '../book-details/BookDetails';
import Comments from '../comments/Comments';
import './Book.css';
import {connect} from 'react-redux';

class Book extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const bookId = this.props.match.params.bookId;
    const index = this.props.books.findIndex(book => book.id === Number(bookId));
    const book = this.props.books[index];
    return (
      <div>
        <BookDetails book={book}/>
        <Comments bookId={book.id}/>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.booksData.books
  }
};

export default connect(mapStateToProps)(Book);
