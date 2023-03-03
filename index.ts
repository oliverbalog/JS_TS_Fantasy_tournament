import Arena from "./Models/Arena";
import weapons from './Weapons';
import heroes from "./Heroes";

const hero1 = heroes[0];
hero1.equipWeapon(weapons[0]);

const hero2 = heroes[2];
hero2.equipWeapon(weapons[5]);

Arena.startTournament(hero1,hero2)
