function showTime(params) {
const    date =new Date()
const hrs=date.getHours()
const min=date.getMinutes()
const secs =date.getSeconds()

secHand=document.getElementsByClassName('second-hand');
    secHand[0].style.transform=`rotate(${((secs/60)*360)+90}deg)`;
if (secs==0) {
    secHand[0].style.display='none' 
}
else{
    secHand[0].style.display='block' 
}
a=(secs/60)*6;//to give it an increment in decimal

b=(min/60)*30//same thing
    minHand=document.getElementsByClassName('minute-hand');
    minHand[0].style.transform=`rotate(${((min/60)*360)+90+a}deg)`;

    hourHand=document.getElementsByClassName('hour-hand');
    hourHand[0].style.transform=`rotate(${(hrs/12)*360+90+b}deg)`;

};
setInterval(showTime,1000)


/*-----Effect-----*/
setInterval(() => {
    
box=document.querySelector('.app')
const boxShadow=['box-shadow: 20px 20px 40px blue;',
'   box-shadow: 20px 20px 40px red;',
'   box-shadow: 20px 20px 40px saddlebrown;',
'   box-shadow: 20px 20px 40px cornsilk;',
'   box-shadow: 20px 20px 40px tomato;',
'   box-shadow: 20px 20px 40px chartreuse;']
random=Math.floor(Math.random()*boxShadow.length)
box.style=boxShadow[random];
box.style.transition='2s'
}, 3000);

