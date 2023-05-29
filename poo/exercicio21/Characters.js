class Character {
    constructor(name, lifePts, attackPts, deferPts) {
        this.name = name
        this.lifePts = lifePts
        this.attackPts = attackPts
        this.deferPts = deferPts
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= this.attackPts - targetCharacter.deferPts
    }
}

module.exports =  Character