const Character = require("./Characters");

class Thief extends Character{
    attack(targetCharacter) {
        targetCharacter.lifePts -= this.attackPts - targetCharacter.deferPts * 2 
    }
}

module.exports = Thief