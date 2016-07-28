angular.module('KittyCrawler')
    .factory('kittyFactory', kittyFactory);
    
    function kittyFactory () {
        
        var kFac = this;
        
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
        this.inventory = [canOfTuna, prettyKittyCollar];
        this.class = 'Catventurer';
        this.desc = "You examine yourself. You're looking purrty good! You are " + this.name + ", the " + this.breed + " " + this.class + "! Your fur is " + this.color + " and " + this.furLength + " in length. You have " + this.lives + " lives left, and you could really go for a can of tuna.";
        this.atkBoost = 0;
        this.type = 'kitty';
        
        if (kNew.breed == 'siamese'){
            kNew.attack = dieTypes[4];
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
            var meowText = (this.name + " meows " + this.meowType + "!");
            kCtrl.actionArray.push(meowText);
            console.log(this.name + " meows " + this.meowType + "!");
        },
        scratch: function(target){
            var atkText=""
            var baseAtk = Math.ceil(Math.random() * this.attack);
            var boostAtk = Math.ceil(Math.random() * this.atkBoost);
            var dmg = baseAtk + boostAtk;
            console.log(this.name + " lashes out at " + target.name + " in a flurry of feline fury!");
            var atkText = (this.name + " lashes out at " + target.name + " in a flurry of feline fury! " + target.name + " has taken " + dmg + " points of damage!");
            console.log(target.name + " has taken " + dmg + " points of damage!");
            target.hp -= dmg;
            kCtrl.actionArray.push(atkText);
            //Checking to see if you killed the thing.
            if (target.hp <= 0 && target.dead == false){
                target.dead = true;
                var deathText = (this.name + " has slain " + target.name + "!");
                console.log(this.name + " has slain " + target.name + "!")
                kCtrl.actionArray.push(deathText);
            }
            //Counterattack from mob if it doesn't die
            else if (target.hp > 0){
                console.log(target.name + target.attackDesc);
                var dmg = [Math.ceil(Math.random() * target.attack) + target.atkMod];
                console.log(this.name + " has taken " + dmg + " points of damage!");
                var ctrAtkText = (target.name + target.attackDesc + " " + this.name + " has taken " + dmg + " points of damage!");
                kCtrl.actionArray.push(ctrAtkText);
                this.hp -= dmg;
            }
                if (this.hp <= 0  && this.lives >= 0){
                    this.lives--;
                    var catDeathText = (this.name + ' has died!' + " " + this.name + ' reappears at the Crypt entrance.');
                    kCtrl.actionArray.push(catDeathText);
                    console.log(this.name + ' has died!')
                    console.log(this.name + ' reappears at the Crypt entrance.')
                    this.dead = true;
                }
                if (this.hp <= 0  && this.lives < 0){
                    var trueDeathText = (this.name + ' has lost all lives and has gone to Meowhalla!' + " " + "Gameowver!");
                    kCtrl.actionArray.push(trueDeathText);
                    console.log(this.name + ' has lost all lives and has gone to Meowhalla!')
                    this.dead = true;
                }
            // Batting around the corpse if it's "not dead enough." --I think the else if may have fixed the console log spam issue -- OR NOT
            else if (target.hp <= 0 && target.hp > -5 && target.dead == true){
                var partialKillText = (this.name + " bats at " + target.name + "'s corpse. It's satisfying in a way only cats understand.");
                kCtrl.actionArray.push(partialKillText);
                console.log(this.name + " bats at " + target.name + "'s corpse. It's satisfying in a way only cats understand.")
                console.info(target.loot)
            }
            // At -5 hp, it's dead enough and it dies for real.    
            if (target.hp <= -5){
                target.dead = true;
                var trueKillText = (this.name + " grows bored of batting around " + target.name + "'s corpse.");
                kCtrl.actionArray.push(trueKillText);
                console.log(this.name + " grows bored of batting around " + target.name + "'s corpse.")
                var deadIndex = kCtrl.currentRoom.mobs.indexOf(target)
                kCtrl.currentRoom.mobs.splice(deadIndex, 1)
                kCtrl.redLeader.inventory.push.apply(kCtrl.redLeader.inventory, target.loot); // take this loot array of values and push them as individual elements to the inventory array
                // kCtrl.redLeader.inventory.push(target.loot) 
             
            }  
        },
        hairball: function(){
            console.log(this.name + " hocks up a giant hairball! You feel better!");
        },
        examine: function(target){
            var examineText = (this.name + " checks out " + target.name + "." + " " + target.desc);
            kCtrl.actionArray.push(examineText);
            console.log(this.name + " checks out " + target.name + ".");
            console.log(target.desc);
        },
        // Whiskers, smell, hearing -- use these
        // Also have a point where you 'land on your feet'
        get: function(target){ // may not actually need this get function, could just instead push the loot into inventory on kill
            console.log(this.name + " picks up the " + target.name + ".");
            this.inventory.push(target);
        },
        use: function(target){
            var useText = (target.useText);
            kCtrl.actionArray.push(useText);
            console.log(target.useText + this.itemText);
            target.effect(this);
        }
    } // End of kittyCreator prototypes
    // End of kittyCreator ======================================================

    // Monster constructor
    function mobCreator (mobInfo){
        this.name = mobInfo.name;
        this.hp = mobInfo.hp;
        this.maxHp = mobInfo.maxHp;
        this.attack = mobInfo.attack;
        this.attackDesc = mobInfo.attackDesc;
        this.atkMod = 0;
        this.desc = mobInfo.desc;
        this.dead = false;
        this.type = 'monster';
        this.loot = mobInfo.loot;
        mobs.push(this);
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
        this.exitValues = zoneInfo.exitValues;
        this.decor = zoneInfo.decor;
        zones.push(this);
    }// end of Room constructor
    
    // ITEMS START HERE-----------------------------------------------
    
    // Item constructor
    function itemCreator (itemInfo){
        this.name = itemInfo.name;
        this.desc = itemInfo.desc;
        this.useText = itemInfo.useText;
        this.effect = itemInfo.effect;
        this.equip = false;
        this.worn = false;
        this.type = 'item';
        // this.effectText = "";
        items.push(this);
    } //end of item constructor

