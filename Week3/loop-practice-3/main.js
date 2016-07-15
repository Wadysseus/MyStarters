// Loop-Practice-3
// EXERCISE COMPRETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// for(var i=0; i < students.length; i++) {
//  console.log(students[i].name);
// }






// - 25 27 32 24 18

// COMPRETE

function logAges(collection) {
  collection.forEach(function(student){
   console.log(student.age)
  })
};


// function mapAges(collection)  // this would create an array instead, but is otherwise identical to .forEach

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });



// - Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver

// COMPRETE!

function logNameCity (collection) {
  collection.forEach(function(student){
   console.log(student.name + ", " + student.city)
  })
};


// - Liz is from Boulder Trent is from Boulder Chelsea is from Boulder

// COMPRETE!

function boulderNameCity (collection) {
 collection.forEach(function(student){
  if(student.city == "Boulder"){
  console.log(student.name + " is from " + student.city);
  }
 })
};


// - Meghan is older than 25 Trent is older than 25

// EXERCISE COMPRETE!

function oldBoy (collection) {
 collection.forEach(function(student){
  if(student.age > 25){
   console.log(student.name + " is older than 25");
  }
 })
};






