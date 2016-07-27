angular.module('KittyCrawler')
    .factory('kittyFactory', kittyFactory);
    
    function kittyFactory () {
        
        var party = [];
        var mobs  = [];
        var zones = [];
        var items = [];
        var decor = [];
        
var dieTypes = [6, 8, 10, 12, 20]
        
// Define my constructors and data arrays

// Kitty creator for player and allies
    function kittyCreator (catInfo) {
        console.info('kittyCreator functional, human.');
        var kNew = this;
        
        this.name = catInfo.name || 'Purrcival';
        this.color = catInfo.color;
        this.breed = catInfo.breed;
        this.dead = false;
        this.lives = 9;
        this.inventory = [kCtrl.canOfTuna, kCtrl.prettyKittyCollar];
        this.class = 'Catventurer';
        this.desc = "You examine yourself. You're looking purrty good! You are " + this.name + ", the " + this.breed + " " + this.class + "! Your fur is " + this.color + " and " + this.furLength + " in length. You have " + this.lives + " lives left, and you could really go for a can of tuna.";
        this.atkBoost = 0;
        
        // will need to refactor these if statements into something like var catBreedTraits
        
        if (kNew.breed == 'siamese'){
            kNew.attack = dieTypes[2];
            kNew.hp = 50;
            kNew.maxHp = 50;
            kNew.furLength = 'short';
            kNew.meowType = 'with barely restrained rage';
        }
        if (kNew.breed == 'maineCoon'){
            kNew.attack = dieTypes[0];
            kNew.hp = 75;
            kNew.maxHp = 75;
            kNew.furLength = 'long';
            kNew.meowType = 'lazily';
        }
        if (kNew.breed == 'tabby'){
            kNew.attack = dieTypes[1];
            kNew.hp = 60;
            kNew.maxHp = 60;
            kNew.furLength = 'average';
            kNew.meowType = 'adorably';
        }
        party.push(this);
    } 

        // kittyCreator prototypes
    kittyCreator.prototype = {
        meow: function(){
            console.log(this.name + " meows " + this.meowType + "!");
        },
        scratch: function(target){
            console.log(this.name + " lashes out at " + target.name + " in a flurry of feline fury!");
            var dmg = [Math.ceil(Math.random() * this.attack)] + [Math.ceil(Math.random() * this.atkBoost)];
            console.log(target.name + " has taken " + dmg + " points of damage!");
            target.hp -= dmg;
            if (target.hp <= 0 && target.dead == false){
                target.dead = true;
                console.log(this.name + " has slain " + target.name + "!")
            }
            // I think the else if may have fixed the console log spam issue
            else if (target.hp <= 0 && target.dead == true){
                target.dead = true;
                console.log(this.name + " bats at " + target.name + "'s corpse. It's satisfying in a way only cats understand.")
            }
            if (target.hp <= -5){
                target.dead = true;
                console.log(this.name + " grows bored of batting around " + target.name + "'s corpse.")
                var deadIndex = kCtrl.currentRoom.mobs.indexOf(target)
                kCtrl.currentRoom.mobs.splice(deadIndex, 1)
            }
        },
        hairball: function(){
            console.log(this.name + " hocks up a giant hairball! You feel better!");
        },
        examine: function(target){
            console.log(this.name + " checks out " + target.name + ".");
            console.log(target.desc);
        },
        // Whiskers, smell, hearing -- use these
        // Also have a point where you 'land on your feet'
        get: function(target){
            console.log(this.name + " picks up the " + target.name + ".");
            this.inventory.push(target);
        }
    } // End of kittyCreator prototypes
    // End of kittyCreator ======================================================

    // Monster constructor
    function mobCreator (mobInfo){
        this.name = mobInfo.name;
        this.hp = mobInfo.hp;
        this.attack = mobInfo.attack;
        this.attackDesc = mobInfo.attackDesc;
        this.atkMod = 0;
        this.desc = mobInfo.desc;
        this.dead = false;
        mobs.push(this);
    } 
    
    // Checking for dead function? May not be necessary if I just do what I have in the scratch/monsterAttack prototypes
    // function bringOutYerDead () {
    //     if (kCtrl.currentRoom.mobs.dead == true){
    //         var deadIndex =     
    //         }
    // }
    
    
    // General monster attack function  -----IS CURRENTLY BORKED-----
    // mobCreator.prototype.attackParty = function(party){
    //     var monsterTarget = party[Math.floor(Math.random() * party.length)]; //Randomly selects party member to attack
    //     console.log(monsterTarget);
    //     console.log(this.name + this.attackDesc);
    //     var dmg = [Math.ceil(Math.random() * this.attack) + this.atkMod];
    //     console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
    //     monsterTarget.hp -= dmg;
    // };
    
    var weakMobs = [
        'Undead Mouseketeer',
        'Spoopy Skeltal',
        'Spoopy Skeltarcher',
        'Potted Petunia'];
        
    var mediumMobs = [
        'Sentient Vacuum Cleaner',
        'Dogre',
        'Yarn Elemental'
        ];
        
    var toughMobs = [
        'Catnip Dragon',
        'Spritz Warlock'
        ];
        
        //end of mobCreator ====================================================
        
        
    
    // Room constructor
    function zoneCreator (zoneInfo){
        this.name = zoneInfo.name;
        this.desc = zoneInfo.desc;
        this.exits = zoneInfo.exits;
        this.mobs = zoneInfo.mobs;
        this.exitValues = zoneInfo.exitValues;
        this.decor = zoneInfo.decor;
        
        // this.mob = mobs[i]; // I'm sure this is not the way to do this.
        // this.decor = decor[i]; // Again, probably not the way to do this.
        zones.push(this);
    }// end of Room constructor
    
    
    
    // ------ALSO CURRENTLY BORKED-----
    zoneCreator.prototype.attackParty = function(){
        var party = kCtrl.party;
        for (var i=0; i < kCtrl.currentRoom.mobs.length; i++) {
        var monsterTarget = party[Math.floor(Math.random() * party.length)]; //Randomly selects party member to attack
        // console.log(monsterTarget);
        console.log(this.name + this.attackDesc);
        var dmg = [Math.ceil(Math.random() * this.attack) + this.atkMod];
        console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
        monsterTarget.hp -= dmg;}
        if (monsterTarget.hp <= 0  && monsterTarget.lives >= 0){
            monsterTarget.lives--;
            console.log(monsterTarget.name + ' has died!')
        }
        if (monsterTarget.hp <= 0  && monsterTarget.lives < 0){
            console.log(monsterTarget.name + ' has lost all lives and is dead FOREVER!')
        }
    };
    
    
    // Item constructor
    function itemCreator (itemInfo){
        this.name = itemInfo.name;
        this.desc = itemInfo.desc;
        this.useText = itemInfo.useText;
        this.effect = itemInfo.effect;
        this.equip = false;
        this.worn = false;
        items.push(this);
    } //end of item constructor
    
    //decor constructor
    function decorCreator (decorInfo){
        this.name = decorInfo.name;
        this.desc = decorInfo.desc;
        decor.push(this);
    }// end of decor constructor
    
    // Should probably just put this in the Controller along with everything else, unless I want to start creating different files for rooms/items/decor and then another file for players/monsters
    var brassDoors = new decorCreator( {
        name : 'Brass Doors' ,
        desc : 'Upon closer examination, you see that these doors are adorned with feliglyphs depicting yarn, mice, and death.'
    })
    
    return {
        
        //Constructors
        kittyCreator : kittyCreator,
        mobCreator   : mobCreator,
        zoneCreator  : zoneCreator,
        itemCreator  : itemCreator,
        decorCreator : decorCreator,
        
        //Arrays
        party      : party,
        mobs       : mobs,
        zones      : zones,
        items      : items,
        decor      : decor,
        weakMobs   : weakMobs,
        mediumMobs : mediumMobs,
        toughMobs  : toughMobs
    }
    
    } //end of kittyFactory



