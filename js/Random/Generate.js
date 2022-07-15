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
function random(num){
    i =  Math.floor(Math.random() * num) + 1;
    return i;
}
function generate(){
    hairRandom();
    earRandom();
};