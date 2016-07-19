angular.module('MilliwaysRestaurant')

angular.module('MilliwaysRestaurant')
    .controller('milliwaysMenu', milliwaysMenu)


angular.module('MilliwaysRestaurant')
    .factory('milliFood', milliFood)
//  function milliwaysMenu () {
//    var menu = this;
// }

//milliFood encompasses the foodItems (ingredients) list. It is currently complete.

    function milliFood () {
        var mFood = this;

        var foodItems = [{
            name: 'lunar cow',
            calories: 5000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'lettuce',
            calories: 1000,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'space veggies',
            calories: 4000,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'cephalopod',
            calories: 1000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'star butter',
            calories: 800,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'chocolate cream cheese',
            calories: 700,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'lunar cow milk',
            calories: 1000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'vodka',
            calories: 200,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'venusian lime',
            calories: 50,
            vegan: true,
            glutenFree: true,
            citrusFree: false,
        },{
            name: 'jupiter razzberry',
            calories: 150,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'grapefruit grenadine',
            calories: 250,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'stellar goldschlager',
            calories: 1250,
            vegan: true,
            glutenFree: false,
            citrusFree: true,
        },{
            name: 'laser lemon',
            calories: 1250,
            vegan: true,
            glutenFree: true,
            citrusFree: false,
        },]
        return foodItems;
    };
    
//milliFood encompasses the foodItems (ingredients) list. It is currently complete.
    
    
function milliwaysFactory() {
   console.log('milliwaysMenu Loaded')

   var menuItems = [{
       name: 'Ameglion Major Cow',
       calories: 10000,
       deliciousness: 6,
       flavor: 'Milkyway-ish',
       price: 100000
   },{
       name: 'Odyssey Octopus',
       calories: 1800,
       deliciousness: 4,
       flavor: 'Squishy',
       price: 1300
   },{
       name: 'Stardust Cheesecake',
       calories: 1500,
       deliciousness: 9,
       flavor: 'Out of this world',
       price: 400
   },{
       name: 'Cosmic Cookies',
       calories: 1800,
       deliciousness: 4,
       flavor: 'Poppin',
       price: 1300
   }]
//  `String`  : name
// `String`  : description
// `Number`  : price
// `Array`   : ingredients (collection of constructed FoodItem objects)
   

   var menuTitle = "Lunch & Dessert"

   // whatever you share, you will return in your factory
   return {
       menuItems: menuItems,
       title: menuTitle
   }
   
   var drinkItems = [{
       name: 'Pan-Galactic Gargle Blaster',
       description: 'An alcoholic beverage invented by ex-President of the Universe Zaphod Beeblebrox, considered by the Guide to be the "Best Drink in Existence". Its effects are similar to "having your brains smashed in by a slice of lemon wrapped round a large gold brick".',
       price: 55.555,
       ingredients: [],
   },{
       name: 'Milky Way Milk',
       description: 'Locally sourced from a free-range cosmic dairy.',
       price: 2,
       ingredients: [],
   },{
       name: 'Venusian Vodka',
       description: '',
       price: 10,
       ingredients: [],
   },{
       name: 'Jupiter Jazz Liqueur',
       description: '',
       price: 15.42,
       ingredients: [],
}]
   
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


// // FoodItem
// `String`  : name
// `Number`  : calories
// `Boolean` : vegan
// `Boolean` : glutenFree
// `Boolean` : citrusFree
// ​
// // Drink
// `String`  : name
// `String`  : description
// `Number`  : price
// `Array`   : ingredients (collection of constructed FoodItem objects)
// ​
// // Plates
// `String`  : name
// `String`  : description
// `Number`  : price
// `Array`   : ingredients (collection of constructed FoodItem objects)
// ​
// // Order
// `Array`   : plates (collection of constructed Plate objects)
// ​
// // Menu
// `Array`   : plates (collection of constructed Plate objects)
// ​
// // Restaurant
// `String`  : name
// `String`  : description
// `Menu`    : menu (constructed Menu object)
// ​
// // Customer
// `String`  : dietaryPreference