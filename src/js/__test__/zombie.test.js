import Zombie from '../typescharacter/zombie';

test('type Zombie', () => {
    const newGamer = new Zombie('Rick', 'Zombie');
    const result = 'Zombie';
    expect(newGamer.type).toBe(result);
  });
  
  