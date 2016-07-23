angular.module('KittyCrawler')
    .controller('kittyHQ', [zoneCreator])

// GETCHYER ROOMS HERE, PLENTY OF ROOMS, EASY CONSTRUCTION

// kittyHQ.$inject['zoneCreator']
// zoneCreator.$inject['$http']

// Room constructor
function zoneCreator () {
    var zone = this;
    console.info("ZoneCreator online, human.")
    // Most of this is placeholder stuff
    this.desc = "This is a placeholder description.";
    // this.exits = exits;
    // this.mobs = mobs;
    // this.light = bool;  // CAT-VISION11!!!!1  (may not be necessary)
    // this.items = items; // Stuff player can put in their hot little paws
    // this.decor = decor; // Stuff player can examine but not pick up
};


// Mid-boss: Cerberus --- Final boss: The Red Dot

function mobCreator (health, attack) {
    var mob = this;

    this.desc = "";
    this.hp = health;
    this.attack = attack;
    this.loot = [];
    
};

// Squamous Fork of Ogre-Crushing +5

// Worry less about others.