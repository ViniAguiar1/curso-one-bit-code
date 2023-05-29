const Character = require("./Characters");

class Warrior extends Character {
    constructor(name, lifePts, attackPts, deferPts, shieldPts){
        super(name, lifePts, attackPts, deferPts)
        this.shieldPts = shieldPts
        this.stance = 'attacking'
    }

    attack(targetCharacter) {
        if (this.stance === 'attacking') {
            super.attack(targetCharacter)
        }
    }

    switchStance () {
        if (this.stance === 'attacking') {
            this.stance = 'defesa'
            this.deferPts += this.shieldPts
        } else {
            this.stance = 'attacking'
            this.deferPts -= this.shieldPts
        }
    }
}

module.exports = Warrior