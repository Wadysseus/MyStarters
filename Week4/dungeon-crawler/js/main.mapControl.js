//Brandon's Codes with my Modifications to show my static map


// var Game = {
//     display: null,
 
//     init: function() {
//         this.display = new ROT.Display();
//         document.body.appendChild(this.display.getContainer());
//     }
// }

window.onload = function() {
    // Check if rot.js can work on this browser
    if (!ROT.isSupported()) {
        alert("The rot.js library isn't supported by your browser.");
    } else {
        // Create a display 16 characters wide and 12 characters tall
        var display = new ROT.Display({width:16, height:12});
        var container = display.getContainer();
        // Add the container to our HTML page
        document.body.appendChild(container);
        
        // This is the full map. Figure out how to make it so it moves the @ sign around for the player and reveals rooms only after they've been explored. Good luck.
        display.draw(6, 2, "0");  //Room index0
    display.draw(6, 3, "|");
    display.draw(6, 4, "1");  
    display.draw(6, 5, "|");
    display.draw(7, 4, "-");
    display.draw(8, 4, "-");
    display.draw(9, 4, "2");
    display.draw(9, 3, "^");
    display.draw(9, 2, "3");
    display.draw(6, 6, "5");
    display.draw(7, 6, "-");
    display.draw(8, 6, "-");
    display.draw(9, 6, "6");
    display.draw(5, 6, "-");
    display.draw(4, 6, "-");
    display.draw(3, 6, "4");
    display.draw(3, 7, "v");
    display.draw(3, 8, "7");
    display.draw(3, 9, "^");
    display.draw(3, 10, "8");
    display.draw(2, 10, "-");
    display.draw(1, 10, "-");
    display.draw(0, 10, "9");
        }
    }



// vv I don't understand any of this shit vv


// Tutorial Codes

// var Game = {
//     display: null,
 
//     init: function() {
//         this.display = new ROT.Display();
//         document.body.appendChild(this.display.getContainer());
//     }
// }

// Game.map = {};
// Game._generateMap = function() {
//     var digger = new ROT.Map.Digger();
//     var freeCells = [];
 
//     var digCallback = function(x, y, value) {
//         if (value) { return; } /* do not store walls */
 
//         var key = x+","+y;
//         freeCells.push(key);
//         this.map[key] = ".";
//     }
//     digger.create(digCallback.bind(this));
 
//     this._generateBoxes(freeCells);
 
//     this._drawWholeMap();
// };

// Game._generateBoxes = function(freeCells) {
//     for (var i=0;i<10;i++) {
//         var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
//         var key = freeCells.splice(index, 1)[0];
//         this.map[key] = "*";
//     }
// };

// Game._drawWholeMap = function() {
//     for (var key in this.map) {
//         var parts = key.split(",");
//         var x = parseInt(parts[0]);
//         var y = parseInt(parts[1]);
//         this.display.draw(x, y, this.map[key]);
//     }
// }






// ROT.js manual code examples


// var Game = {
//     display: null,
 
//     init: function() {
//         this.display = new ROT.Display();
//         document.body.appendChild(this.display.getContainer());
//     }
// }

// var display = new ROT.Display({width:20, height:5});
// SHOW(display.getContainer());
// display.setOptions({
//     width: 30,
//     fontSize: 8,
//     fontStyle: "bold",
//     bg: "#a00"
// });

// var map = new ROT.Map.Arena(10, 6);

// var display1 = new ROT.Display({width:10, height:6, fontSize:18});
// SHOW(display1.getContainer());

// map.create(function(x, y, wall) {
//     display1.draw(x, y, wall ? "#" : ".");
// });

// /* debugging with small font */
// var display2 = new ROT.Display({width:10, height:5, fontSize:8});
// SHOW(display2.getContainer());
// map.create(display2.DEBUG);
