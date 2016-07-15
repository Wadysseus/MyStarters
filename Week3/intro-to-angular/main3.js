// Part III
// -----------
// - Create an HTML page with one giant button in the center.
// - When the giant button is clicked, a 'popup' is revealed. The popup is simply a div containing some HTML content, which has a class applied making it appear with position: fixed in the middle of the page.
// - Add a close button to the popup. When clicked, the popup should be hidden.
// - Make sure the giant button still works to create a popup even after one is opened and closed.

console.log('Systems online, human.')


// Creation of PopUpDisplay module
angular.module('PopUpDisplay', []);

// Creating controller hoverMouse attached to MouseHQ
angular.module('PopUpDisplay')
    .controller('popUpToggler', [popUpToggler]);
    
    function popUpToggler (){
        var pUpTog = this;
        
        pUpTog.bigReveal = function (){
            return false;
        }

    };
    
//     var showApp = angular.module('showApp', [])

// .controller('mainController', function($scope) {

//   $scope.goCats = false;
  
// });