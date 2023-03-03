"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeroKind_1 = __importDefault(require("./HeroKind"));
class Hero {
    constructor(id, name, type) {
        this.id = 1;
        this.name = "";
        this.type = 'Warrior';
        this.hp = 0;
        this.abilities = [];
        this.armour = 0;
        this.evasion = 0;
        this.weapon = undefined;
        this.id = id;
        this.name = name;
        this.type = type;
        Object.assign(this, Object.assign({}, HeroKind_1.default[type]));
    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map