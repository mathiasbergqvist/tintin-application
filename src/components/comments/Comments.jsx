import React, {Component} from 'react';
import CommentsBox from '../comments-box/CommentsBox';
import {simpleInputValidation} from './CommentsHelpers';
import {Button} from 'react-bootstrap';
import {addComment} from '../../actions/commentsActions';
import {connect} from 'react-redux';
import './Comments.css';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  render() {
    const bookId = this.props.bookId;
    const commentsForBook = this.props.commentsData.comments.filter(comment => comment.bookId === bookId);
    return (
      <div className="comments container">
        <h2>Kommentarer</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="author">Namn:</label>
            <input id="author"
                   type="text"
                   className="form-control"
                   value={this.state.author}
                   onChange={this.handleAuthorChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Kommentar:</label>
            <textarea id="comment"
                      className="form-control"
                      rows="4"
                      value={this.state.comment}
                      onChange={this.handleCommentChange} required/>
          </div>
          <Button type="submit" bsStyle="primary">Kommentera</Button>
        </form>
        {this.getCommentsbox(commentsForBook)}
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if(simpleInputValidation(this.state.author) && simpleInputValidation(this.state.comment)){
      this.props.handleAddComment(this.state.author, this.state.comment, this.props.bookId);
    } else {
     alert("Invalid from input!");
    }
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleCommentChange(e) {
    this.setState({
      comment: e.target.value
    });
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
    handleAddComment: (author, comment, bookId) => {
      dispatch(addComment(author, comment, bookId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
