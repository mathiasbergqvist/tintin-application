import getBooksWithIncrementedLike from './bookReducerHelpers';

test('getBooksWithIncrementedLike should add book with incremented like at corresponding index', () => {
  const startBook = {
    id: 2,
    title: 'Tintin I Kongo',
    year: '1931',
    originalTitle: 'Tintin au Congo',
    location: 'Kongo',
    thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
    image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
    likes: 10,
  };
  const startState = {
    isFetching: false,
    didInvalidate: false,
    books: [
      {
        id: 1,
        title: 'Tintin I Sovjet',
        year: '1930',
        location: 'Sovjetunionen',
        originalTitle: 'Tintin au pays des Soviets',
        thumbnail: 'https://c2.staticflickr.com/4/3316/3184592173_9a5026f1c8_t.jpg',
        image: 'https://c2.staticflickr.com/4/3316/3184592173_9a5026f1c8_n.jpg',
        likes: 3,
      },
      {
        id: 2,
        title: 'Tintin I Kongo',
        year: '1931',
        originalTitle: 'Tintin au Congo',
        location: 'Kongo',
        thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
        image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
        likes: 9,
      },
      {
        id: 3,
        title: 'Tintin I Amerika',
        year: '1932',
        location: 'USA',
        originalTitle: 'Tintin en Amérique',
        thumbnail: 'https://c2.staticflickr.com/6/5614/15362593618_e0a15d8899_t.jpg',
        image: 'https://c2.staticflickr.com/6/5614/15362593618_e0a15d8899_n.jpg',
        likes: 6,
      },
    ],
  };
  const startBookIndex = 1;
  const result = getBooksWithIncrementedLike(startBookIndex, startBook, startState);

  expect(result[startBookIndex]).toEqual(startBook);
});

test('getBooksWithIncrementedLike should not mutate the original state', () => {
  const startBook = {
    id: 2,
    title: 'Tintin I Kongo',
    year: '1931',
    originalTitle: 'Tintin au Congo',
    location: 'Kongo',
    thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
    image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
    likes: 10,
  };
  const startState = {
    isFetching: false,
    didInvalidate: false,
    books: [
      {
        id: 1,
        title: 'Tintin I Sovjet',
        year: '1930',
        location: 'Sovjetunionen',
        originalTitle: 'Tintin au pays des Soviets',
        thumbnail: 'https://c2.staticflickr.com/4/3316/3184592173_9a5026f1c8_t.jpg',
        image: 'https://c2.staticflickr.com/4/3316/3184592173_9a5026f1c8_n.jpg',
        likes: 3,
      },
      {
        id: 2,
        title: 'Tintin I Kongo',
        year: '1931',
        originalTitle: 'Tintin au Congo',
        location: 'Kongo',
        thumbnail: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_t.jpg',
        image: 'https://c1.staticflickr.com/9/8778/17547677181_a12054015f_m.jpg',
        likes: 9,
      },
      {
        id: 3,
        title: 'Tintin I Amerika',
        year: '1932',
        location: 'USA',
        originalTitle: 'Tintin en Amérique',
        thumbnail: 'https://c2.staticflickr.com/6/5614/15362593618_e0a15d8899_t.jpg',
        image: 'https://c2.staticflickr.com/6/5614/15362593618_e0a15d8899_n.jpg',
        likes: 6,
      },
    ],
  };
  const startBookIndex = 1;
  const result = getBooksWithIncrementedLike(startBookIndex, startBook, startState);

  expect(result).not.toEqual(startState.books);
});
