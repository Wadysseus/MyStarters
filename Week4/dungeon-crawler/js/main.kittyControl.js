angular.module('KittyCrawler')
    .controller('kittyControl', 
    [
        'kittyFactory',
        '$location',
        kittyControl
        ])
        
var dieTypes = [6, 8, 10, 12, 20]

function kittyControl (kittyFactory, $location) {
    var kCtrl = this;
    window.kCtrl = kCtrl
    console.log("!", kittyFactory);
    
    //creating a new player
    kCtrl.createKitty = function(){
        new kittyFactory.kittyCreator ( kCtrl.newCat );
        console.info(kittyFactory.party);
        $location.url("/dungeon.html");  //$location will understand that this is an angular route without the hash
        // Designate the party leader
        kCtrl.redLeader = kittyFactory.party[0];
        // Designate the current room
        kCtrl.currentRoom = kittyFactory.zones[0];
    };
    
    
    
    
    
    kCtrl.exitRoom = function(direction) {
        console.log(direction,kCtrl.currentRoom)
        var dirValue = kCtrl.currentRoom.exits.indexOf(direction)
        var indexValue = kCtrl.currentRoom.exitValues[dirValue]
        kCtrl.currentRoom = kittyFactory.zones[indexValue]; //Getting closer, still not there
        // console.log(i);
        // console.log(kittyFactory.zones[i])
    };
    
    // MOB CLASSES
    
    var weakMob = new kittyFactory.mobCreator({
        name    : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],

    });
    if (weakMob.name == 'Undead Mouseketeer'){
        weakMob.hp           = 2 * Math.ceil( Math.random() * dieTypes[1]);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack       = 8;
        var mousekAttacks    = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"];
        weakMob.attackDesc   = mousekAttacks[ Math.floor(Math.random() * mousekAttacks.length)];
        weakMob.atkMod       = 0;
        weakMob.desc         = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the affixed bayonet looks rusty but sharp.";
    }
    if (weakMob.name == 'Spoopy Skeltal'){
        weakMob.hp      = 3 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 7;
        weakMob.attackDesc = " flails at you in a skeltal fashion!";
        weakMob.desc       = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
     }
    if (weakMob.name == 'Spoopy Skeltarcher'){
        weakMob.hp      = 2 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 10;
        weakMob.attackDesc = " notches an arrow to its skeltal bow and fires!";
        weakMob.atkMod     = 1;
        weakMob.desc       = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    }
    if (weakMob.name == 'Potted Petunia'){
        weakMob.hp      = 5 * Math.ceil( Math.random() * dieTypes[0] + 5);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 3;
        weakMob.attackDesc = " bashes its floral form against you!";
        weakMob.desc       = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    }
     
    // vv FIGURE OUT A LESS JANKY WAY OF DOING THIS vv
    
        var weakMob2 = new kittyFactory.mobCreator({
        name         : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],

    });
    if (weakMob2.name == 'Undead Mouseketeer'){
        weakMob2.hp           = 2 * Math.ceil( Math.random() * dieTypes[1]);
        weakMob2.maxHp      = weakMob2.hp;
        weakMob2.attack       = 8;
        var mousekAttacks    = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"];
        weakMob2.attackDesc   = mousekAttacks[ Math.floor(Math.random() * mousekAttacks.length)];
        weakMob2.atkMod       = 0;
        weakMob2.desc         = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the affixed bayonet looks rusty but sharp.";
    }
    if (weakMob2.name == 'Spoopy Skeltal'){
        weakMob2.hp      = 3 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob2.maxHp      = weakMob2.hp;
        weakMob2.attack     = 7;
        weakMob2.attackDesc = " flails at you in a skeltal fashion!";
        weakMob2.desc       = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
     }
    if (weakMob2.name == 'Spoopy Skeltarcher'){
        weakMob2.hp      = 2 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob2.maxHp      = weakMob2.hp;
        weakMob2.attack     = 10;
        weakMob2.attackDesc = " notches an arrow to its skeltal bow and fires!";
        weakMob2.atkMod     = 1;
        weakMob2.desc       = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    }
    if (weakMob2.name == 'Potted Petunia'){
        weakMob2.hp      = 6 * Math.ceil( Math.random() * dieTypes[0] + 6);
        weakMob2.maxHp      = weakMob2.hp;
        weakMob2.attack     = 3;
        weakMob2.attackDesc = " bashes its floral form against you!";
        weakMob2.desc       = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    }
    
    // ^^ FIGURE OUT A LESS JANKY WAY OF DOING THIS ^^
    
    var mediumMob = new kittyFactory.mobCreator({
        name      : kittyFactory.mediumMobs[ Math.floor(Math.random() * kittyFactory.mediumMobs.length)],
        
    });
    if (mediumMob.name == 'Sentient Vacuum Cleaner'){
        mediumMob.hp        = 4 * Math.ceil( Math.random() * dieTypes[1] + 8);
        mediumMob.maxHp      = mediumMob.hp;
        mediumMob.attack       = 15;
        mediumMob.attackDesc   =  " roars with the fury of 12 amps and charges at you!"
        mediumMob.atkMod       = 2;
        mediumMob.desc         = "You stare into the Vacuum, and the Vacuum stares back. Something deep in your felid soul tells you mediumMob thing was put here to destroy you.";
    }
    if (mediumMob.name == 'Dogre'){
        mediumMob.hp      = 4 * Math.ceil( Math.random() * dieTypes[3] + 12);
        mediumMob.maxHp      = mediumMob.hp;
        mediumMob.attack     = 20;
        mediumMob.attackDesc = " smashes you with its Dogre club!";
        mediumMob.atkMod       = 1;
        mediumMob.desc       = "The towering carnivorous canine snarls at you, its fetid breath reeks of past Catventurers whose lives it has consumed, and its eyes stare at your with a dull lack of intelligence, like all dogs.";
     }
    if (mediumMob.name == 'Yarn Elemental'){
        mediumMob.hp      = 10 * Math.ceil( Math.random() * dieTypes[0] + 10);
        mediumMob.maxHp      = mediumMob.hp;
        mediumMob.attack     = 12;
        mediumMob.attackDesc = " distracts you with a bouncing string then whammies you with a yarny fist!";
        mediumMob.atkMod     = 2;
        mediumMob.desc       = "A mass of wooly string has been brought to life by some fel magic, taking on the semblance of a humanoid. It's not that fast, so you could probably outrun it if it weren't so damn enticing!";
    }
    

    var toughMob = new kittyFactory.mobCreator({
        name     : kittyFactory.toughMobs[ Math.floor(Math.random() * kittyFactory.toughMobs.length)],

    });
    if (toughMob.name == 'Catnip Dragon'){
        toughMob.hp        = 9 * Math.ceil( Math.random() * dieTypes[3] + 18);
        toughMob.maxHp      = toughMob.hp;
        toughMob.attack       = 25;
        var catnipAttacks = [" slashes you with both claws, then lunges forward with a savage bite!", " buffets you away with a mighty flap of its wings, then slams you into a wall with its tail!"];
        toughMob.attackDesc   = catnipAttacks[ Math.floor(Math.random() * catnipAttacks.length)];  
        toughMob.atkMod       = 5;
        toughMob.desc         = "A gargantuan green dragon wends a serpenty circuit around you, closing in for the kill. It smells SO GOOD! Against your better sense, you get the insane urge to romp right into its carnivorous coils.";
    }
    if (toughMob.name == 'Spritz Warlock'){
        toughMob.hp      = 6 * Math.ceil( Math.random() * dieTypes[2] + 6);
        toughMob.maxHp      = toughMob.hp;
        toughMob.attack     = 15;
        toughMob.attackDesc = " sprays you with its bottle! It's humiliating!";
        toughMob.atkMod       = 1;
        toughMob.desc       = "The Spritz Warlock sneers at you, wielding two of its many spray bottles. The rest hang in loops along its belt and bandolier. Its robes look wet.";
     }    
    // Want to add in function where if any mob's health is <= 50%, then Spritzlock has a 50% chance to use heal spray
    
    
    // END OF MOBS
    
    // ROOMS GO HERE
    var entry0 = new kittyFactory.zoneCreator ({
        name  : "Entrance to the Crypt",
        desc  : ["You stand before the imposing brass doors of the Crypt of Feline Frights. Ivy crawls across the dilapidated walls, descending into the darkness beyond the crumble of mortar. You can pick out debris from the ruins of whatever temple once stood here with your superior feline vision, but the Crypt itself is the only structure to endure the ravages of time.", "The trip here from Blun, the closest town, was quiet, with only scant signs of local fauna. Now that you’re at the Crypt, you see and smell no signs of other living creatures. The Crypt itself almost seems to suck in sound, and you get the vague impression that on a frequency just beyond your hearing, this place roars its malintent to the world of the living."],
        exits : ['South'],
        exitValues : [1],
        mobs  : [weakMob],
        decor : [kittyFactory.brassDoors]
    });
    kCtrl.room0 = entry0;
    
    var mainHall1 = new kittyFactory.zoneCreator ({
        name  : "Entrance to the Crypt",
        desc  : ["Light and fresh air pour into the Crypt for the first time in an age. Profligate cobwebs adorn the walls and ceiling, and your nose wrinkles as the stench of decomposition wafts from beyond the hall. Sconces line the walls, some still hold unlit torches, though the wood is no doubt rotten at this point. Luckily, with your superior feline senses, you’re not hindered the way a lesser being might be.", "Sepulchral beds line the walls, carved alcoves whose inhabitants are little more than dust and bones. An oaken door is set into an alcove on the eastern wall, and the hall continues to the south. Your whiskers twitch. You’re not alone..."],
        exits : ['East','South'],
        exitValues : [2, 5],
        mobs  : [angular.copy(weakMob), weakMob2]
    });  

    var cryptKeeper2 = new kittyFactory.zoneCreator ({
        name  : "Crypt Keeper’s Quarters",
        desc  : ["This room is modest in size, with a simple layout, consisting of a small sleeping alcove and enough space for bookshelves, a desk, and a prayer mat. It is comparatively well-preserved. The bed’s sheets have long since disintegrated, but the mattress itself exists, albeit moldy and sunken. There’s no chair for the desk, atop which lies a book, ink and quill, and a signet ring. The majority of the individual shelves have fallen to the cobbles below, but a few remain in place, still housing some hard-bound books and bundles of scrolls."],
        exits : ['West','Up'],
        exitValues : [1, 3],
        mobs  : [mediumMob]
    });      
