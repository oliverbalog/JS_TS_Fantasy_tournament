"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./Models/Hero"));
const heroes = [
    new Hero_1.default(1, 'George', 'Warrior'),
    new Hero_1.default(2, 'Fred', 'Priest'),
    new Hero_1.default(3, 'Mike', 'Mage'),
    new Hero_1.default(4, 'Oliver', 'Rogue'),
    new Hero_1.default(5, 'Calvin', 'Archer'),
];
exports.default = heroes;
//# sourceMappingURL=Heroes.js.map