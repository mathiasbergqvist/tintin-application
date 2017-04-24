/* eslint-disable no-undef */
import commentsData from './commentsData';
import { REQUEST_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ADD_COMMENT } from '../../actions/actionTypes';

test('commentsData reducer should update isFetching for REQUEST actions', () => {
  const stateBefore = {
    isFetching: false,
    didInvalidate: false,
    comments: [],
  };

  const action = {
    type: REQUEST_COMMENTS,
  };

  const actual = commentsData(stateBefore, action);
  const expected = { comments: [], didInvalidate: false, isFetching: true };
  expect(actual).toEqual(expected);
});

test('commentsData reducer should update comments and isFetching for RECEIVE actions', () => {
  const stateBefore = {
    isFetching: false,
    didInvalidate: false,
    comments: [],
  };

  const action = {
    type: RECEIVE_COMMENTS,
    payload: {
      comments: [
        {
          bookId: '2',
          text: 'Nice',
          user: 'Professor Kalkyl',
          id: 12,
        },
      ],
      receivedAt: 1492537122624,
    },
  };

  const actual = commentsData(stateBefore, action);
  const expected = {
    comments: [
      {
        bookId: '2',
        id: 12,
        text: 'Nice',
        user: 'Professor Kalkyl',
      },
    ],
    didInvalidate: false,
    isFetching: false,
    lastUpdated: 1492537122624,
  };
  expect(actual).toEqual(expected);
});

test('commentsData reducer should update add comment to comments for RECEIVE_ADD_COMMENT actions', () => {
  const stateBefore = {
    isFetching: false,
    didInvalidate: false,
    comments: [],
  };

  const newComment = {
    bookId: '2',
    text: 'Nice',
    user: 'Professor Kalkyl',
    id: 12,
  };

  const action = {
    type: RECEIVE_ADD_COMMENT,
    payload: {
      comment: newComment,
      receivedAt: 1492537122624,
    },
  };

  const actual = commentsData(stateBefore, action);
  const expected = {
    comments: [
      {
        bookId: '2',
        id: 12,
        text: 'Nice',
        user: 'Professor Kalkyl',
      },
    ],
    didInvalidate: false,
    isFetching: false,
    lastUpdated: 1492537122624,
  };
  expect(actual).toEqual(expected);
});
