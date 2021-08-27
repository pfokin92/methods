import Character from '../typescharacter/character';

test('name', () => {
  const newGamer = new Character('Ann','Bowman');
  const result = 'Ann';
  expect(newGamer.name).toBe(result);
});
