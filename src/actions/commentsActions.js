import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REQUEST_ADD_COMMENT,
  RECEIVE_ADD_COMMENT
} from './actionTypes';
import {loadComments, addComment} from '../lib/dbService';


export function fetchCommentsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchComments(getState())) {
      return dispatch(fetchComments());
    } else {
      return Promise.resolve();
    }
  }
}

export function addComment(text, user, bookId) {
  return (dispatch) => {
    dispatch(requestAddComment());
    return addComment({text, user, bookId})
      .then(comment => {
        dispatch(receiveAddComment(comment));
      })
      .catch(e => {
        throw new Error(`Error from addComment: ${e}`);
      });
  }
}

function shouldFetchComments(state) {
  if (state.commentsData.comments.length === 0) {
    return true;
  } else if (state.commentsData.isFetching) {
    return false;
  } else {
    return state.commentsData.didInvalidate;
  }
}

function fetchComments() {
  return (dispatch) => {
    dispatch(requestComment());
    return loadComments()
      .then(comments => {
        dispatch(receiveComments(comments));
      })
      .catch(e => {
        throw new Error(`Error from loadBooks: ${e}`)
      });
  }
}

function requestComment() {
  console.log("REQUEST COMMENTS");
  return {
    type: REQUEST_COMMENTS
  }
}

function receiveComments(comments) {
  console.log("RECEIVE COMMENTS");
  return {
    type: RECEIVE_COMMENTS,
    payload: {
      comments,
      receivedAt: Date.now()
    }
  }
}

function requestAddComment() {
  console.log("REQUEST ADD COMMENT");
  return {
    type: REQUEST_ADD_COMMENT
  }
}

function receiveAddComment(comment) {
  console.log("RECEIVE ADD COMMENT");
  return {
    type: RECEIVE_ADD_COMMENT,
    payload: {
      comment,
      receivedAt: Date.now()
    }
  }
}
