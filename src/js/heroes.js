export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name is not valid');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Type is not valid');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Hero is dead');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    const health = this.health - points * (1 - this.defence / 100);
    this.health = health >= 0 ? health : 0;
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}
