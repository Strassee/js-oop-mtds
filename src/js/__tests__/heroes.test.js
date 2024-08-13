import Character, { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../heroes';

test('make Bowman', () => {
  const hero = new Bowman('Bo');
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});

test('make Swordsman', () => {
  const hero = new Swordsman('Sw');
  const result = {
    name: 'Sw',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(hero).toEqual(result);
});

test('make Magician', () => {
  const hero = new Magician('Ma');
  const result = {
    name: 'Ma',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(hero).toEqual(result);
});

test('make Daemon', () => {
  const hero = new Daemon('Da');
  const result = {
    name: 'Da',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(hero).toEqual(result);
});

test('make Undead', () => {
  const hero = new Undead('Un');
  const result = {
    name: 'Un',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});

test('make Zombie', () => {
  const hero = new Zombie('Zo');
  const result = {
    name: 'Zo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(hero).toEqual(result);
});

test('make name error', () => {
  expect(() => {
    new Zombie('Z');
  }).toThrow();
});

test('make type error', () => {
  expect(() => {
    new Character('Zo', 'Zombie1', 40, 10);
  }).toThrow();
});

test('method levelUp', () => {
  const hero = new Swordsman('Sw');
  hero.levelUp();
  const result = {
    name: 'Sw',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  expect(hero).toEqual(result);
});

test('method levelUp health 0', () => {
  expect(() => {
    const hero = new Swordsman('Sw');
    hero.health = 0;
    hero.levelUp();
  }).toThrow();
});

test('method damage(points)', () => {
  const hero = new Bowman('Bo');
  hero.damage(133);
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 0.25,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});

test('method damage(points) health 0', () => {
  const hero = new Bowman('Bo');
  hero.damage(137);
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});
