import Team from '../src/set';

const team = new Team();
team.members.add(1);
team.members.add(2);
team.members.add(3);

test('addError', () => {
  function add() {
    team.add(3);
  }
  expect(add).toThrowError(new Error('Данный персонаж уже в команде'));
});

test('add', () => {
  const expected = new Set([1, 2, 3, 4]);
  team.add(4);
  expect(team.members).toEqual(expected);
});

test('addAll', () => {
  const expected = new Set([1, 2, 3, 4, 5]);
  team.add_all(3, 4, 5);
  expect(team.members).toEqual(expected);
});

test('toArray', () => {
  const expected = [1, 2, 3, 4, 5];
  expect(team.toArray()).toEqual(expected);
});
