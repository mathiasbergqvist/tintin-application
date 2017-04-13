import React, {Component} from 'react';
import {getBook} from '../../lib/dbService';

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
      <div className="container text-center">
        <h1>{title}</h1>
        <figure className="figure">
          <img src={image} class="figure-img img-fluid rounded" alt="Cover art"/>
          <figcaption class="figure-caption">
          </figcaption>
        </figure>
        <table className="table table-bordered">
          <tbody>
          <tr>
            <td>Originaltitel</td>
            <td>{originalTitle}</td>
          </tr>
          <tr>
            <td>Utgivningsår</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Geografisk plats</td>
            <td>{location}</td>
          </tr>
          </tbody>
        </table>
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
