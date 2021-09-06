const typesArray = ['Bowman','Swordsman','Magician','Daemon','Undead','Zombie'];
export default class Character {
  constructor(name, type) {
    if ((typeof (name) !== 'string') || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Имя не может быть таким');
    } else {
      this.name = name;
    }
    if (typesArray.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка. Не верно выбран тип');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Ошибка. Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
