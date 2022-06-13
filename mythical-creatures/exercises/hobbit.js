class Hobbit {
  constructor(name, age) {
    this.name = name.name;
    this.age = 0;
    this.adult = true;
    this.old = false;
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age < 33) {
      this.adult = false;
    } else if (this.age >= 33 && this.age <= 100) {
      this.adult = true;
    } else if (this.age >= 100) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;
//  npm test mythical-creatures/test/hobbit-test.js
