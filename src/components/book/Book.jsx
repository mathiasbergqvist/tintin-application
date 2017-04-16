import React, {Component} from 'react';
import Comments from '../comments/Comments';
import './Book.css';
import {connect} from 'react-redux';

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasLike: false
    }
  }

  render() {
    const bookId = this.props.match.params.bookId;
    const index = this.props.books.findIndex(book => book.id === Number(bookId));
    const book = this.props.books[index];
    const {id, title, year, location, originalTitle, image, likes} = book;
    return (
      <div>
        <div className="book-title-header text-center">
          <img src="https://c2.staticflickr.com/4/3165/2641239248_f63b79f350_s.jpg" className="header-image" alt=""/>
          <h1>{title}</h1>
        </div>
        <div className="container text-center">
          <figure className="figure">
            <img src={image} className="figure-img img-fluid rounded cover-art" alt="Cover art"/>
            <figcaption className="figure-caption">
            </figcaption>
          </figure>
          <table className="table table-bordered">
            <tbody>
            <tr>
              <td className="display-bold">Originaltitel</td>
              <td>{originalTitle}</td>
            </tr>
            <tr>
              <td className="display-bold">Utgivningsår</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td className="display-bold">Geografisk plats</td>
              <td>{location}</td>
            </tr>
            <tr>
              <td className="display-bold"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></td>
              <td>{likes}</td>
            </tr>
            </tbody>
          </table>
          <button className={this.getButtonAppearance()} onClick={e => this.handleLike()} disabled={this.state.hasLike}>
            <span className="glyphicon glyphicon-thumbs-up button-icon" aria-hidden="true"></span>
          </button>
        </div>
        <Comments bookId={id}/>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  getButtonAppearance() {
    if(this.state.hasLike) {
      return "btn-success btn-lg";
    }
    else {
      return "btn-primary btn-lg";
    }
  }

  // handleLike() {
  //   const updatedBook = {...this.state.book, likes: this.state.book.likes+1};
  //   this.setState({
  //     hasLike: true,
  //     book: updatedBook
  //   });
  //   updateBook(updatedBook);
  // }
}

const mapStateToProps = (state) => {
  return {
    books: state.booksData.books
  }
};

export default connect(mapStateToProps)(Book);
