import AbilityType from "./AbilityType";

class Ability {
    id= 1;
    type: AbilityType = 'Armour Boost';

    constructor(id: number, type: AbilityType){
        this.id = id;
        this.type = type;
    }
}

export default Ability;