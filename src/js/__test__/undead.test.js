
import Undead from '../typescharacter/undead';

test('type Undead', () => {
    const newGamer = new Undead('Mike', 'Undead');
    const result = 'Undead';
    expect(newGamer.type).toBe(result);
  });