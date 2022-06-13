class Craft {
  constructor (object) {
    this.name = object.type;
    this.materials = [{}, {}];
    this.completed = false;
  }
  completeCraft () {
    this.completed = true;
    return 'All done! It looks great!';
  }
  calculateProjectTotal (material) {
    
  }
}

module.exports = Craft;
// npm test crafting/test/craft-test.js
