"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ability_1 = __importDefault(require("./Models/Ability"));
const Abilities = [
    new Ability_1.default(0, ""),
    new Ability_1.default(1, "Armour Boost"),
    new Ability_1.default(2, "Dodge"),
    new Ability_1.default(3, "FireStorm"),
    new Ability_1.default(4, "HeadShot"),
    new Ability_1.default(5, "Heal"),
];
exports.default = Abilities;
//# sourceMappingURL=Abilities.js.map