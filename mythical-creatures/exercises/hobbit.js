class Hobbit {
  constructor(hobbitName,age,old,hasRing) {
    this.name = hobbitName.name;
    this.age = 0;
    this.adult = true;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
      this.age += 1;
    if (this.age <= 32) {
      this.adult = false;
  } else if (this.age >= 33 && this.age <= 100) {
    this.adult = true;
  } else if (this.age >= 101) {
    this.old = true;
  }
}
  getRing() {
    if(this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }
}


module.exports = Hobbit;
//  npm test mythical-creatures/test/hobbit-test.js
