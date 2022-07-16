function neckBackward(){
    neckLoop();
    document.getElementById('neck').src="/Media/neck/bend-backward.png";
    document.getElementsByClassName('neckbuttons')[1].style.color='white';
    document.getElementsByClassName('neckbuttons')[1].style.border.color='white';
    document.getElementsByClassName('neckbuttons')[1].style.backgroundColor='rgb(115, 202, 202)';
}