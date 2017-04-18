import configureStore from './store';
import {
  REQUEST_BOOKS,
  REQUEST_COMMENTS,
  RECEIVE_BOOKS,
  RECEIVE_COMMENTS,
  RECEIVE_INCREMENT_LIKE,
  RECEIVE_ADD_COMMENT,
} from './actions/actionTypes';

test('store should handle dispatched REQUEST actions for comments and books', () => {
  const store = configureStore();
  const actions = [
    {
      type: REQUEST_BOOKS,
    },
    {
      type: REQUEST_COMMENTS,
    }
  ];

  actions.forEach(action => store.dispatch(action));

  const actual = store.getState();
  const expected = {
    "booksData": {"books": [], "didInvalidate": false, "isFetching": true},
    "commentsData": {"comments": [], "didInvalidate": false, "isFetching": true}
  };
  expect(actual).toEqual(expected);
});

test('store should handle dispatched RECEIVE actions for comments and books', () => {
  const store = configureStore();
  const actions = [
    {
      type: RECEIVE_BOOKS,
      payload: {
        books: [
          {
            "id": 2,
            "title": "Tintin I Kongo",
            "year": "1931",
            "originalTitle": "Tintin au Congo",
            "location": "Kongo",
            "thumbnail": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg",
            "image": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg",
            "likes": 9
          },
        ],
        receivedAt: 1492537122624
      }
    },
    {
      type: RECEIVE_COMMENTS,
      payload: {
        comments: [
          {
            "bookId": "2",
            "text": "Nice",
            "user": "Professor Kalkyl",
            "id": 12
          },
        ],
        receivedAt: 1492537122624,
      }
    }
  ];

  actions.forEach(action => store.dispatch(action));

  const actual = store.getState();
  const expected = {
    "booksData": {
      "books": [
        {
          "id": 2,
          "image": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg",
          "likes": 9,
          "location": "Kongo",
          "originalTitle": "Tintin au Congo",
          "thumbnail": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg",
          "title": "Tintin I Kongo",
          "year": "1931",
        },
      ],
      "didInvalidate": false,
      "isFetching": false,
      "lastUpdated": 1492537122624,
    },
    "commentsData": {
      "comments": [
        {
          "bookId": "2",
          "id": 12,
          "text": "Nice",
          "user": "Professor Kalkyl",
        },
      ],
      "didInvalidate": false,
      "isFetching": false,
      "lastUpdated": 1492537122624,
    },
  };
  expect(actual).toEqual(expected);
});

test('store should handle dispatched action RECEIVE_INCREMENT_LIKE', () => {
  const store = configureStore();
  const incrementedBook = {
    "id": 2,
    "title": "Tintin I Kongo",
    "year": "1931",
    "originalTitle": "Tintin au Congo",
    "location": "Kongo",
    "thumbnail": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg",
    "image": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg",
    "likes": 9
  };

  store.dispatch({
    type: RECEIVE_INCREMENT_LIKE,
    payload: {
      index: 0,
      book: incrementedBook,
    }
  });

  const actual = store.getState();
  const expected = {
    "booksData": {
      "books": [{
        "id": 2,
        "image": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg",
        "likes": 9,
        "location": "Kongo",
        "originalTitle": "Tintin au Congo",
        "thumbnail": "https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg",
        "title": "Tintin I Kongo",
        "year": "1931"
      }], "didInvalidate": false, "isFetching": false, "lastUpdated": undefined
    }, "commentsData": {"comments": [], "didInvalidate": false, "isFetching": false}
  };
  expect(actual).toEqual(expected);
});

test('store should handle dispatched action RECEIVE_ADD_COMMENT', () => {
  const store = configureStore();
  const newComment = {
    "bookId": "2",
    "text": "Nice",
    "user": "Professor Kalkyl",
    "id": 12
  };
  store.dispatch({
    type: RECEIVE_ADD_COMMENT,
    payload: {
      comment: newComment,
      receivedAt: 1492537122624
    }
  });

  const actual = store.getState();
  const expected = {"booksData": {"books": [], "didInvalidate": false, "isFetching": false},
    "commentsData": {
      "comments": [{"bookId": "2", "id": 12, "text": "Nice", "user": "Professor Kalkyl"}],
      "didInvalidate": false,
      "isFetching": false,
      "lastUpdated": 1492537122624
    }
  };
  expect(actual).toEqual(expected);
});
