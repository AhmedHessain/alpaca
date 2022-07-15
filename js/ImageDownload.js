function downloadd(){
    var img0=document.getElementsByClassName('alpacaPic')[0];
    var img1=document.getElementsByClassName('alpacaPic')[1];
    var img2=document.getElementsByClassName('alpacaPic')[2];
    var img3=document.getElementsByClassName('alpacaPic')[3];
    var img4=document.getElementsByClassName('alpacaPic')[4];
    var img5=document.getElementsByClassName('alpacaPic')[5];
    var img6=document.getElementsByClassName('alpacaPic')[6];
    var img7=document.getElementsByClassName('alpacaPic')[7];
    var img8=document.getElementsByClassName('alpacaPic')[8];
    var cnx = document.getElementById('my_canvas').getContext('2d');
    cnx.drawImage(img0,0,0,img0.width,img0.height);
    cnx.drawImage(img1,0,0,img1.width,img1.height);
    cnx.drawImage(img5,0,0,img5.width,img5.height);
    cnx.drawImage(img7,0,0,img7.width,img7.height);
    cnx.drawImage(img8,0,0,img8.width,img8.height);
    cnx.drawImage(img6,0,0,img6.width,img6.height);
    cnx.drawImage(img3,0,0,img3.width,img3.height);
    cnx.drawImage(img4,0,0,img4.width,img4.height);
    cnx.drawImage(img2,0,0,img2.width,img2.height);
    var link = document.createElement('a');
    link.href=document.getElementById('my_canvas').toDataURL();
    link.download='Alpaca.png';
    link.click();
}