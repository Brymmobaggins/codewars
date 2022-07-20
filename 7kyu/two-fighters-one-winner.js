// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious.Death is defined as having health <= 0.

// Each fighter will be a Fighter object / instance.See the Fighter class below in your chosen language.

// Both health and damagePerAttack(damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects

function Fighter(name, health, damagePerAttack){
    this.name = name
    this.health = health
    this.damagePerAttack = damagePerAttack
    this.string = function(){
        return this.name
    }
}

function declareWinner(fighter1, fighter2, firstAttack){

    let fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)

    if(fac1 < fac2){
        return fighter2.name
    }else if(fac2 < fac1){
        return fighter1.name
    }else{
        return firstAttack
    }

}