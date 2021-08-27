import Undead from "../typescharacter/undead";

test('damege', () => {
    const undead = new Undead('Hero');
    undead.damage(50);
    const result = 62.5;
    expect(undead.health).toBe(result);
});