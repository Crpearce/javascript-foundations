class Skier {
  constructor(name, liftTicket) {
    this.name = name
    this.hasLiftTicket = liftTicket
    this.skillLevel = 1
    this.nextSlope = 'green circle'
  }
  takeLesson() {
    this.skillLevel++
  }
  pickSlope() {
    if (this.skillLevel > 2 && this.skillLevel < 4) {
      this.nextSlope = 'blue square'
    } else if (this.skillLevel > 4) {
      this.nextSlope = 'black diamond'
    }
  }
}

module.exports = Skier;

// npm test ski-lift/test/Skier-test.js
