"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Arena_1 = __importDefault(require("./Models/Arena"));
const Weapons_1 = __importDefault(require("./Weapons"));
const Heroes_1 = __importDefault(require("./Heroes"));
const hero1 = Heroes_1.default[0];
hero1.equipWeapon(Weapons_1.default[0]);
const hero2 = Heroes_1.default[2];
hero2.equipWeapon(Weapons_1.default[5]);
Arena_1.default.startTournament(hero1, hero2);
//# sourceMappingURL=index.js.map