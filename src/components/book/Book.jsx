import React, {Component} from 'react';
import BookDetails from '../book-details/BookDetails';
import Comments from '../comments/Comments';

class Book extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const bookId = this.props.match.params.bookId;
    return (
      <div>
        <BookDetails bookId={bookId}/>
        <Comments />
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }
}

export default Book;
