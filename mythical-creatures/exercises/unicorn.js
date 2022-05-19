class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(textStatement) {
    return `**;* ${textStatement} *;**`;
  }
}

module.exports = Unicorn;
//  npm test mythical-creatures/test/unicorn-test.js
