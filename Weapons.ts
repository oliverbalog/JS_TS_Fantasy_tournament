import Weapon from "./Models/Weapon";

const Weapons: Weapon[] = [
    new Weapon(1,'Sword',['Warrior','Archer','Mage','Priest','Rogue'],[8,12],90),
    new Weapon(2,'Dagger',['Rogue'],[4,5],98),
    new Weapon(3,'War Hammer',['Priest'],[10,15],93),
    new Weapon(4,'Battle Axe',['Warrior'],[12,15],92),
    new Weapon(5,'Bow',['Archer'],[7,12],89),
    new Weapon(6,'Wand',['Mage'],[9,15],97),
]

export default Weapons;