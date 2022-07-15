function hairloop(){
    for(let i=0;i<7;i++)
    {
        document.getElementsByClassName('hairbuttons')[i].style.backgroundColor='transparent';
        document.getElementsByClassName('hairbuttons')[i].style.border.color='rgb(115, 202, 202)';
        document.getElementsByClassName('hairbuttons')[i].style.color='rgb(115, 202, 202)';
    }
}