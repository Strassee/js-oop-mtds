import Bowman from './classes/Bowman';
import Daemon from './classes/Daemon';
import Magician from './classes/Magician';
import Swordsman from './classes/Swordsman';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';

const heroes = [new Bowman('Bo'), new Swordsman('Sw'), new Magician('Ma'), new Daemon('Da'), new Undead('Un'), new Zombie('Zo')];

heroes.forEach((hero, ind) => {
  console.log(ind, hero);
});

heroes[0].damage(133);
heroes[1].levelUp();
console.log(heroes[0], heroes[1]);
