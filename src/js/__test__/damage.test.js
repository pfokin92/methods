import Undead from "../typescharacter/undead";

test('damage', () => {
    const undead = new Undead('Hero','Undead');
    undead.damage(50);
    const result = 62.5;
    expect(undead.health).toBe(result);
});