function hairRandom(){
    let hair=['','/Media/hair/default.png','/Media/hair/bang.png','/Media/hair/curls.png','/Media/hair/elegant.png','/Media/hair/fancy.png','/Media/hair/quiff.png','/Media/hair/short.png'];
    var i= random(7);
    document.getElementById('hair').src=''.concat(hair[i]);
}
function earRandom(){
    let ears=['','/Media/ears/default.png','/Media/ears/tilt-backward.png','/Media/ears/tilt-forward.png'];
    var i= random(3);
    document.getElementById('ears').src=''.concat(ears[i]);
}
function eyeRandom(){
    let eyes=['','/Media/eyes/default.png','/Media/eyes/angry.png','/Media/eyes/panda.png','/Media/eyes/naughty.png','/Media/eyes/smart.png','/Media/eyes/star.png'];
    var i= random(6);
    document.getElementById('eyes').src=''.concat(eyes[i]);
}
function legRandom(){
    let leg=['','/Media/leg/default.png','/Media/leg/bubble-tea.png','/Media/leg/cookie.png','/Media/leg/game-console.png','/Media/leg/tilt-backward.png','/Media/leg/tilt-forward.png'];
    var i= random(6);
    document.getElementById('leg').src=''.concat(leg[i]);
}
function mouthRandom(){
    let mouth=['','/Media/mouth/default.png','/Media/mouth/astonished.png','/Media/mouth/eating.png','/Media/mouth/laugh.png','/Media/mouth/tongue.png'];
    var i= random(5);
    document.getElementById('mouth').src=''.concat(mouth[i]);
}
function neckRandom(){
    let neck=['','/Media/neck/default.png','/Media/neck/bend-backward.png','/Media/neck/bend-forward.png','/Media/neck/thick.png'];
    var i= random(4);
    document.getElementById('neck').src=''.concat(neck[i]);
}
function backgroundsRandom(){
    let backgrounds=['','/Media/backgrounds/blue50.png','/Media/backgrounds/blue60.png','/Media/backgrounds/blue70.png','/Media/backgrounds/darkblue30.png','/Media/backgrounds/darkblue50.png','/Media/backgrounds/darkblue70.png','/Media/backgrounds/green50.png','/Media/backgrounds/green60.png','/Media/backgrounds/green70.png','/Media/backgrounds/grey40.png','/Media/backgrounds/grey70.png','/Media/backgrounds/grey80.png'];
    var i= random(12);
    document.getElementById('background').src=''.concat(backgrounds[i]);
}
function accessoriesRandom(){
    let accessories=['','/Media/accessories/earings.png','/Media/accessories/flower.png','/Media/accessories/glasses.png','/Media/accessories/headphone.png'];
    var i= random(4);
    document.getElementById('accessories').src=''.concat(accessories[i]);
}
function random(num){
    i =  Math.floor(Math.random() * num) + 1;
    return i;
}
function generate(){
    hairRandom();
    earRandom();
    eyeRandom();
    legRandom();
    mouthRandom();
    neckRandom();
    accessoriesRandom();
    backgroundsRandom();
};