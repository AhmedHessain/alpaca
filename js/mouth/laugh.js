function mouthLaugh(){
    mouthLoop();
    document.getElementById('mouth').src="/Media/mouth/laugh.png";
    document.getElementsByClassName('mouthbuttons')[3].style.color='white';
    document.getElementsByClassName('mouthbuttons')[3].style.border.color='white';
    document.getElementsByClassName('mouthbuttons')[3].style.backgroundColor='rgb(115, 202, 202)';
}