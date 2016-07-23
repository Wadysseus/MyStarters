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
    this.desc = "You examine yourself. You're looking purrty good! You are {{catInfo.name}}, the {{catInfo.breed}} {{catInfo.class}}! Your fur is {{catInfo.color}} and {{catInfo.furLength}} in length. You have {{catInfo.lives}} lives left, and you could really go for a can of tuna.";
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
    } //end of kittyCreator

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

    kittyCreator.prototype.get = function(target){
        console.log(this.name + " picks up the " + target.name + ".");
        this.inventory.push(target);
    };

    // End of kittyCreator prototypes

    // Monster constructor
    function mobCreator (mobInfo){
        this.name = mobInfo.name;
        this.hp = mobInfo.hp;
        this.attack = mobInfo.attack;
        this.attackDesc = mobInfo.attackDesc;
        this.desc = mobInfo.desc;
        mobs.push(this);
    } //end of mobCreator
    
    
    
    mobCreator.prototype.attackParty = function(party){
        var monsterTarget = party[Math.floor(Math.random() * party.length)];
        console.log(monsterTarget);
        console.log(this.name + this.attackDesc);
        var dmg = [Math.ceil(Math.random() * this.attack)];
        console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
        monsterTarget.hp -= dmg;
    };
    
    
    var weakMobs = [
        'Undead Mouseketeer',
        'Spoopy Skeltal',
        'Spoopy Skeltarcher',
        'Potted Petunia'];
        
    // THIS NO WORK mobCreator.mobInfo.hp = if(mobCreator.mobInfo.name == 'Undead Mouseketeer')
        
        // var weakMobsHP = [{
        //     undeadMouseketeer = 15 +/- 5,
        //     spoopySkeltal = 20 +/- 5,
        //     spoopySkeltarcher = 10 +/- 2,
        //     pottedPetunia = 35 +/- 10
        // }]
        
        // var weakMobsATK = [{
        //     undeadMouseketeer = 7 +/- 3,
        //     spoopySkeltal = 6 +/- 2,
        //     spoopySkeltarcher = 8 +/- 4,
        //     pottedPetunia = 2 +/- 1
        // }]
        
    var mediumMobs = [
        'Sentient Vacuum Cleaner',
        'Dogre',
        'Yarn Elemental'
        ];
        
    var toughMobs = [
        'Catnip Dragon',
        'Spritz Warlock'
        ];
    
    // Room constructor
    function zoneCreator (zoneInfo){
        this.name = zoneInfo.name;
        this.desc = zoneInfo.desc;
        this.exits = [];
        // this.mob = mobs[i]; // I'm sure this is not the way to do this.
        // this.decor = decor[i]; // Again, probably not the way to do this.
        zones.push(this);
    }// end of Room constructor
    
    function itemCreator (itemInfo){
        this.name = itemInfo.name;
        this.desc = itemInfo.desc;
        this.useText = itemInfo.useText;
        this.effect = itemInfo.effect;
        this.equip = false;
        items.push(this);
    }
    
    function decorCreator (decorInfo){
        this.name = decorInfo.name;
        this.desc = decorInfo.desc;
        decor.push(this);
    }
    
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



