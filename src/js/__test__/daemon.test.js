import Daemon from '../typescharacter/daemon';

test('type Daemon', () => {
    const newGamer = new Daemon('Tom', 'Daemon');
    const result = 'Daemon';
    expect(newGamer.type).toBe(result);
  });