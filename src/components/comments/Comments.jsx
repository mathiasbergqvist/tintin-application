import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {addComment} from '../../actions/commentsActions';
import {connect} from 'react-redux';
import './Comments.css';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.onAddComment = this.onAddComment.bind(this);
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
          <Button bsStyle="primary" onClick={e => this.onAddComment("foo", "bar", 1)}>Kommentera</Button>
        </form>
        <div className="user-comments text-center">
        </div>
      </div>
    );
  }

  onAddComment(user, text, bookId) {
    this.props.handleAddComment(user, text, bookId);
  }
}

const mapStateToProps = (state) => {
  return {
    commentsData: state.commentsData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddComment: (user, text, bookId) => {
      dispatch(addComment(user, text, bookId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
