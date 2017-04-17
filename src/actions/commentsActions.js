import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REQUEST_ADD_COMMENT,
  RECEIVE_ADD_COMMENT,
} from './actionTypes';
import { loadComments, addCommentToDb } from '../lib/dbService';


function requestComment() {
  console.log('REQUEST COMMENTS');
  return {
    type: REQUEST_COMMENTS,
  };
}

function receiveComments(comments) {
  console.log('RECEIVE COMMENTS');
  return {
    type: RECEIVE_COMMENTS,
    payload: {
      comments,
      receivedAt: Date.now(),
    },
  };
}

function shouldFetchComments(state) {
  console.log('shouldFetchComments', state);
  if (state.commentsData.comments.length === 0) {
    return true;
  } else if (state.commentsData.isFetching) {
    return false;
  }
  return state.commentsData.didInvalidate;
}

function fetchComments() {
  return (dispatch) => {
    dispatch(requestComment());
    return loadComments()
      .then((comments) => {
        dispatch(receiveComments(comments));
      })
      .catch((e) => {
        throw new Error(`Error from loadBooks: ${e}`);
      });
  };
}

export function fetchCommentsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchComments(getState())) {
      return dispatch(fetchComments());
    }
    return Promise.resolve();
  };
}

function requestAddComment() {
  console.log('REQUEST ADD COMMENT');
  return {
    type: REQUEST_ADD_COMMENT,
  };
}

function receiveAddComment(comment) {
  console.log('RECEIVE ADD COMMENT');
  return {
    type: RECEIVE_ADD_COMMENT,
    payload: {
      comment,
      receivedAt: Date.now(),
    },
  };
}

export function addComment(author, comment, bookId) {
  return (dispatch) => {
    dispatch(requestAddComment());
    return addCommentToDb({ bookId, text: comment, user: author })
      .then((commentAdded) => {
        dispatch(receiveAddComment(commentAdded));
      })
      .catch((e) => {
        throw new Error(`Error from addComment: ${e}`);
      });
  };
}
