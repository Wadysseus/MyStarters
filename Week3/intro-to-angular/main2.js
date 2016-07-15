// - Create an HTML page with some filler content including some paragraphs, headings, and links.
// - When a paragraph is moused over, turn the text of that paragraph pink.
// - Add an exclamation point to the end of each heading.
// - When a link is clicked, confirm that the user wants to navigate to that url. If the user clicks OK, allow the default behavior of the link to be executed. If the user clicks cancel, cancel 
// the default browser behavior by calling event.preventDefault() on the event object.
// - When a link is clicked and the user chooses not to go to the url, remove the link from the DOM.

console.log('Systems online, human.')

// Creation of MouseHQ module
angular.module('ConfirmTravel', []);

// Creating controller hoverMouse attached to MouseHQ
angular.module('ConfirmTravel')
    .controller('travelCheck', [travelCheck]);
    
//Creating function for controller



function travelCheck () {
    
    var tChk = this;
    
    tChk.linkOne = function(){
        return false;
    }
    tChk.linkTwo = function(){
        return false;
    }
    tChk.linkThree = function(){
        return false;
    }
    
};


// Completely unnecessary with Joe's fix. THANKS JOE! :D

//     trackMouse.pinkifyText = function(){
//         console.log("The mouse hovered over text! Adequately performed, human.")
//         // trackMouse.customStyle.colorClass = "pinked"
//     }
//     trackMouse.dePinkify = function(){
//         console.log("The mouse hovered away from text! Adequately performed, human.")
//         // trackMouse.customStyle.colorClass = "dePinked"
//     }

