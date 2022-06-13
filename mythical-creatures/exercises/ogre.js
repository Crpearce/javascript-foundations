class Ogre {
  constructor(ogreDetails) {
    this.name = ogreDetails.name;
    this.home = ogreDetails.abode || 'Swamp';
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter += 1
    if (human.noticesOgre()) {
      this.swingAt(human)
      if (this.swings % 2 === 0 && this.swings !== 0) {
        human.knockedOut = true
      }
    }
  }
  swingAt(human) {
    this.swings += 1
  }
  apologize(human) {
    human.knockedOut = false
  }
}

module.exports = Ogre;
// npm test mythical-creatures/test/ogre-test.js
