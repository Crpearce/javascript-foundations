var Victim = require('./victim');
class Werewolf {
  constructor(name, form) {
    this.name = name
    this.form = 'human'
    this.hungry = false
  }
  completeTransformation() {
    if (this.form === 'wolf') {
      this.form = 'human'
      this.hungry = false
      return 'Where are I?'
    } else if (this.form === 'human') {
      this.form = 'wolf'
      this.hungry = true
      return 'Aaa-Woooo!'
    }
  }
  eatVictim(victim) {
    if (this.hungry === true && this.form === 'wolf') {
      victim.alive = false
      this.form = 'human'
      return 'Yum, Hannah was delicious.'
    } else {
      return "No way am I eating Baby, I'd like a burger!"
    }
  }
}









module.exports = Werewolf;
// npm test mythical-creatures/test/werewolf-test.js







// class Werewolf {
//   constructor(name, form) {
//     this.name = name;
//     this.form = form || 'human';
//     this.hungry = false;
//   }
//   completeTransformation() {
//     if (this.form === 'human') {
//       this.form = "wolf"
//       this.hungry = true;
//       return 'Aaa-Woooo!'
//     } else if (this.form === "wolf") {
//       this.form = 'human'
//       this.hungry = false;
//       return 'Where are I?'
//     }
//   }
//   eatVictim(victim) {
//     var eatenVictim = new Victim(victim.name)
//     if (this.hungry === true && this.form === 'wolf') {
//       this.hungry = false;
//       victim.alive = false;
//       this.form = 'human'
//       return `Yum, ${victim.name} was delicious.`
//     } else {
//       return "No way am I eating Baby, I'd like a burger!"
//     }
//   }
// }
