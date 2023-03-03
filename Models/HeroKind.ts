import Abilities from "../Abilities";
import Hero from "./Hero";
import HeroType from "./HeroType";


const HeroKind: Record<HeroType, Partial<Hero>> = 
{
    Warrior: {
        hp: 100,
        abilities: Abilities.filter(x=>x.type==='Armour Boost'),
        armour: 5,
        evasion: 20
    },
    Priest: {
        hp: 90,
        abilities: Abilities.filter(x=>x.type === 'Heal'),
        armour: 4,
        evasion: 20
    },
    Mage: {
        hp: 70,
        abilities: Abilities.filter(x=>x.type==='FireStorm'),
        armour: 1,
        evasion: 5
    },
    Rogue: {
        hp: 80,
        abilities: Abilities.filter(x=>x.type==='Dodge'),
        armour: 3,
        evasion: 30
    },
    Archer: {
        hp: 80,
        abilities: Abilities.filter(x=>x.type==='HeadShot'),
        armour: 2,
        evasion: 15
    }
}

export default HeroKind;