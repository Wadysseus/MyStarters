

function Burglar (name) {
    this.name = name;
    this.dead = false;
    this.stuff = ['baseball bat', 'burgers', 'second identity', 'money', 'skeleton key' ];
}

// var alice = new Burglar ('Alice')

// console.log('Alice?', alice);


Burglar.prototype.steal = function(victim){
    if (victim.stuff.length !== 0) {
        this.stuff.push(victim.stuff.pop())
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true
        console.log (victim.name + ' is flying with the angels... OF HELL.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
}

// var alice = new Burglar ('Alice')
// var bob = new Burglar ('Bob')

// alice.steal(bob)

var cityOfThieves = []

for ( var i = 0; i < 10; i++) {
    cityOfThieves.push(new Burglar('person ' + i))
}


var randomTheft = function() {
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    //JavaScript idiom - need something random from an array? Math.floor(Math.random() * array.length)]
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if (burglar !== victim) {
        burglar.steal(victim)
    }
}

// setTimeout(function(){  //setInterval works the same way, but will run it repeatedly rather than just once
//     console.log('stuff')
// }, 2000)



// var intervalID = setInterval(function(){ 
//     console.log('stuff')
// }, 2000)

var thievingInterval = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(thief){
        if (thief.dead ) {return false} //The filter sees false and says, "Aha! This thief is dead, it doesn't belong in the array."
        if ( !thief.dead ) {return true} //The filter sees true and says, "Okay, you're cool, you can stay."
        // return !thief.dead   //  this line does everything the previous two lines did
    })
    if ( cityOfThieves.length > 1) {
        randomTheft()
    }
    else {
        console.log(cityOfThieves[0].name + ' says: There can be only one.')
        clearInterval(thievingInterval)
    }
}, 50)