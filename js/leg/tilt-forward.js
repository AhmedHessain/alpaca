function legTiltForward(){
    legloop();
    document.getElementById('leg').src="/Media/leg/tilt-forward.png";
    document.getElementsByClassName('legbuttons')[5].style.color='white';
    document.getElementsByClassName('legbuttons')[5].style.border.color='white';
    document.getElementsByClassName('legbuttons')[5].style.backgroundColor='rgb(115, 202, 202)';
}