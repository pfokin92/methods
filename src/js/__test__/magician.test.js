import Magician from '../typescharacter/magician' 

test('type Magician', () => {
    const newGamer = new Magician('Pavel', 'Magician');
    const result = 'Magician';
    expect(newGamer.type).toBe(result);
  });
  
  