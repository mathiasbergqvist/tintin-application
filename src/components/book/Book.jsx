import React, {Component} from 'react';
import {getBook} from '../../lib/dbService';
import BookStyle from './BookStyle';

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }

  render() {
    const {title, year, location, originalTitle, image} = this.state.book;
    return (
      <BookStyle>
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
            </tbody>
          </table>
        </div>
      </BookStyle>
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
