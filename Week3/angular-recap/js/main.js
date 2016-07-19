// SiC - declare a module in angular named 'WeddingBells' in title case and camel case
// with no dependencies
angular.module('WeddingBells',[]);


//SiC - reference the module WeddingBells
angular.module('WeddingBells')
    //SiC - chain the controller ballAndChain mapped to a controller function called 'eternity'
    // which takes no dependencies
    .controller('ballAndChain', eternity)
    
// SiC - Set the $inject property on the eternity controller function to a dependency array including divorceFactory
// SiC2 - Inject divorceFactory into eternity using $inject
eternity.$inject = ['divorceFactory']
    
    // SiC - Declare/create/define a function named eternity
    function eternity (divorceFactory) {
        console.info('eternity.controller is loaded, human.')
        console.info('eternity.controller.divorceFactory', divorceFactory)
        
        // 'love' on the DOM is mapping to the 'this' variable within the eternity controller
        var love = this;
        
        love.info = divorceFactory.info 
    }
    
    //SiC - Declare a factory named 'divorceFactory' on the module WeddingBells
    angular.module('WeddingBells')
        // SiC - register the factory 'divorceFactory'
        .factory('divorceFactory', splitsies)
        
        function splitsies () {
            // couple 1
            year: 2013,
            spouses: [{
            age: 23,
            occupation: 'Dentist',
            education: 'DDS',
            gender: 'female'
        },{
            age: 43,
            occupation: 'Plumber',
            education: 'Highschool',
            gender: 'male'
        }],
        duration: 2
        },{ // couple 2
        year: 2000,
        spouses: [{
            age: 32,
            occupation: 'Burger Flipper Engineer',
            education: 'RefactorU',
            gender: 'male'
        },{
            age: 35,
            occupation: 'WNBA',
            education: 'G.E.D.',
            gender: 'female'
        }],
        duration: 5
    },{ // couple 3
        year: 1865,
        spouses: [{
            age: 20,
            occupation: 'Buggysmith',
            education: 'None',
            gender: 'male'
        },{
            age: 15,
            occupation: 'Doll Dresser',
            education: 'Mom',
            gender: 'female'
        }],
        duration: 10
    }]
            
            
            // SiC - return an object with the property/key that has a value of the data collection
            return {
                divorceInfo: data
            }
        }