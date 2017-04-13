import React, {Component} from 'react';
import Comments from '../comments/Comments';
import './Book.css';
import {getBook} from '../../lib/dbService';

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
      hasLike: false,
    }
  }

  getButtonAppearance() {
    if(this.state.hasLike) {
      return "btn-success btn-lg";
    }
    else {
      return "btn-primary btn-lg";
    }
  }

  handleLike() {
    this.setState({
      hasLike: true
    });
  }

  render() {
    const {id, title, year, location, originalTitle, image, likes} = this.state.book;
    return (
      <div>
        <div className="book-title-header text-center">
          <img src="https://c2.staticflickr.com/4/3165/2641239248_f63b79f350_s.jpg" className="header-image" alt=""/>
          <h1>{title}</h1>
        </div>
        <div className="container text-center">
          <figure className="figure">
            <img src={image} className="figure-img img-fluid rounded cover-art" alt="Cover art"/>
            <figcaption class="figure-caption">
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
    const bookId = this.props.match.params.bookId;
    getBook(bookId)
      .then(book => {
        this.setState({
          book
        });
      })
      .catch(e => {
        throw new Error(`Error from getBook: ${e}`)
      });
  }
}

export default Book;
