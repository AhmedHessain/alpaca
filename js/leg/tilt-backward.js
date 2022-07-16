function legTiltBackward(){
    legloop();
    document.getElementById('leg').src="/Media/leg/tilt-backward.png";
    document.getElementsByClassName('legbuttons')[4].style.color='white';
    document.getElementsByClassName('legbuttons')[4].style.border.color='white';
    document.getElementsByClassName('legbuttons')[4].style.backgroundColor='rgb(115, 202, 202)';
}