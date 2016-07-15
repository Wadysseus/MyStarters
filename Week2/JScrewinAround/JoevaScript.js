var baseString = "How many spaces are there in this sentence?";

function capString(testString){
for(var i=0; i < testString.length; i++){
   if(testString[i]===" "){
       testString[i+1].toUpperCase();
       return testString;
   }
}
}



function capString(testString){
for(var i=0; i < testString.length; i++){
   if(testString[i]===" "){
       testString[i+1].toUpperCase();
       return testString;
   }
}
}



// ORIGINAL
// var testString = "How many spaces are there in this sentence?";


// for(var i=0; i < testString.length; i++){
//   var newString = testString;
//   if(testString[i]===" "){
//       newString[i+1] = testString[i+1].toUpperCase();
       
//   }else{
      
//   }
// }
// console.log(newString);