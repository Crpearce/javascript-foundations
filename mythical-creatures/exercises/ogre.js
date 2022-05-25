class Ogre {
  constructor(ogreDetails) {
    this.name = ogreDetails.name;
    this.home = ogreDetails.abode ||'Swamp';
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter += 1;
  }
  swingAt(human) {
    let notices = human.noticesOgre();
    if (notices === true) {
      this.swings += 1;
    }
  }
}

module.exports = Ogre;
// npm test mythical-creatures/test/ogre-test.js
