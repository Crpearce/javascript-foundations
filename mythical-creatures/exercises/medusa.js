var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  gazeAtVictim(person) {
    var newStatue = new Statue(person.name)
    if (this.statues.length <= 2) {
    this.statues.push(newStatue)
  }  else if (this.statues.length >= 3) {
    var releasedVictim = new Person(this.statues[0].name)
        this.statues.shift();
        this.statues.push(newStatue)
        releasedVictim.mood = 'relieved'
        return releasedVictim
}
}
}







module.exports = Medusa;
// `npm test mythical-creatures/test/medusa-test.js`






// class Medusa {
//   constructor(name) {
//     this.name = name;
//     this.statues = [];
//   }
//   gazeAtVictim(person) {
//     var newStatue = new Statue(person.name)
//     if (this.statues.length <= 2) {
//       this.statues.push(newStatue);
//     } else if (this.statues.length >= 3) {
//       var releasedVictim = new Person(this.statues[0].name)
//       this.statues.shift();
//       this.statues.push(newStatue);
//       releasedVictim.mood = 'relieved'
//       return releasedVictim;
//     }
//   }
// }
