/* eslint-disable no-undef */
import simpleInputValidation from './CommentsHelpers';

test('simpleInputValidation should return true for valid input', () => {
  const inputExpression = 'The adventures of Tintin';
  const result = simpleInputValidation(inputExpression);
  expect(result).toEqual(true);
});

test('simpleInputValidation should return true for invalid input', () => {
  const inputExpression = "alert('Rastapopolus!');";
  const result = simpleInputValidation(inputExpression);
  expect(result).toEqual(false);
});
