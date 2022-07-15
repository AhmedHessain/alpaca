function loop(){
    for(let i=0;i<8;i++)
    {
        document.getElementsByClassName('buttons')[i].style.backgroundColor='transparent';
        document.getElementsByClassName('buttons')[i].style.border.color='rgb(115, 202, 202)';
        document.getElementsByClassName('buttons')[i].style.color='rgb(115, 202, 202)';
        document.getElementsByClassName('items')[i].style.display='none';
    }
}
