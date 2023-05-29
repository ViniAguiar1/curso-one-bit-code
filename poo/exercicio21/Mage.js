const Character = require("./Characters");

class Mage extends Character {
    constructor(name, lifePts, attackPts, deferPts, magicPts) {
        super(name, lifePts, attackPts, deferPts)
        this.magicPts = magicPts
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.attackPts 
            + this.magicPts) - targetCharacter.deferPts
    }

    heal(targetCharacter) {
        targetCharacter.lifePts += this.magicPts * 2
    }
}

module.exports = Mage