import {
  REQUEST_COMMENTS,
  REQUEST_ADD_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_ADD_COMMENT
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  comments: []
};

function commentsData(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        comments: action.payload.comments,
        lastUpdated: action.payload.receivedAt
      };
    case REQUEST_ADD_COMMENT:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_ADD_COMMENT:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        comments: [
          ...state.comments,
          action.payload.comment
        ],
        lastUpdated: action.payload.receivedAt
      };
    default:
      return state;
  }
}

export default commentsData;
