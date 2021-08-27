import Bowman from '../typescharacter/bowman'

test('type Bowman', () => {
    const newGamer = new Bowman('Sam', 'Bowman');
    const result = 'Bowman';
    expect(newGamer.type).toBe(result);
  });