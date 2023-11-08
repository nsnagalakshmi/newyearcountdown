const countdown=document.getElementById('countdown');
const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds')
// const year=document.getElementById('year');
const presentyear=new Date().getFullYear();
const nextyear=presentyear+1;
console.log(nextyear)
let newyear=new Date(`January 01 ${nextyear} 00:00:00 `);
function update()
{
    let presenttime=new Date();
    let newtime=newyear-presenttime;

    let d=Math.floor(newtime/1000/60/60/24);
    let h=Math.floor(newtime/1000/60/60)%24;
    let m=Math.floor(newtime/1000/60)%60;
    let s=Math.floor(newtime/1000)%60;

    days.innerHTML=d < 10 ? "0" +d:d;
    hours.innerHTML=h < 10 ? "0" +h:h;
    minutes.innerHTML=m <10 ? "0" +m:m;
    seconds.innerHTML=s < 10 ? "0" +s:s;
}
setInterval(update,1000);