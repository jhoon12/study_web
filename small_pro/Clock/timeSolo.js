const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let date = new Date();
let Second =date.getSeconds();
let Minute = date.getMinutes();
let Hour = date.getHours();

// window.onload = function(){
//     minute.style.transform = `rotate(${++Minute*6}deg)`;
//     hour.style.transform = `rotate(${++Hour*15}deg)`;
//     second.style.transform = `rotate(${++Second*6}deg)`;
// }

// function main(){
//     setInterval(function(){
//         second.style.transform = `rotate(${++Second*6}deg)`;
//     }, 1000);
    
//     setInterval(function(){
//         minute.style.transform = `rotate(${++Minute*6}deg)`;
//     }, 60000);
    
//     setInterval(function(){
//         hour.style.transform = `rotate(${++Hour*15}deg)`;
//     }, 3600000);
// }


// main();