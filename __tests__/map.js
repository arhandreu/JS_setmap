import ErrorRepository from '../src/map';

const rep = new ErrorRepository();

test.each([
  [1, 'Ошибка1'],
  [2, 'Ошибка2'],
  [3, 'Ошибка3'],
  [4, 'Unknown error'],
])('Проверка ошибки - %s', (nickname, expected) => {
  const result = rep.translate(nickname);
  expect(result).toBe(expected);
});
