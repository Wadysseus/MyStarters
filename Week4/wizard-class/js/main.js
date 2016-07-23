// // OOP - INHERITANCE LECTURE


// function Wizard (name, powers, beardLength) {
//     this.name = name;
//     this.powers = powers;
//     this.beardLength = breadLength;
// }

// Wizard.prototype.castSpell = function (spellIndex) {
//     return `${this.name} casts ${this.powers[spellIndex]}!`
// }


// var smandalf = new Wizard('Smandalf the Smug', 
// [
//     'Smug Storm',
//     'Smug Punch',
// ],
// 6
// );


// function Necromancer (name, powers, beardLength, minionType) {
    
    
//     // Using the call method allows us to utilize code we've already written.
//     // By invoking the Wizard fxn and forcing context (Necromancer's THIS) we can re-use code without copy/pasting Wizard constructor into our Necro constructor
//     Wizard.call(this, name, powers, beardLength);  // could also do var newNecro = this; and pass newNecro into the call instead of THIS
//     this.minionType = minionType;
// }

// // First thing to do is allow the Necromancer prototype to look at the Wizard prototype
// // Necromancer.prototype = Wizard.prototype // This would create two vars pointing to same object, the WIZARD PROTO. Would not be able to give necros their own methods.

// Necromancer.prototype = new Wizard();  // This will make the Necromancer prototype a Wizard which has access to the Wizard Prototype

// Necromancer.prototype.constructor = Necromancer; // Reset the constructor so we have the proper reference to it

// Necromancer.prototype.raiseMinion = 
//     function(){
//         return `${this.name} raises several ${this.minionType} from the dead. They look hungry.`
//     }


// //Override the Wizard version of castSpell to make more necromancery
// //This would intercept the call of castSpell. It would fire when it reached the Necromancer Ptrototype and not continue on to the Wizard Prototype
// Necromancer.prototype.castSpell = function(spellIndex){
//     return `${this.name} casts ${this.powers[spellIndex]}! It's so super necromancery...`
// }

// var wade = new Necromancer (
//     'Wade',
//     [
//         'Force',
//         'Raise Undead',
//         'Pestilence',
//         'Bone Armor'
//         ],
//         0.5,
//         'Ewok Skeletons'
//         );
        
        
        
        
        
        
// ========== ES6! =========== \\

class Wizard{
    constructor (name, powers, beardLength){
    this.name = name;
    this.powers = powers;
    this.beardLength = breadLength;
    }
    castSpell(spellIndex){
        return `${this.name} casts ${this.powers[spellIndex]}!`
    }
    growBeard(){
        this.beardLength++
        return `$ `
    }
}
        

class Necromancer extends Wizard{
    constructor(name, powers, beardLength, minionType){
        super(name, powers, beardLength); // Calls the Wizard constructor for us, since it's the SUPER-class.
        this.minionType = minionType
    }
    // raiseMinion()
    castSpell(spellIndex){
        var spellString = super.castSpell(spellIndex);
        
        return `${spellString} \n It's super effective!`
    }
}