"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Abilities_1 = __importDefault(require("../Abilities"));
const HeroKind = {
    Warrior: {
        hp: 100,
        abilities: Abilities_1.default.filter(x => x.type === 'Armour Boost'),
        armour: 5,
        evasion: 20
    },
    Priest: {
        hp: 90,
        abilities: Abilities_1.default.filter(x => x.type === 'Heal'),
        armour: 4,
        evasion: 20
    },
    Mage: {
        hp: 70,
        abilities: Abilities_1.default.filter(x => x.type === 'FireStorm'),
        armour: 1,
        evasion: 5
    },
    Rogue: {
        hp: 80,
        abilities: Abilities_1.default.filter(x => x.type === 'Dodge'),
        armour: 3,
        evasion: 30
    },
    Archer: {
        hp: 80,
        abilities: Abilities_1.default.filter(x => x.type === 'HeadShot'),
        armour: 2,
        evasion: 15
    }
};
exports.default = HeroKind;
//# sourceMappingURL=HeroKind.js.map