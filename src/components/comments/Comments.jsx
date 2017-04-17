import React, {Component} from 'react';
import CommentsBox from '../comments-box/CommentsBox';
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
    const bookId = this.props.bookId;
    const commentsForBook = this.props.commentsData.comments.filter(comment => comment.bookId === Number(bookId));
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
        {this.getCommentsbox(commentsForBook)}
      </div>
    );
  }

  onAddComment(user, text, bookId) {
    this.props.handleAddComment(user, text, bookId);
  }

  getCommentsbox(commentsForBook) {
    const {isFetching} = this.props.commentsData;
    if (isFetching) {
      return (
        <h3>Laddar innehåll...</h3>
      );
    } else if (!isFetching && commentsForBook.length === 0) {
      return (
        <h3>Det finns ännu inga kommentarer för det här albumet.</h3>
      )
    } else if (commentsForBook.length > 0) {
      return (
        <CommentsBox comments={commentsForBook}/>
      );
    } else {
      <h3>Kunde inte ladda innehåll...</h3>
    }
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
