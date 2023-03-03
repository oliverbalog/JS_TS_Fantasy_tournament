import AbilityType from "./AbilityType";
import Hero from "./Hero";

class Arena {
  static randomDamage(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static toggleAbility(hero: Hero, activated = false): boolean {
    const chance = Math.random() * 100 <= 10;

    hero.abilities.forEach((ability) => {
      if (chance && !activated)
        console.log(
          hero.name + " activated the " + ability.type.toString() + " ability!"
        );
      switch (ability.type) {
        case "Armour Boost":
          hero.armour = activated
            ? hero.armour - 10
            : chance
            ? hero.armour + 10
            : hero.armour;
          break;
        case "Dodge":
          console.log(activated);
          hero.evasion = activated
            ? hero.evasion - 100
            : chance
            ? hero.evasion + 100
            : hero.evasion;
          break;
        case "FireStorm":
          hero.weapon.damage[0] = activated
            ? hero.weapon.damage[0] - 20
            : chance
            ? hero.weapon.damage[0] + 20
            : hero.weapon.damage[0];
          hero.weapon.damage[1] = activated
            ? hero.weapon.damage[1] - 20
            : chance
            ? hero.weapon.damage[1] + 20
            : hero.weapon.damage[1];
          break;
        case "HeadShot":
          hero.weapon.damage[0] = activated
            ? hero.weapon.damage[0] - 15
            : chance
            ? hero.weapon.damage[0] + 15
            : hero.weapon.damage[0];
          hero.weapon.damage[1] = activated
            ? hero.weapon.damage[1] - 15
            : chance
            ? hero.weapon.damage[1] + 15
            : hero.weapon.damage[1];
          break;
        case "Heal":
          hero.hp = activated ? hero.hp : chance ? hero.hp + 10 : hero.hp;
          break;
        default:
          return false;
      }
    });

    return chance && !activated;
  }

  static hit(attacker: Hero, taker: Hero): number {
    const isEvaded = Math.random() * 100 <= taker.evasion;
    if (isEvaded) console.log(taker.name + " evaded!");

    const initialDamage =
      attacker.weapon.usableBy.some((x) => x === attacker.type) && !isEvaded
        ? this.randomDamage(
            attacker.weapon.damage[0],
            attacker.weapon.damage[1]
          )
        : 0;

    const finalDamage =
      initialDamage != 0 ? initialDamage - Math.floor(taker.armour / 3) : 0;

    const isHit = Math.random()*100 <= attacker.weapon.hitChance;

    taker.hp = isHit ? taker.hp - finalDamage : taker.hp;
    return initialDamage;
  }

  static consoleTable(
    firstHeroStarting: Hero,
    secondHeroStarting: Hero,
    firstHero: Hero,
    secondHero: Hero,
    firstAttacker: string,
    firstHeroRawDamage: number,
    secondHeroRawDamage: number
  ) {
    const names = ["Heroes: ", firstHero.name, secondHero.name];
    const startinhHps = [
      "starting HPs: ",
      firstHeroStarting.hp,
      secondHeroStarting.hp,
    ];
    const endingHps = ["round end HPs: ", firstHero.hp, secondHero.hp];
    const whoAttackedFirst = [
      "first attacked: ",
      firstAttacker === firstHero.name ? "X" : "",
      firstAttacker === secondHero.name ? "X" : "",
    ];
    const rawDamages = [
      "raw damage taken: ",
      firstHeroRawDamage,
      secondHeroRawDamage,
    ];
    const damageTakens = [
      "actual damage taken: ",
      firstHeroStarting.hp - firstHero.hp,
      secondHeroStarting.hp - secondHero.hp,
    ];

    console.table([
      names,
      startinhHps,
      endingHps,
      whoAttackedFirst,
      rawDamages,
      damageTakens,
    ]);
  }

  static startTournament(firstHero: Hero, secondHero: Hero): void {
    let round = 1;

    while (firstHero.hp > 0 && secondHero.hp > 0) {
      console.log("Round " + round + "!");
      let firstHeroRawDamage = 0;
      let secondHeroRawDamage = 0;
      let firstAttacker = "";

      const firstHeroStarting = { ...firstHero };
      const secondHeroStarting = { ...secondHero };

      const random = Math.random();
      if (random > 0.495) {
        const toggled = this.toggleAbility(firstHero);
        secondHeroRawDamage = this.hit(firstHero, secondHero);
        firstAttacker = firstHero.name;
        if (toggled) {
          this.toggleAbility(firstHero, toggled);
        }

        if (secondHero.hp > 0) {
          const toggled = this.toggleAbility(secondHero);
          firstHeroRawDamage = this.hit(secondHero, firstHero);
          if (toggled) {
            this.toggleAbility(secondHero, toggled);
          }
        }
      } else {
        firstAttacker = secondHero.name;
        const toggled = this.toggleAbility(secondHero);
        firstHeroRawDamage = this.hit(secondHero, firstHero);
        if (toggled) {
          this.toggleAbility(secondHero, toggled);
        }
        if (firstHero.hp > 0) {
          const toggled = this.toggleAbility(firstHero);
          secondHeroRawDamage = this.hit(firstHero, secondHero);
          if (toggled) {
            this.toggleAbility(firstHero, toggled);
          }
        }
      }

      this.consoleTable(
        firstHeroStarting as Hero,
        secondHeroStarting as Hero,
        firstHero,
        secondHero,
        firstAttacker,
        firstHeroRawDamage,
        secondHeroRawDamage
      );

      round++;
    }
  }
}

export default Arena;
