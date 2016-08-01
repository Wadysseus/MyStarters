var knock = new Audio ();
knock.src ="sounds/RoboChest.wav"

var frogRibbit = new Audio ();
frogRibbit.src ="sounds/FrogRibbit.wav"

var ozzieSound = new Audio ();
ozzieSound.src = "sounds/Ozzie.wav"

var wrongSound = new Audio ();
wrongSound.src = "sounds/Wrong.wav"

var onScreenSound = new Audio ();
onScreenSound.src = "sounds/OnScreen.wav"

var doorHissSound = new Audio ();
doorHissSound.src = "sounds/DoorHiss.wav"

var fireSound = new Audio ();
fireSound.src = "sounds/Fire.wav"

var waterSound = new Audio ();
waterSound.src = "sounds/Water.wav"

var iceSound = new Audio ();
iceSound.src = "sounds/Ice.wav"

var lightningSound = new Audio ();
lightningSound.src = "sounds/Lightning.wav"

var shadowSound = new Audio ();
shadowSound.src = "sounds/ShadowSpell.wav"

var epochSound = new Audio ();
epochSound.src = "sounds/Epoch.wav"

var kefkaLaugh = new Audio();
kefkaLaugh.src = "sounds/kefka.wav"
kefkaLaugh.volume = 0.5;

var dropCounter = 0;
function dropSounds () {
    dropCounter++;
    if (dropCounter % 2 == 0){
        doorHissSound.play();
    }
    else{
        onScreenSound.play();
    }
}