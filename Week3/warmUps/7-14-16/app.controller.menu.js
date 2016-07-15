angular.module('CakeApp')
    .controller('MenuController', MenuController)
    
    MenuController.$inject = ['CheesecakeFactory']
    
    function MenuController(CheesecakeFactory){
        console.info('MenuController:CheesecakeFactory', CheesecakeFactory)
        
        var Menu = this;
        
        Menu.title = "Awxome Sauze";
        Menu.items = CheesecakeFactory.menuItems;
        Menu.search = '';
        
        /* [(value: 4),(value:3),(value:6)].filter(function(item){
             return item.value > 5
         })
        This will return an array with only value 6.
        */
        
        Menu.lowCalories = function (menuItem) {
            return item.calories < 2000
        }
    }