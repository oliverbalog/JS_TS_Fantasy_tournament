import Ability from "./Ability";
import HeroType from "./HeroType";
import HeroKind from "./HeroKind";
import Weapon from "./Weapon"

class Hero {
    id=1;
    name= "";
    type: HeroType = 'Warrior';
    hp= 0;
    abilities: Array<Ability> = [];
    armour= 0;
    evasion= 0;

    weapon: Weapon | undefined = undefined;

    constructor(id: number, name: string, type: HeroType) {
        this.id = id;
        this.name = name;
        this.type = type;
        Object.assign(this,{...HeroKind[type]})
    }

    equipWeapon(weapon: Weapon){
        this.weapon = weapon;
    }
}

export default Hero;