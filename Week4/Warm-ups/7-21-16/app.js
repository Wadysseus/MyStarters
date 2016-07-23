angular.module('Chuckuthon', [])
console.info('App.js online, human.')

angular.module('Chuckuthon')
    .controller('ChuckingAwesomeController', ChuckingAwesome)
    .factory('ChuckFactory', ChuckFactory)
    
function ChuckingAwesome (ChuckFactory){
    console.log('ChuckingAwesomeController functional, human.')
    
    var chuck = this;
    
    chuck.title = "Time waits for no man. Unless that man is Chuck Norris."
    chuck.quote = "" // It's really helpful to declare default values for controller variables
    


    chuck.clickitySplit = function () {
        ChuckFactory.getRandomQuote()
        .then(function(res){
            console.debug('getRandomQuote:res' + res.data + ', human.')
            //res.data
            // chuck.quote = res.data.value.joke
            
            // Object access safety - 
            //This is how to safely access nested properties on an object.
            var data = res.data || {}
            var value = data.value || {}
            var joke = value.joke || ''
            
            chuck.quote = joke || ':( no joke found' // UI/UX feedback
            
        }, function(error) { //OMG DON'T FORGET THIS - WHENEVER YOU CHAIN A ---THEN--- ADD AN ERROR HANDLER CALLBACK TO YOUR THEN FUNCTIONS
                console.error("ERROR, ERROR: clickitySplit:" , error)
                
                //OH NOES!
                try {
                    //unsafe code goes here
                    //JSON.parse is UNSAFE: always catch it
                    chuck.norris.is.awesome
                    
                }
                    
                }
                
                
                chuck.quote = 'No quote found :('
        }
        )
    }        

    };
    
function ChuckFactory($http){
    console.debug('ChuckFactory: all systems nominal')
    
    return {
        getRandomQuote: function() {
            return $http.get('http://api.icndb.com/jokes/random')
        }
    }
}
   
ChuckingAwesome.$inject = ['ChuckFactory'] 
ChuckFactory.$inject = ['$http']


