console.log('Initializing systems.');
// Creation of FormStorm module
angular.module('FormStorm', []);


// Creating peekaButton controller
angular.module('FormStorm')
    .controller('peekaButton', peekaButton);
    
//Creating function for peekaButton controller, changes text back and forth between Hide and Show Form.
function peekaButton () {
    var pkBtn = this;
    pkBtn.nameInput = "";
    pkBtn.bioInput = "";
    pkBtn.booksInput = "";
    pkBtn.liberryInput = "";
    pkBtn.buttonMessage = "Show Form";
    pkBtn.appear = function(){
        console.log("All systems nominal, human.");
        if (pkBtn.appear == false){
            pkBtn.buttonMessage = "Show Form";
        }
        else if (pkBtn.appear == true){
            console.log("All systems nominal, human.")
            pkBtn.buttonMessage = "Hide Form";
        }
        return false;
    };
};



// (function(angular) {
//   'use strict';
// angular.module('FormStorm', [])
//  .controller('ExampleController', ['$scope', function($scope) {
//   $scope.user = {};
//  }]);
// })(window.angular);