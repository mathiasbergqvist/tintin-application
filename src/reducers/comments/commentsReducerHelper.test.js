/* eslint-disable no-undef */
import addComment from './commentsReducerHelper';

test('add Comment should add comment to comments list', () => {
  const startComment = {
    id: 2,
    bookId: '4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user: 'Tintin',
  };

  const startState = {
    isFetching: false,
    didInvalidate: false,
    comments: [
      {
        id: 1,
        bookId: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user: 'Haddock',
      },
    ],
  };

  const result = addComment(startState, startComment);

  expect(result.length).toEqual(startState.comments.length + 1);
  expect(result[result.length - 1]).toEqual(startComment);
});

test('addComment should not mutate the original state', () => {
  const startComment = {
    id: 2,
    bookId: '4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user: 'Tintin',
  };

  const startState = {
    isFetching: false,
    didInvalidate: false,
    comments: [
      {
        id: 1,
        bookId: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user: 'Haddock',
      },
    ],
  };

  const result = addComment(startState, startComment);
  expect(result).not.toEqual(startState.comments);
});
