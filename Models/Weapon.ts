import HeroType from "./HeroType";

class Weapon {
    id= 1;
    name= "";
    usableBy: HeroType[] = [];
    damage: [number,number];
    hitChance: number;

    constructor(id: number, name: string, usableBy: HeroType[], damage: [number,number],hitChance: number){
        this.id = id;
        this.name=name;
        this.usableBy=usableBy;
        this.damage = damage;
        this.hitChance = hitChance;
    }
}

export default Weapon;