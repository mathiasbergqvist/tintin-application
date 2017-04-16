import {ADD_COMMENT} from '../actions/actionTypes';

const initialState = {
  comments: []
};

function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            bookId: action.payload.bookId,
            user: action.payload.author,
            text: action.payload.comment
          }
        ]
      };
    default:
      return state;
  }
}

export default comments;
