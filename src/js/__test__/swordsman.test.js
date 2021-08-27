import Swordsman from '../typescharacter/swordsman'


test('type Swordsman', () => {
  const newGamer = new Swordsman('John', 'Swordsman');
  const result = 'Swordsman';
  expect(newGamer.type).toBe(result);
});
