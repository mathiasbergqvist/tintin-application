import increment from './actionHelpers';

test('increment should increment the likes value by 1', () => {
  const startBook = {
    "id": 6,
    "title": "Det Sönderslagna Örat",
    "year": "1937",
    "location": "Sydamerika",
    "originalTitle": "L'Oreille cassée",
    "thumbnail": "https://c2.staticflickr.com/2/1132/708767720_c37a49eda8_t.jpg",
    "image": "https://c2.staticflickr.com/2/1132/708767720_c37a49eda8_m.jpg",
    "likes": 2
  };
  const result = increment(startBook);
  expect(result.likes).toEqual(3);
});

test('increment should not mutate the original object', () => {
  const startBook = {
    "id": 6,
    "title": "Det Sönderslagna Örat",
    "year": "1937",
    "location": "Sydamerika",
    "originalTitle": "L'Oreille cassée",
    "thumbnail": "https://c2.staticflickr.com/2/1132/708767720_c37a49eda8_t.jpg",
    "image": "https://c2.staticflickr.com/2/1132/708767720_c37a49eda8_m.jpg",
    "likes": 2
  };
  const result = increment(startBook);
  expect(result).not.toBe(startBook);
});