// Item ideas - Catnip Packet, Ball of Yarn, Pretty Kitty Collar (defense), Heartworm Pill?, Kitty Treat, Tinsel, Cone of Shame (consumable attack item), Jar of Caviar, Scroll of Fancy Feast

// Can of Tuna (minor heal pot)
    var canOfTuna = new itemCreator ({
        name    : 'Can of Tuna',
        desc    : "This is a can of fair trade, organic, cruelty free tuna. You don't really care about all that since you're a cat, but it does at least have a convenient pull tab to open it.",
        useText : "You pull the tab on the tuna and snarf it down!",
        effect  : function(target){
            var healz = 3 * [Math.ceil(Math.random() * dieTypes[0]) + 3]
            target.hp += healz;
            var useIndex = kCtrl.redLeader.inventory.indexOf(this)
            kCtrl.redLeader.inventory.splice(useIndex, 1)
            // var tunaText = ("You are healed for " + healz +" hp!");
            console.log("You are healed for " + healz +" hp!")
        },
        equip   : false
        })
      
// Cone of Shame  - Idea: Have it blind foe and/or do damage.
    // var coneOfShame = new itemCreator ({
    //     name    : 'Cone of Shame',
    //     desc    : "This is a sheet of flexible plastic with a latch to turn it into a cone.",
    //     useText : "You slam the cone down over the monster's head! What a maroon!",
    //     effect  : function(target){
    //         var coneDmg = 3 * [Math.ceil(Math.random() * dieTypes[0]) + 3]
    //         target.hp += coneDmg;
    //         var useIndex = kCtrl.redLeader.inventory.indexOf(this)
    //         kCtrl.redLeader.inventory.splice(useIndex, 1)
    //         console.log("You are healed for " + coneDmg +" hp!")
    //     },
    //     equip   : false
    //     })

// Catnip Packet
    var catnipPacket = new itemCreator ({
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
    
    var prettyKittyCollar = new itemCreator ({
        name    : 'Pretty Kitty Collar',
        desc    : "This collar is legit, it has a little dingly bell and everything. If you could see pink, you'd be tickled that exact color right now.",
        useText : "You put the collar around your neck. Who's a pretty kitty? You're a pretty kitty.",
        effect  : function (target){
            if (this.worn == false){
            this.useText = "You put the collar around your neck. Who's a pretty kitty? You're a pretty kitty.";
            target.hp += 15;
            target.maxHp += 15;
            target.atkBoost = dieTypes[1];  
            this.worn = true;
            }
            if (this.worn == true){
            this.useText = "You remove the collar. You feel less pretty.";
            target.hp -= 15;
            target.maxHp -= 15;
            target.atkBoost = 0;  
            this.worn = false;
            }
        },
        equip   : true,
        worn    : false
    });
    // Pretty Kitty Collar collection of bad ideas:
        // var collarText = '';
        // useText : collarText,
        //     if (this.worn == false){
        //     collarText = "You put the collar around your neck. Who's a pretty kitty? You're a pretty kitty.";
        //     }
        //     if (this.worn == true){
        //     collarText = "You remove the collar. You feel less pretty.";
        //     }// END OF BAD IDEAS FOR PRETTY KITTY COLLAR


// END OF ITEMS //

    //decor constructor
    function decorCreator (decorInfo){
        this.name = decorInfo.name;
        this.desc = decorInfo.desc;
        this.type = 'decoration';
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
        canOfTuna : canOfTuna,
        prettyKittyCollar : prettyKittyCollar,
        
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



