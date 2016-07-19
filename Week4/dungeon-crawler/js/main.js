angular.module('KittyCrawler', [])
console.log("Initializing systems, human.")
angular.module('KittyCrawler')
    .controller('kittyHQ', [Kitty])

//Kreating Kitties

function Kitty (name, color, breed) {
    console.log('Kitty Kreator functional, human.')
    var kNew = this;
    
    this.name = name || 'Purrcival';
    this.color = color;
    this.breed = breed;
    this.dead = false;
    this.lives = 9;
    this.inventory = [ ];
        if (kNew.breed == 'siamese'){
            kNew.attack = 10;
            kNew.hp = 50;
            kNew.furLength = 'short';
        }
        if (kNew.breed == 'maineCoon'){
            kNew.attack = 6;
            kNew.hp = 70;
            kNew.furLength = 'long';
        }
        if (kNew.breed == 'tabby'){
            kNew.attack = 8;
            kNew.hp = 60;
            kNew.furLength = 'average';
        }
}

//Available breeds = Siamese, MaineCoon, Tabby

// var mainCat = new Kitty (name, color, breed)


//Eventual classes = Pawladin, Necromouser, Meowsferatu

// GRABBIN' SKEELS HERE

Kitty.prototype.meow = function(){
    //This refers to the object that called this method.
    console.log(this.name + " goes meow!");
}

Kitty.prototype.scratch = function(target){
    console.log(this.name + " lashes out at " + target.name + " in a flurry of feline fury!")
    var dmg = [Math.ceil(Math.random() * this.attack)]
    console.log(target.name + " has taken " + dmg + " points of damage!")
}

Kitty.prototype.hairball = function(){
    console.log(this.name + " hocks up a giant hairball! You feel better!")
}

Kitty.prototype.examine = function(target){
    console.log(this.name + " checks out " + target.name + ".");
    console.log(this.desc);
}

Kitty.prototype.get = function(target){
    console.log(this.name + " picks up the " + target.name + ".");
}