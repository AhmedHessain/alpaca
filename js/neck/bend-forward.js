function neckforward(){
    neckLoop();
    document.getElementById('neck').src="/Media/neck/bend-forward.png";
    document.getElementsByClassName('neckbuttons')[2].style.color='white';
    document.getElementsByClassName('neckbuttons')[2].style.border.color='white';
    document.getElementsByClassName('neckbuttons')[2].style.backgroundColor='rgb(115, 202, 202)';
}