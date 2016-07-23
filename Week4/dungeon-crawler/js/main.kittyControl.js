angular.module('KittyCrawler')
    .controller('kittyControl', 
    [
        'kittyFactory',
        kittyControl
        ])
        
var dieTypes = [6, 8, 10, 12, 20]

function kittyControl (kittyFactory) {
    var kCtrl = this;
    
    console.log("!", kittyFactory);
    
    //creating a new player
    kCtrl.createKitty = function(){
        new kittyFactory.kittyCreator ( kCtrl.newCat );
        console.error(kittyFactory.party);
    }
    
    // kCtrl.exitRoom(zones[i]){
    //     // This will eventually be useful!
    // }
    

    
    var weakMob = new kittyFactory.mobCreator({
        name : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],
        hp : this.mobHP,
        attack : this.attack,
        attackDesc : this.attackDesc,
        desc : this.desc
    });
    if (this.name == 'Undead Mouseketeer'){
        this.mobHP = 2 * Math.ceil( Math.random() * dieTypes[1]);
        this.attack = 8;
        var mousekAttacks = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"]
        this.attackDesc = " lunges at you, poking with its rusty bayonet!";
        this.desc = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the bayonet rusty with age.";
    }
    if (this.name == 'Spoopy Skeltal'){
        this.mobHP = 3 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack = 7;
        this.attackDesc = " flails at you in a skeltal fashion!";
        this.desc = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
     }
    if (this.name == 'Spoopy Skeltarcher'){
        this.mobHP = 2 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack = 10;
        this.attackDesc = " notches an arrow to its skeltal bow and fires!";
        this.desc = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    }
    if (this.name == 'Potted Petunia'){
        this.mobHP = 6 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack = 3;
        this.attackDesc = " bashes its floral form against you!";
        this.desc = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    }
}








// Rob's code for hp 30 +/- 5
// var modifier = Math.random() < 0.5 ? -1 : 1
// var rando = modifier * Math.ceil( Math.random() * 5)
// var health = 30 + rando


// My codes for Hit Dice
// var weakDice = hitDiceNumber * Math.ceil( Math.random() * 6)
// var mediumDice = hitDiceNumber * Math.ceil( Math.random() * 8)
// var toughDice = hitDiceNumber * Math.ceil( Math.random() * 10)
// var bossDice = hitDiceNumber * Math.ceil( Math.random() * 12)  // Might actually do set HP pool for bosses instead