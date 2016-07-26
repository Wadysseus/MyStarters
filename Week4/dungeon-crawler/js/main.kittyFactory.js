angular.module('KittyCrawler')
    .factory('kittyFactory', kittyFactory)
    
    function kittyFactory () {
        
        var party = [];
        var mobs = [];
        var zones = [];
        var items = [];
        var decor = [];
        
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
    this.inventory = [ ];
    this.class = 'Catventurer';
    this.desc = "You examine yourself. You're looking purrty good! You are {{kCtrl.redLeader.name}}, the {{kCtrl.redLeader.breed}} {{kCtrl.redLeader.class}}! Your fur is {{kCtrl.redLeader.color}} and {{kCtrl.redLeader.furLength}} in length. You have {{kCtrl.redLeader.lives}} lives left, and you could really go for a can of tuna.";
        
        // will need to refactor these if statements into something like var catBreedTraits
        
        if (kNew.breed == 'siamese'){
            kNew.attack = 10;
            kNew.hp = 50;
            kNew.furLength = 'short';
            kNew.meowType = 'with barely restrained rage';
        }
        if (kNew.breed == 'maineCoon'){
            kNew.attack = 6;
            kNew.hp = 70;
            kNew.furLength = 'long';
            kNew.meowType = 'lazily';
        }
        if (kNew.breed == 'tabby'){
            kNew.attack = 8;
            kNew.hp = 60;
            kNew.furLength = 'average';
            kNew.meowType = 'adorably';
        }
        party.push(this);
    } 

    // kittyCreator prototypes

    kittyCreator.prototype.meow = function(){
        //This refers to the object that called this method.
        console.log(this.name + " meows " + this.meowType + "!");
    };

    kittyCreator.prototype.scratch = function(target){
        console.log(this.name + " lashes out at " + target.name + " in a flurry of feline fury!");
        var dmg = [Math.ceil(Math.random() * this.attack)];
        console.log(target.name + " has taken " + dmg + " points of damage!");
        target.hp -= dmg;
    };

    kittyCreator.prototype.hairball = function(){
        console.log(this.name + " hocks up a giant hairball! You feel better!");
    };

    kittyCreator.prototype.examine = function(target){
        console.log(this.name + " checks out " + target.name + ".");
        console.log(target.desc);
    };

    // Whiskers, smell, hearing -- use these
    // Also have a point where you 'land on your feet'

    kittyCreator.prototype.get = function(target){
        console.log(this.name + " picks up the " + target.name + ".");
        this.inventory.push(target);
    };

    // End of kittyCreator prototypes
    
    //end of kittyCreator ======================================================

    // Monster constructor
    function mobCreator (mobInfo){
        this.name = mobInfo.name;
        this.hp = mobInfo.hp;
        this.attack = mobInfo.attack;
        this.attackDesc = mobInfo.attackDesc;
        this.atkMod = 0;
        this.desc = mobInfo.desc;
        mobs.push(this);
    } 
    
    
    // General monster attack function
    mobCreator.prototype.attackParty = function(party){
        var monsterTarget = party[Math.floor(Math.random() * party.length)]; //Randomly selects party member to attack
        console.log(monsterTarget);
        console.log(this.name + this.attackDesc);
        var dmg = [Math.ceil(Math.random() * this.attack) + this.atkMod];
        console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
        monsterTarget.hp -= dmg;
    };
    
    
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
        
        // this.mob = mobs[i]; // I'm sure this is not the way to do this.
        // this.decor = decor[i]; // Again, probably not the way to do this.
        zones.push(this);
    }// end of Room constructor
    
    
    // Item constructor
    function itemCreator (itemInfo){
        this.name = itemInfo.name;
        this.desc = itemInfo.desc;
        this.useText = itemInfo.useText;
        this.effect = itemInfo.effect;
        this.equip = false;
        items.push(this);
    } //end of item constructor
    
    //decor constructor
    function decorCreator (decorInfo){
        this.name = decorInfo.name;
        this.desc = decorInfo.desc;
        decor.push(this);
    }// end of decor constructor
    
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



