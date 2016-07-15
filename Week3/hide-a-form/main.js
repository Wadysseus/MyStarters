console.log('no bug here!');
// Creation of FormStorm module
angular.module('FormStorm', []);


// Creating formTroller controller
angular.module('FormStorm')
    .controller('formTroller', peekaButton);
   
//Creating function for formTroller controller, changes text back and forth between Hide and Show Form.
function peekaButton () {
    var pkBtn = this;
    pkBtn.appear = function(){
        if(pkBtn.appearStatus == true){
            pkBtn.appearStatus = false;  //This is probably not the right way to do this
            pkBtn.buttonMessage = "Hide Form";
        }
        else if(pkBtn.appearStatus == false){
            pkBtn.appearStatus = true;
            pkBtn.buttonMessage = "Show Form";
        }
    };
};
