import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Comments.css';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
  }

  render() {
    return (
      <div className="comments container">
        <h3>Kommentarer</h3>
        <form>
          <div className="form-group">
            <label for="comment">Comment:</label>
            <textarea className="form-control" rows="4" id="comment"></textarea>
          </div>
          <Button bsStyle="primary">Kommentera</Button>
        </form>
        <div className="user-comments text-center">
        </div>
      </div>
    );
  }
}

export default Comments;
