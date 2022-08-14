//принцип открытости/закрытости. Открытость для расширения и закрытость для изменения
//добавление функционала осуществляется не за счет изменения действующей функциональности, а за счет добавления новых сущностей
//На этапе разработтки продумать возможность расширения функционала за счет возможноси добавления новых сущностей

//В итоге нет необходимости в повторном(регрессионном) тестировании
//Меньше вероятости допустить ошибки

interface Attacker {
    attack: () => void;
}

class Weapon implements Attacker {
    damage = 0;
    range = 0;

    constructor(damage, range) {
        this.damage = damage;
        this.range = range;
    }
    attack() {}
}

class Sword extends Weapon {
    attack() {
        console.log('Удар мечом с уроном ' + this.damage)
    }
}

class Crossbow extends Weapon {
    attack() {
        console.log('Выстрел из арбалета с уроном ' + this.damage)
    }
}

class Character {
    name = '';
    weapon = null;

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(weapon) {
        this.weapon = weapon;
    }

    //делегируем метод в классе
    attack() {
        this.weapon.attack();
    }
}


const sword = new Sword(15,2);

const character = new Character('Warrior', sword);

//вызываем дилегированный метод attack
character.attack()

const crossbow = new Crossbow(40, 100);
character.changeWeapon(crossbow);
character.attack()