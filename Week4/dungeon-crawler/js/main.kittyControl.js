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
    // 
    // }
    
    // MOB CLASSES
    
    var weakMob = new kittyFactory.mobCreator({
        name : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],
        hp : this.mobHP,
        attack : this.attack,
        attackDesc : this.attackDesc,
        desc : this.desc
    });
    if (this.name == 'Undead Mouseketeer'){
        this.mobHP        = 2 * Math.ceil( Math.random() * dieTypes[1]);
        this.attack       = 8;
        var mousekAttacks = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"];
        this.attackDesc   = mousekAttacks[ Math.floor(Math.random() * mousekAttacks.length)];
        this.desc         = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the bayonet rusty with age.";
    }
    if (this.name == 'Spoopy Skeltal'){
        this.mobHP      = 3 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack     = 7;
        this.attackDesc = " flails at you in a skeltal fashion!";
        this.desc       = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
     }
    if (this.name == 'Spoopy Skeltarcher'){
        this.mobHP      = 2 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack     = 10;
        this.attackDesc = " notches an arrow to its skeltal bow and fires!";
        this.desc       = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    }
    if (this.name == 'Potted Petunia'){
        this.mobHP      = 6 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack     = 3;
        this.attackDesc = " bashes its floral form against you!";
        this.desc       = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    }
    
    
    var mediumMob = new kittyFactory.mobCreator({
        name       : kittyFactory.mediumMobs[ Math.floor(Math.random() * kittyFactory.mediumMobs.length)],
        hp         : this.mobHP,
        attack     : this.attack,
        attackDesc : this.attackDesc,
        desc       : this.desc
    });
    if (this.name == 'Sentient Vacuum Cleaner'){
        this.mobHP        = 4 * Math.ceil( Math.random() * dieTypes[1]);
        this.attack       = 15;
        this.attackDesc   =  " roars with the fury of 12 amps and charges at you!"
        this.desc         = "You stare into the Vacuum, and the Vacuum stares back. Something deep in your felid soul tells you this thing was put here to destroy you.";
    }
    if (this.name == 'Dogre'){
        this.mobHP      = 4 * Math.ceil( Math.random() * dieTypes[3]);
        this.attack     = 20;
        this.attackDesc = " smashes you with its Dogre club!";
        this.desc       = "The towering carnivorous canine snarls at you, its fetid breath reeks of past Catventurers whose lives it has consumed, and its eyes stare at your with a dull lack of intelligence, like all dogs.";
     }
    if (this.name == 'Yarn Elemental'){
        this.mobHP      = 10 * Math.ceil( Math.random() * dieTypes[0]);
        this.attack     = 12;
        this.attackDesc = " distracts you with a bouncing string then whammies you with a yarny fist!";
        this.desc       = "A mass of wooly string has been brought to life by some fel magic, taking on the semblance of a humanoid. It's not that fast, so you could probably outrun it if it weren't so damn enticing!";
    }
    

    var toughMob = new kittyFactory.mobCreator({
        name       : kittyFactory.toughMobs[ Math.floor(Math.random() * kittyFactory.toughMobs.length)],
        hp         : this.mobHP,
        attack     : this.attack,
        attackDesc : this.attackDesc,
        desc       : this.desc
    });
    if (this.name == 'Catnip Dragon'){
        this.mobHP        = 9 * Math.ceil( Math.random() * dieTypes[3]);
        this.attack       = 25;
        var catnipAttacks = [" slashes you with both claws, then lunges forward with a savage bite!", " buffets you away with a mighty flap of its wings, then slams you into a wall with its tail!"];
        this.attackDesc   = catnipAttacks[ Math.floor(Math.random() * catnipAttacks.length)];  
        this.desc         = "A gargantuan green dragon wends a serpenty circuit around you, closing in for the kill. It smells SO GOOD! Against your better sense, you get the insane urge to romp right into its carnivorous coils.";
    }
    if (this.name == 'Spritz Warlock'){
        this.mobHP      = 6 * Math.ceil( Math.random() * dieTypes[2]);
        this.attack     = 15;
        this.attackDesc = " sprays you with its bottle! It's humiliating!";
        this.desc       = "";
     }    
    
    // END OF MOBS
    
    // ROOMS GO HERE
    var entry0 = new zoneCreator ({
        name  : "Entrance to the Crypt",
        desc  : " You stand before the imposing brass doors of the Crypt of Feline Frights. Ivy crawls across the dilapidated walls, descending into the darkness beyond the crumble of mortar. You can pick out debris from the ruins of whatever temple once stood here with your superior feline vision, but the Crypt itself is the only structure to endure the ravages of time. The trip here from Blun, the closest town, was quiet, with only scant signs of local fauna. Now that you’re at the Crypt, you see and smell no signs of other living creatures. The Crypt itself almost seems to suck in sound, and you get the vague impression that on a frequency just beyond your hearing, this place roars its malintent to the world of the living.",
        exits : ['South'],
        mobs  : weakMob()
    })
        
    
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