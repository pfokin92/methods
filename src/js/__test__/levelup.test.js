import Bowman from '../typescharacter/bowman';

test('health = 0', () => {
    const newGamer = new Bowman('Jack','Bowman');
    newGamer.health = 0;
    expect(()=>newGamer.levelUp()).toThrowError('Ошибка. Нельзя повысить уровень умершего');
});

test('health => 100', () => {
    const newGamer = new Bowman('Jack','Bowman');
    newGamer.health=15;
    newGamer.levelUp();
    const result = 100;
    expect(newGamer.health).toBe(result);
});

test('levelUp test', () => {
    const newGamer = new Bowman('Jack','Bowman');
    newGamer.levelUp();
    const result = 2;
    expect(newGamer.level).toBe(result);
});

test('attack +20%', () => {
    const newGamer = new Bowman('Jack','Bowman');
    newGamer.levelUp();
    const result = 30;
    expect(newGamer.attack).toBe(result);
});

test('defence +20%', () => {
    const newGamer = new Bowman('Jack','Bowman');
    newGamer.levelUp();
    const result = 30;
    expect(newGamer.defence).toBe(result);
});


