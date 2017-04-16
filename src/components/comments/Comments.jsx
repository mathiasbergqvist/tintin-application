import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Comments.css';
import {getCommentsFromBookId} from '../../lib/dbService';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  render() {
    return (
      <div className="comments container">
        <h3>Kommentarer</h3>
        <form>
          <div className="form-group">
            <label htmlFor="comment">Kommentar:</label>
            <textarea id="comment" className="form-control" rows="4"></textarea>
          </div>
          <Button bsStyle="primary">Kommentera</Button>
        </form>
        <div className="user-comments text-center">
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("path id", this.props.match.params.bookId);
    console.log("bookId", this.props.bookId);
    getCommentsFromBookId(this.props.bookId)
      .then(comments => {
        console.log("COMMENTS", comments);
        this.setState({
          comments
        });
      })
      .catch(e => {
        throw new Error(`Error from getCommentsFromBookId: ${e}`);
      });
  }
}

export default Comments;
