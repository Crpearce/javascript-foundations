var Runner = require("./runner.js");

class Roadrace {
  constructor(object) {
    this.name = object.title
    this.location = object.city
  }
  setDistance(title, city, length) {
    var newRace = new Roadrace({title: title, city: city })
    console.log(newRace.city)
    return newRace
  }
}

module.exports = Roadrace;
//npm test mythical-creatures/test/medusa-test.js
