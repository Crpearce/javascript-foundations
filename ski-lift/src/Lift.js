var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(name, liftTicket) {
    var newSkier = new Skier(name, liftTicket)
    if (newSkier.hasLiftTicket === false) {
      return 'Sorry, Hannah. You need a lift ticket!'
    } if (this.skiers.length < this.limit) {
      this.skiers.push(newSkier)
    } else {
      return 'Sorry, Kayla. Please wait for the next lift!'
    }
  }
  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down'
    }
    if (this.limit - this.skiers.length === 1) {
      this.safetyBar
      return 'We still need 1 more skier!'
    }
    if (this.limit - this.skiers.length === 2) {
      this.safetyBar
      return 'We still need 2 more skiers!'
    }
  }
}
module.exports = Lift;

// npm test ski-lift/test/Lift-test.js
