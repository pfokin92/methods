import Character from '../typescharacter/character';

test('name', () => {
  const newGamer = new Character('Ann','Bowman');
  const result = 'Ann';
  expect(newGamer.name).toBe(result);
});

test('name Error', () => {
  expect(()=> new Character('','Bowman')).toThrowError('Ошибка. Имя не может быть таким');
})
test('type Error', () => {
  expect(()=> new Character('Ann','Man')).toThrowError('Ошибка. Не верно выбран тип');
})

