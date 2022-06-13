var Snowman = require('./Snowman');
class Human {
  constructor(name) {
    this.name = name
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(material, qty) {
    this.materials[material] = this.materials[material] + qty
  }

  buildASnowman(){
    var newSnowman = new Snowman(this.materials)
    newSnowman.canWearMagicHat()
    return newSnowman
  }
  placeMagicHat() {
    if (this.buildASnowman().magicHat === true) {
      return 'Woah, this snowman is coming to life!'
    } else {
      return 'I guess I didn\'t build it correctly.'
    }
  }
}



module.exports = Human;








//
// class Human {
//   constructor(name, materials) {
//     this.name = name
//     this.wantsToBuildASnowman = true
//     this.materials = {
//       snowballs: 0,
//       coal: 0,
//       buttons: 0,
//       carrots: 0
//     }
//   }
//
//   gatherMaterials(material, qty) {
//     this.materials[material] = qty + this.materials[material]
//   }
//
//   buildASnowman() {
//     var snowman = new Snowman(this.materials);
//     snowman.canWearMagicHat()
//     return snowman;
//   }
//   placeMagicHat() {
//     this.buildASnowman();
//     if (this.buildASnowman().magicHat === true) {
//       return `Woah, this snowman is coming to life!`
//     } else {
//       return 'I guess I didn\'t build it correctly.'
//     }
//   }
// }
