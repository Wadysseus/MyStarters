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
    kCtrl.kittyFactory = kittyFactory;
    
    kCtrl.actionArray = ["Welcome to CoFF!"] //, 'Enjoy your BRIEF stay, meowtherfudger!!!
    
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
        var moveText =""
        var dirValue = kCtrl.currentRoom.exits.indexOf(direction)
        var indexValue = kCtrl.currentRoom.exitValues[dirValue]
        if (kCtrl.currentRoom.mobs.length == 0){
            kCtrl.currentRoom = kittyFactory.zones[indexValue];
            var addText = ("You have entered the " + kCtrl.currentRoom.name + ".");
            moveText += addText;
        }
        else {
            console.log("The " + kCtrl.currentRoom.mobs[0].name + " prevents you from passing!");
            var addText = ("The " + kCtrl.currentRoom.mobs[0].name + " prevents you from passing!");
            moveText += addText;
        }
        kCtrl.actionArray.push(moveText);
    };
    
    // Idea for Cone of Shame functionality that would go on the else statement in kCtrl.exitRoom: else if (kCtrl.currentRoom.mobs.blind == false){
        //     console.log("The " + kCtrl.currentRoom.mobs[0].name + " prevents you from passing!")
        // }
    
    // MOB CLASSES
    
    function weakMobRandom (){
    var weakMob = ({
        name    : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],
        loot : [kittyFactory.canOfTuna]

    });
    if (weakMob.name == 'Undead Mouseketeer'){
        weakMob.hp           = 2 * Math.ceil( Math.random() * dieTypes[1]);
        weakMob.maxHp        = weakMob.hp;
        weakMob.attack       = 8;
        weakMob.attackDesc   =  mousekAttacks(); //Make this equal to a function instead of variable, same way I did weakMobRandom
        weakMob.atkMod       = 0;
        weakMob.desc         = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the affixed bayonet looks rusty but sharp.";
    }
    if (weakMob.name == 'Spoopy Skeltal'){
        weakMob.hp         = 3 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 7;
        weakMob.attackDesc = " flails at you in a skeltal fashion!";
        weakMob.desc       = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
     }
    if (weakMob.name == 'Spoopy Skeltarcher'){
        weakMob.hp         = 2 * Math.ceil( Math.random() * dieTypes[0]);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 10;
        weakMob.attackDesc = " notches an arrow to its skeltal bow and fires!";
        weakMob.atkMod     = 1;
        weakMob.desc       = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    }
    if (weakMob.name == 'Potted Petunia'){
        weakMob.hp         = 5 * Math.ceil( Math.random() * dieTypes[0] + 5);
        weakMob.maxHp      = weakMob.hp;
        weakMob.attack     = 3;
        weakMob.attackDesc = " bashes its floral form against you!";
        weakMob.desc       = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    }
    return weakMob;
    }
    
    function mousekAttacks (){
        var mouseAtkDescs    = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"];
        var mouseAtkRandom = mouseAtkDescs [ Math.floor(Math.random() * mousekAttacks.length)];
        return mouseAtkRandom;
    }
    
    var mediumMob = ({
        name      : kittyFactory.mediumMobs[ Math.floor(Math.random() * kittyFactory.mediumMobs.length)],
        loot : [kittyFactory.canOfTuna]
        
    });
    if (mediumMob.name == 'Sentient Vacuum Cleaner'){
        mediumMob.hp           = 4 * Math.ceil( Math.random() * dieTypes[1] + 8);
        mediumMob.maxHp        = mediumMob.hp;
        mediumMob.attack       = 15;
        mediumMob.attackDesc   =  " roars with the fury of 12 amps and charges at you!"
        mediumMob.atkMod       = 2;
        mediumMob.desc         = "You stare into the Vacuum, and the Vacuum stares back. Something deep in your felid soul tells you mediumMob thing was put here to destroy you.";
    }
    if (mediumMob.name == 'Dogre'){
        mediumMob.hp         = 4 * Math.ceil( Math.random() * dieTypes[3] + 12);
        mediumMob.maxHp      = mediumMob.hp;
        mediumMob.attack     = 20;
        mediumMob.attackDesc = " smashes you with its Dogre club!";
        mediumMob.atkMod     = 1;
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
    

    var toughMob = ({
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
    
    var mobCerberus = ({
        name : 'The Cerberus',
        hp : 666,
        maxHp : 666,
        attack : 20,
        attackDesc : " snaps at you with its outer heads, which you dodge nimbly...  right into the middle head's blasting hellfire!",
        atkMod : 5,
        desc : 'The Cerberus leers at you hungrily, licking its three sets of chops. This is a big, angry, black dog, and each mouth emanates fire and brimstone.'
    })
    
    // END OF MOBS
    
    // ROOMS GO HERE
    var entry0 = new kittyFactory.zoneCreator ({
        name  : "Entrance to the Crypt",
        desc  : ["You stand before the imposing brass doors of the Crypt of Feline Frights. Ivy crawls across the dilapidated walls, descending into the darkness beyond the crumble of mortar. You can pick out debris from the ruins of whatever temple once stood here with your superior feline vision, but the Crypt itself is the only structure to endure the ravages of time.", 
        "The trip here from Blun, the closest town, was quiet, with only scant signs of local fauna. Now that you’re at the Crypt, you see and smell no signs of other living creatures. The Crypt itself almost seems to suck in sound, and you get the vague impression that on a frequency just beyond your hearing, this place roars its malintent to the world of the living."],
        exits : ['South'],
        exitValues : [1],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.brassDoors]
    });
    kCtrl.room0 = entry0;
    
    var mainHall1 = new kittyFactory.zoneCreator ({
        name  : "Main Hall",
        desc  : ["Light and fresh air pour into the Crypt for the first time in an age. Profligate cobwebs adorn the walls and ceiling, and your nose wrinkles as the stench of decomposition wafts from beyond the hall. Sconces line the walls, some still hold unlit torches, though the wood is no doubt rotten at this point. Luckily, with your superior feline senses, you’re not hindered the way a lesser being might be.", "Sepulchral beds line the walls, carved alcoves whose inhabitants are little more than dust and bones. An oaken door is set into an alcove on the eastern wall, and the hall continues to the south. Your whiskers twitch. You’re not alone..."],
        exits : ['East','South'],
        exitValues : [2, 5],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.oldTorches]
    });  

    var cryptKeeper2 = new kittyFactory.zoneCreator ({
        name  : "Crypt Keeper’s Quarters",
        desc  : ["This room is modest in size, with a simple layout, consisting of a small sleeping alcove and enough space for bookshelves, a desk, and a prayer mat. It is comparatively well-preserved. The bed’s sheets have long since disintegrated, but the mattress itself exists, albeit moldy and sunken. There’s no chair for the desk, atop which lies a book, ink and quill, and a signet ring. The majority of the individual shelves have fallen to the cobbles below, but a few remain in place, still housing some hard-bound books and bundles of scrolls."],
        exits : ['West','Up'],
        exitValues : [1, 3],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.bookShelf]
    });      
    
    var hiddenAttic3 = new kittyFactory.zoneCreator ({
        name  : "Hidden Attic",
        desc  : ["This space is cramped and cluttered with knick-knacks and forgotten chests and trunks. Stuck in between a couple of boxes, a feather wand stands upright. It’s even darker in here than the rest of the Crypt, save for an eerie chartreuse light emanating from beneath the seal of a musty old coffin tucked away in the corner. This isn’t ominous at all…"],
        exits : ['Down'],
        exitValues : [2],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.featherWand]
    });  
    
    var fetidMouth4 = new kittyFactory.zoneCreator ({
        name  : "Mouth of the Fetid Tunnel",
        desc  : ["A solid wall of musky stench greets your nose as you pass into this section of the Crypt. Blood, rot, and predator. Your heart speeds up, and your ears twitch back and forth, scanning for any warning of danger."],
        exits : ['East', 'Down'],
        exitValues : [5, 7],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.badSmell]
    }); 
    
    var rehtnapAltar5 = new kittyFactory.zoneCreator ({
        name  : "Altar to Rehtnap",
        desc  : ["You reach the end of the Main Hall, which terminates in a small shrine to the Felid deity of Death and Rebirth and Death and Rebirth and So On and So Forth, Rehtnap. Shredded scraps of wall tapestries litter the floor, and you spy scratch marks on the walls. A small brazier, stained with flakes of blood and milk, is set into an altar before a worn, pewter statue of Rehtnap, the dark god reclined and licking its paw, as if tasting past offerings.", 
        "To the West, you see an open doorway, the door itself in splinters and planks, as if rent asunder by mighty thews. Beyond that, a gloom swallows the light and air, leaving the room in an impenetrable murk.",
        "To the East, you see a door of birch and cold iron, seemingly untouched by the eons. Upon it you spy symbols carved in the wood then limned with pale silver. The language is too archaic to fully parse, but you recognize it as Middle Felid and are able to get the gist of it. As best you can tell, it references some sort of cleansing and worship of the deity Sebboh, whose domains encompasses mischief and adventure."],
        exits : ['North','East', 'West'],
        exitValues : [1, 6, 4],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.rehtnapStatue]
    }); 
    var catBath6 = new kittyFactory.zoneCreator ({
        name  : "Sebboh’s Cat Bath",
        desc  : ["Shutting the door behind you, you notice a stillness wash over you. For the first time since you’ve entered the Crypt, your muscles relax of their own accord. Gradually, the sense of a malevolent force surveilling you fades away, and you’re left with your default self-satisfaction. You feel like a cat again.",
        "The floor and walls are pristine tiles, and in the center of the room, a raised bath babbles with clear, cool water. As your eyes adjust to the ambient radiance, you recognize the figure of Nivlac, human servant and avatar of Sebboh, in the form of a statue spitting water into the pool."],
        exits : ['West'],
        exitValues : [5],
        mobs  : [],
        decor : [kittyFactory.nivlacStatue]
    }); 
    var fetidTunnel7 = new kittyFactory.zoneCreator ({
        name  : "The Fetid Tunnel",
        desc  : ["You descend into the tunnel’s abyssal maw. Darkness closes in on you. The air is cloying, humid, and you hiss reflexively when something slimy drops on your ear. Even with your superior feline senses, you only just barely perceive shapes and shadows. Stepping forward, your leading paw finds a few inches of tepid water. You paw around at the edges, but can find no way to go forward that isn’t wet. Water. Why did it have to be water?"],
        exits : ['South', 'Up'],
        exitValues : [8,4],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.grossWater]
    }); 
    var stygianStream8 = new kittyFactory.zoneCreator ({
        name  : "The Stygian Stream",
        desc  : ["The water is luke-warm and you swear something just brushed past your leg. A vermilion glow pulses regularly from further down the tunnel, accompanied by a wave of heat each time.  You hear skitterings along the ceiling as well. It seems like everything else that’s alive in here is fleeing in the opposite direction from where you’re headed."],
        exits : ['West', 'North'],
        exitValues : [9,7],
        mobs  : [new kittyFactory.mobCreator(weakMobRandom())],
        decor : [kittyFactory.vermilionPulse]
    });
    var denOfCerberus9 = new kittyFactory.zoneCreator ({
        name  : "Den of Cerberus",
        desc  : ["The tunnel opens into a giant natural amphitheater.  The vaunted ceilings and rock walls radiate with heat. You see a dark, furry, shape curled up in the corner. As you step forward, the gargantuan creature snuffles, raising first one head, then another, then a third. Canine snouts inhale the air, finding your scent, and the Cerberus turns, fixing its six eyes upon you. Spittle flies out as it roars in rage and hunger, and you notice the drool pooling forward, realizing now what the water you’ve been crawling through actually was.",
        "Time for a boss fight!"],
        exits : ['East'],
        exitValues : [8],
        mobs  : [mobCerberus],
        decor : [kittyFactory.cerberusAlcove]
    });
// ROOMS END HERE

kCtrl.bringOutYerDead = function (){
    var reMaxHp = kCtrl.redLeader.maxHp;
    if(kCtrl.redLeader.dead == true){
    kCtrl.currentRoom = kittyFactory.zones[0];   // It doesn't seem like stuff in kFac can access kCtrl (I do load kFac first)
    console.log(reMaxHp);
    kCtrl.redLeader.hp = reMaxHp;
    kCtrl.redLeader.dead = false;
    }
};

kCtrl.getExamines = function (){
    return [kCtrl.redLeader].concat(kCtrl.currentRoom.mobs).concat(kCtrl.currentRoom.decor);
};

kCtrl.scrollActionLog = function () {$('.dropDowns').on('click',function(){
 // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the text added
    var n = $('.actionMessages').height();
  // scroll down the height of the text added inside the scrolling div
    $('#actionScroll').animate({ scrollBottom: n }, 50);
})
}
}
