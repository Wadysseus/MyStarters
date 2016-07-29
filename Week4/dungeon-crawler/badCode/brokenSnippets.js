    // Was originally in kittyFactory starting around line 130
    
    // General monster attack function  -----IS CURRENTLY BORKED-----
    // mobCreator.prototype.attackParty = function(party){
    //     var monsterTarget = party[Math.floor(Math.random() * party.length)]; //Randomly selects party member to attack
    //     console.log(monsterTarget);
    //     console.log(this.name + this.attackDesc);
    //     var dmg = [Math.ceil(Math.random() * this.attack) + this.atkMod];
    //     console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
    //     monsterTarget.hp -= dmg;
    // };
    
    // Was originally in kittyFactory starting around line 162
    
        // ------ALSO CURRENTLY BORKED-----
    // zoneCreator.prototype.attackParty = function(monsterTarget){
    //     var party = kFac.party;
    //     for (var i=0; i < kCtrl.currentRoom.mobs.length; i++) {
    //     var monsterTarget = party[Math.floor(Math.random() * party.length)]; //Randomly selects party member to attack
    //     // console.log(monsterTarget);
    //     console.log(this.name + this.attackDesc);
    //     var dmg = [Math.ceil(Math.random() * this.attack) + this.atkMod];
    //     console.log(monsterTarget.name + " has taken " + dmg + " points of damage!");
    //     monsterTarget.hp -= dmg;}
    //     if (monsterTarget.hp <= 0  && monsterTarget.lives >= 0){
    //         monsterTarget.lives--;
    //         console.log(monsterTarget.name + ' has died!')
    //         console.log(monsterTarget.name + ' reappears at the Crypt entrance.')
    //         // kCtrl.currentRoom = kittyFactory.zones[0];   // It doesn't seem like stuff in kFac can access kCtrl (I do load kFac first)
    //     }
    //     if (monsterTarget.hp <= 0  && monsterTarget.lives < 0){
    //         console.log(monsterTarget.name + ' has lost all lives and is dead FOREVER!')
    //     }
    // };
    // -----SO BORKED-----
    
    // Was originally in kittyControl around line 76 ----- NOT ACTUALLY BROKEN, JUST VESTIGIAL NOW
        //ALSO USEFUL ----- to show how I was doing things before I switched the rooms to generate a new mob every time
        // vv FIGURE OUT A LESS JANKY WAY OF DOING THIS vv
    
    //     var weakMob2 = new kittyFactory.mobCreator({
    //     name         : kittyFactory.weakMobs[ Math.floor(Math.random() * kittyFactory.weakMobs.length)],

    // });
    // if (weakMob2.name == 'Undead Mouseketeer'){
    //     weakMob2.hp           = 2 * Math.ceil( Math.random() * dieTypes[1]);
    //     weakMob2.maxHp        = weakMob2.hp;
    //     weakMob2.attack       = 8;
    //     var mousekAttacks     = [" lunges at you, poking with its rusty bayonet!", " brings the mouseket to its shoulder and fires!"];
    //     weakMob2.attackDesc   = mousekAttacks[ Math.floor(Math.random() * mousekAttacks.length)];
    //     weakMob2.atkMod       = 0;
    //     weakMob2.desc         = "Scraps of rotting mouseflesh and Mouseketeer uniform still cling to this skeleton. It is aiming its mouseket at you, the affixed bayonet looks rusty but sharp.";
    // }
    // if (weakMob2.name == 'Spoopy Skeltal'){
    //     weakMob2.hp         = 3 * Math.ceil( Math.random() * dieTypes[0]);
    //     weakMob2.maxHp      = weakMob2.hp;
    //     weakMob2.attack     = 7;
    //     weakMob2.attackDesc = " flails at you in a skeltal fashion!";
    //     weakMob2.desc       = "The Skeltal leers at you with a spoopy grin. It is disconcerting to say the least.";
    //  }
    // if (weakMob2.name == 'Spoopy Skeltarcher'){
    //     weakMob2.hp         = 2 * Math.ceil( Math.random() * dieTypes[0]);
    //     weakMob2.maxHp      = weakMob2.hp;
    //     weakMob2.attack     = 10;
    //     weakMob2.attackDesc = " notches an arrow to its skeltal bow and fires!";
    //     weakMob2.atkMod     = 1;
    //     weakMob2.desc       = "The Skeltarcher draws a bead on you with its bow, but you're pretty sure its aim is kinda spoopy.";
    // }
    // if (weakMob2.name == 'Potted Petunia'){
    //     weakMob2.hp         = 6 * Math.ceil( Math.random() * dieTypes[0] + 6);
    //     weakMob2.maxHp      = weakMob2.hp;
    //     weakMob2.attack     = 3;
    //     weakMob2.attackDesc = " bashes its floral form against you!";
    //     weakMob2.desc       = "The Potted Petunia bounces along angrily. You get the vague impression that it's thinking, \"Oh no, not again.\"";
    // }
    
    // ^^ FIGURE OUT A LESS JANKY WAY OF DOING THIS ^^
    
    
    
    //NOT ACTUALLY BROKEN, JUST VESTIGIAL
    
    // Rob's code for hp 30 +/- 5
// var modifier = Math.random() < 0.5 ? -1 : 1
// var rando = modifier * Math.ceil( Math.random() * 5)
// var health = 30 + rando


// My codes for Hit Dice
// var weakDice = hitDiceNumber * Math.ceil( Math.random() * 6)
// var mediumDice = hitDiceNumber * Math.ceil( Math.random() * 8)
// var toughDice = hitDiceNumber * Math.ceil( Math.random() * 10)
// var bossDice = hitDiceNumber * Math.ceil( Math.random() * 12)  // Might actually do set HP pool for bosses instead






// kCtrl.dataScroll = function()

// }

// Stack Overflow Solution to look up
myApp.directive('scrollOnClick', function() {
  return {
    restrict: 'A',  // A = attribute E = Element C = Class
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
      });
    }
  }
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