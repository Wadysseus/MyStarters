// The output in each of the problems below is written on a single line for formatting reasons, however your actual output will print each value on a separate line.

//  GREAT JERB! 
//  YOU FINISHED THE WHOLE THING, GIVE YOURSELF A MENTAL PAT ON THE BACK! (BECAUSE PEOPLE WILL GIVE YOU ODD LOOKS IF YOU PHYSICALLY PAT YOURSELF ON THE BACK)

// - 0 100 200 300 400 500

// EXERCISE COMPRETE

for (var i = 0;i <501; i+=100){
    console.log(i);
}


// - 1 2 4 8 16 32 64

// EXERCISE COMPRETE

for (var i = 1;i < 65; i+=i){
    console.log(i);
}


// - 1 1 1 2 2 2 3 3 3

// EXERCISE COMPRETE

var value =1;
for (var i = 1; i<9; i++) {
    if (i%3 == 0) {
        value++;{
            console.log(value);
        }
    }
    else {
        console.log(value);
    }
}
    

// - 0 2 4 6 8 10

// EXERCISE COMPRETE

for (var i =0; i < 11; i+=2) {
    console.log(i)
}


// - 3 6 9 12 15

// EXERCISE COMPRETE

for (var i = 3; i < 16; i+=3) {
    console.log(i);
}


// - 9 8 7 6 5 4 3 2 1 0

// EXERCISE COMPRETE

for (var i = 9; i >= 0; i--){
    console.log(i);
}


// - 0 1 2 3 0 1 2 3 0 1 2 3

// EXERCISE COMPRETE

var newValue = 0;
for (var i = 0; i<12; i++) {
    if (i%4 == 0) {
        newValue = 0;
            console.log(newValue);
        }
    else {
        newValue++;
        console.log(newValue);
    }
}