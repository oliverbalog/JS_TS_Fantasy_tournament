"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Weapon_1 = __importDefault(require("./Models/Weapon"));
const Weapons = [
    new Weapon_1.default(1, 'Sword', ['Warrior', 'Archer', 'Mage', 'Priest', 'Rogue'], [8, 12], 90),
    new Weapon_1.default(2, 'Dagger', ['Rogue'], [4, 5], 98),
    new Weapon_1.default(3, 'War Hammer', ['Priest'], [10, 15], 93),
    new Weapon_1.default(4, 'Battle Axe', ['Warrior'], [12, 15], 92),
    new Weapon_1.default(5, 'Bow', ['Archer'], [7, 12], 89),
    new Weapon_1.default(6, 'Wand', ['Mage'], [9, 15], 97),
];
exports.default = Weapons;
//# sourceMappingURL=Weapons.js.map