import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from './heroes';

const heroes = [new Bowman('Bo'), new Swordsman('Sw'), new Magician('Ma'), new Daemon('Da'), new Undead('Un'), new Zombie('Zo')];

heroes.forEach((hero, ind) => {
  console.log(ind, hero);
});

heroes[0].damage(133);
heroes[1].levelUp();
console.log(heroes[0], heroes[1]);
