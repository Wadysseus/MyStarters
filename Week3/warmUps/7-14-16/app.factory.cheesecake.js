angular.module('CakeApp')
    .factory('CheesecakeFactory', CheesecakeFactory)
    
    function CheesecakeFactory() {
        
        console.info('Factory online, human.')
        
        var menuItems = [{
            calories: 6000,
            mouthFeel: 3,
            flavor: 'Southwest',
            price: 50,
            name: 'Egg Roll'
        },
        {
            calories: 1500,
            mouthFeel: 9,
            flavor: 'Vanilla',
            price: 9.95,
            name: 'Strawberry Cheesecake'
        },
        {
            calories: 1800,
            mouthFeel: 10,
            flavor: 'Chocolate Turtle',
            price: 13,
            name: 'Turtle Cheesecake'
        }]
        
        var menuTitle = "Lunch & Dessert"
        
        var Something = "All systems functional. "
        return {
            //generally factories will return some kind of object background
            Status: Something,
            menuItems: menuItems,
            title: menuTitle
        }
    }
    
    
    
    
    
    
    