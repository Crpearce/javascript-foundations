class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(dressPattern) {
    for (var i = 0; i < dressPattern.length; i++)
    this.clothes.dresses.push(dressPattern[i])
  }

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    var newInfant = infant
    if (this.disposition === "Vengeful") {
      infant.disposition = "Malicious"
      this.humanWards.push(infant)
    } if (this.humanWards.length >= 3) {
      this.disposition = "Good natured"
    } else {
      return newInfant
    }
  }
}









module.exports = Fairy;
// npm test mythical-creatures/test/fairy-test.js


// class Fairy {
//   constructor(name) {
//     this.name = name
//     this.dust = 10
//     this.clothes = {
//       dresses: ['Iris']
//     }
//     this.disposition = 'Good natured'
//     this.humanWards = []
//   }
//   receiveBelief() {
//     this.dust++
//   }
//   believe() {
//     this.dust += 10
//   }
//   makeDresses(flowers) {
//     for (var i = 0; i < flowers.length; i++)
//       this.clothes.dresses.push(flowers[i])
//   }
//   becomeProvoked() {
//     this.disposition = 'Vengeful'
//   }
//   replaceInfant(infant) {
//     var newInfant = infant
//     if (this.disposition === 'Vengeful') {
//       infant.disposition = 'Malicious'
//       this.humanWards.push(infant)
//     }
//     if (this.humanWards.length >= 3) {
//       this.disposition = 'Good natured'
//     }
//     return newInfant
//
//   }
// }
