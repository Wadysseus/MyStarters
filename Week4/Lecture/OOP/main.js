

function Cat (name, lives, color, hp, hairLength) {

	// We will attach information to the THIS object
	// When we are using a function as a CONSTRUCTOR, THIS represents the object being constructed

	this.name 		= name;
	this.lives 		= lives;
	this.color 		= color;
	this.hp 		= hp;
	this.hairLength = hairLength;
	
    // While this works, it's not best practice. If we had 10k cats, we'd be creating 10k copies of this fxn in memory
    
    // this.meow = function (){
	   // this.name + " goes meow!";
// 	}
};

//the BEST way to attached methods to our class INSTANCES is to use the PROTOTYPE object
// Every class has a PROTOTYPE and it is SHARED among INSTANCES

// Constructing Instances

Cat.prototype.meow = function(){
    //This refers to the object that called this method.
    console.log(this.name + " goes meow!");
}


var rob = new Cat('Rob', 1, 'Purple', 50, 'Long');
var captainPuddinPaws = new Cat('Captain Puddin` Paws', 9, 'Tapioca', 200, 'No Hair');




// CHALLENGE I

// 1. Create a class / constructor
    // - House class
        // - size
        // - bedrooms
        // - stories
        // - bathrooms
        
// 2. Construct 2 instances of the House class, log the results

function House (size, bedrooms, stories, bathrooms, value) {
    this.size = size;
    this.bedrooms = bedrooms;
    this.stories = stories;
    this.bathrooms = bathrooms;
    this.value = value;
}


var myHouse = new House ('2500 sq. ft', 3, 2, 3, 300000)

var puddinHouse = new House ('15 sq. ft', 1, 1, 0, 30)




// =============================================================================
// CHALLENGE THE DEUCE

// 1. Add a 'value' property to the House class (DON'T FORGET TO UPDATE YOUR INSTANCES)

// 2. Create a prototype method called
//        -depreciate
//          -This method should decrement a house's value by an amount specified as an argument

// 3. If a house's value falls below 0, log a message describing the demolition happening to the house.

//Rob's solution

House.prototype.depreciate = function(amt){
    this.value -= amt;
    
    // if (this.value <= 0){
    //     return "Your house 'asplode";
    // }
    // else{
    //     return 'New Value: ' + this.value;
    // }
    
    // TERNARY TIEMZ
    
    return this.value <= 0 ? 'Demo Time!' : 'New Value : ' + this.value
    
    // Ternary Structure -- CONDITIONAL ? TRUE VALUE : FALSE VALUE
    
};



// My failed attempt:
// House.prototype.depreciate = function (years) {
//     for (var i = 0;i < years; i++){
//         this.value = this.value - (this.value * 0.05);
//     }   
//     return this.value;
//     console.log (this.value + " is the value after " + years + " of neglect.");
// };




