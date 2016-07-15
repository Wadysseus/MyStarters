// - Create an HTML page with a button.
// - Add an ng-click directive so that when you click the button a message is printed to the console.
// - Change the behavior of the click handler to reveal an h1 with some text in the body element.
// - Add another button with a click handler that reveals an unordered list with three list items in the body element.

// Creation of clickTracker module
angular.module('clickTracker', []);

// Creating controller
angular.module('clickTracker')
    .controller('trackThemClicks', [trackFxn]);
    
angular.module('clickTracker')
    .controller('trackListClicks', [listClicker]);
        
//Creating function for controller
function trackFxn () {
    var trackClick = this;
    trackClick.count = function(){
        trackClick.clickCounter++
        if (trackClick.clickCounter >= 1) {
            trackClick.welcomeMessage = "You clicked the button!";
        }
    }
};

// Is now passed in properly, but only the first if statement is returning
function listClicker () {
    var listClick = this;
    listClick.count = function(){
        listClick.clickCounter++
        if(listClick.clickCounter >=1) {
            listClick.firstItem = "OMG";
            listClick.secondItem = "WTF";
            listClick.thirdItem = "BBQ!";
        }
        // else if(listClick.clickCounter >= 2) {
        //     listClick.secondItem = "WTF";
        // }
        // else if(listClick.clickCounter >= 3) {
        //     listClick.thirdItem = "BBQ!";
        // }
    }
};


// function clickCounter () {
//     var count = 0;
//     count = count + 1;
//     return count;
// }



// This is not the /ANGULAR/ way to do things.
// var buttonTarget = document.getElementById("datButton");
// buttonTarget.addEventListener('click', clickCounter, false);


// // Create a module
// angular.module('PokeApp', []);

// // Create a controller
// angular.module('PokeApp')
// 	.controller('PallettTown', [
// 		// '$scope', 
// 		// '$http', 
// 		pallettCtrl
// 	]);

// // Our Controller Function
// function pallettCtrl () {
// 	// this -> {} ~ Very similar to $scope
// 	// arguments

// 	// Every function has a value of this
// 	// the THIS from our controller function will be the THIS to expose data to the view
// 	var pCtrl = this;

// 	pCtrl.welcomeMessage = "Gotta Catch'em All!";

// 	// this - different from the myFunc this
// 	// function myFunc () {
// 	// 	this -  different from controller's this
// 	// }


// 	// ngRepeat is an angular directive that is used for CLIENT-SIDE templating
// 	// TEMPLATING - generating DOM content from data using a placeholder or blueprint

// 	pCtrl.pokemon = [
// 		'Charmander2',
// 		'Bulbasaur',
// 		'Squirtle',
// 		'Vegetable',
// 		'2Scoops',
// 		'3Scoops',
// 		'Jigglypuff',
// 	];

// 	pCtrl.jigglyPuff = {
// 		squishiness : 7,
// 		rage 		: 'irate',
// 		rockstar 	: true,
// 		name 		: 'jigglypugg',
// 	};


// 	// Array with DUPLICATE values
// 	// pCtrl.clonedPokemon = [
// 	// 	'Jigglypuff',
// 	// 	'Charmander2',
// 	// 	'Bulbasaur',
// 	// 	'Bulbasaur',
// 	// 	'Bulbasaur',
// 	// 	'Squirtle',
// 	// 	'Vegetable',
// 	// 	'2Scoops',
// 	// 	'2Scoops',
// 	// 	'2Scoops',
// 	// 	'3Scoops',
// 	// 	'Jigglypuff',
// 	// ];


// 	pCtrl.trainers = [
// 		{
// 			name   : "Ash",
// 			badges : [
// 				"Earth",
// 				"Wind",
// 				"Fire",
// 			],
// 			skill  : 1,
// 		},{
// 			name   : "Misty",
// 			badges : [
// 				"Water",
// 			],
// 			skill  : 3,
// 		},{
// 			name   : "Brock",
// 			badges : [
// 				"Rock",
// 				"Suplex",
// 				"Cascade"
// 			],
// 			skill  : 5,
// 		}];




// }