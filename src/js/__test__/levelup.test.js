import Bowman from '../typescharacter/bowman';

test('health = 0', () => {
    const newGamer = new Bowman('Jack', 0, 1, 25, 25);
    newGamer.levelUp();
    const result = new Error('Ошибка. Нельзя повысить уровень умершего');
    expect(newGamer.health).not.toBe(result);
});

test('health => 100', () => {
    const newGamer = new Bowman('Jack', 15, 1, 25, 25);
    newGamer.levelUp();
    const result = 100;
    expect(newGamer.health).toBe(result);
});

test('levelUp test', () => {
    const newGamer = new Bowman('Jack');
    newGamer.levelUp();
    const result = 2;
    expect(newGamer.level).toBe(result);
});

test('attack +20%', () => {
    const newGamer = new Bowman('Jack', 15, 1, 25, 25);
    newGamer.levelUp();
    const result = 30;
    expect(newGamer.attack).toBe(result);
});

test('defence +20%', () => {
    const newGamer = new Bowman('Jack', 15, 1, 25, 25);
    newGamer.levelUp();
    const result = 30;
    expect(newGamer.defence).toBe(result);
});
