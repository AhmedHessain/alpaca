function backgroundLoop(){
    for(let i =0;i<12;i++){
        document.getElementsByClassName('backgroundsbuttons')[i].style.color='rgb(115, 202, 202)';
        document.getElementsByClassName('backgroundsbuttons')[i].style.border.color='rgb(115, 202, 202)';
        document.getElementsByClassName('backgroundsbuttons')[i].style.backgroundColor='transparent';
    }
}