// - Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

var sillyString = 'God, am I reviled? I rise, my bed on a sun, I melt. To be not one man emanating is sad. I piss. Alas, it is so late. Who stops to help? Man, it is hot. I’m in it. I tell. I am not a devil. I level “Mad Dog”.'

function firstReverse(string){
    var rString = '';
    for (var i = string.length - 1;i >= 0; i--)
    rString += string[i];
    return rString;
};

firstReverse(sillyString);



// - Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay 
// the way they are.
// - <em>Bonus:</em> Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" 
// should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.