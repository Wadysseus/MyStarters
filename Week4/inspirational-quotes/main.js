//Declaring a module called quoteApp
angular.module('QuoteApp', [])
console.info ('Module online, human.')

//declaring a controller called quoteControl
angular.module('QuoteApp')
    .controller('quoteControl', quoteControl)
    console.info ('Control systems nominal, human.')
    
    
    function quoteControl () {
        var qCtrl = this;
        
        console.info('qCtrl ready to fire, human.')
        this.submitShow = true;
        this.author = [];
        this.quote = [];
    }