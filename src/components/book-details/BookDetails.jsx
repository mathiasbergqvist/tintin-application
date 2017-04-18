import React, {Component} from 'react';
import {incrementLikes} from '../../actions/bookActions';
import {connect} from 'react-redux';
import './BookDetails.css';

class BookDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasLike: false
    };
    this.onLike = this.onLike.bind(this);
  }

  render() {
    const bookId = this.props.bookId;
    const index = this.props.books.findIndex(book => book.id === Number(bookId));
    const book = this.props.books[index];
    const {title, year, location, originalTitle, image, likes} = book;
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
              <td className="display-bold"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
              </td>
              <td>{likes}</td>
            </tr>
            </tbody>
          </table>
          <button className={this.getButtonAppearance()} onClick={e => this.onLike(index, book)} disabled={this.state.hasLike}>
            <span className="glyphicon glyphicon-thumbs-up button-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }

  onLike(index, book) {
    this.props.handleLike(index, book);
    this.setState({
      hasLike: true
    });
  }

  getButtonAppearance() {
    if (this.state.hasLike) {
      return "btn-success btn-lg";
    }
    else {
      return "btn-primary btn-lg";
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.booksData.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLike: (index, book) => {
      dispatch(incrementLikes(index, book));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