// ROOMS END HERE


// ITEMS START HERE

// Item ideas - Catnip Packet, Ball of Yarn, Pretty Kitty Collar (defense), Heartworm Pill?, Kitty Treat, Tinsel, Cone of Shame (consumable attack item), Jar of Caviar, Scroll of Fancy Feast

// Can of Tuna (minor heal pot)
    var canOfTuna = new kittyFactory.itemCreator ({
        name    : 'Can of Tuna',
        desc    : "This is a can of fair trade, organic, cruelty free tuna. You don't really care about all that since you're a cat, but it does at least have a convenient pull tab to open it.",
        useText : "You pull the tab on the tuna and snarf it down!",
        effect  : function(target){
            var healz = 3 * [Math.ceil(Math.random() * dieTypes[0]) + 3]
            target.hp += healz;
        },
        equip   : false
        })

// Catnip Packet
    var catnipPacket = new kittyFactory.itemCreator ({
        name    : 'Catnip Packet',
        desc    : "This is some stanky nip! You can smell it through the plastic!",
        useText : "You open the packet and sprinkle the catnip all over yourself. Your pupils dilate and you feel invincible!",
        effect  : function(target){
            var healz = 3 * [Math.ceil(Math.random() * dieTypes[0]) + 3]
            target.hp += healz;
        },
        equip   : false
        })
        
// Pretty Kitty Collar
    var prettyKittyCollar = new kittyFactory.itemCreator ({
        name    : 'Pretty Kitty Collar',
        desc    : "This collar is legit, it has a little dingly bell and everything. If you could see pink, you'd be tickled that color right now.",
        useText : "You put the collar around your neck. Who's a pretty kitty? You're a pretty kitty.",
        effect  : function (target){
            if (this.worn == false){
            target.hp += 15;
            target.maxHp += 15;
            target.attack  // How do I get the dieTypes back in here? The attack just evaluates to the value of the index in the dieTypes array.
            }
        },
        equip   : true,
        worn    : false
    })

// END OF ITEMS //
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