class Centaur {
  constructor(object) {
    this.name = object.name
    this.breed = object.type
    this.cranky = false
    this.standing = true
    this.shootRun = 0
    this.layingDown = false
  }
  shootBow() {
    if (this.cranky === true) {
      return 'NO!'
    } else {
      this.shootRun++
      return 'Twang!!!'
    }
  }
  run() {
    if (this.shootRun < 3 && this.cranky === false) {
      this.cranky = true
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }
  sleep() {
    if (this.layingDown === true) {
      this.cranky = false
      return 'ZZZZ'
    }
    return 'NO!'
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }
  layDown() {
    this.cranky = true
    this.standing = false
    this.layingDown = true
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false
    }
    return 'Not while I\'m laying down!'
  }
}

module.exports = Centaur;
// npm test mythical-creatures/test/centaur-test.js
