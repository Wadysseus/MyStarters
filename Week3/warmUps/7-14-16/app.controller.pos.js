angular.module('CakeApp')
    .controller('MenuOrderController', [
        'CheesecakeFactory',
        MenuOrderController
        ])

function MenuOrderController(CheesecakeFactory) {
    var menuOrder = this;
    console.info('MenuOrderController:CheesecakeFactory', CheesecakeFactory)
    
    //assigning by reference
    menuOrder.items = CheesecakeFactory.menuItems
    
    // Not working for some reason. I checked my code on here and index, both look basically the same as Brandon's.
    menuOrder.removeLastItem = function () {
        menuOrder.items.pop()
        
        console.info(CheesecakeFactory.items)
    }
};