function UpdateTime(){
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    return { seconds , minutes , hours };
}

function rotateSec(second){
    document.getElementById("sec").style.transform = `rotate(${second * 6 -90}deg)`
    // console.log(second);
}

function rotateMin(minute){
    document.getElementById("min").style.transform = `rotate(${minute * 6 -90}deg)`
    // console.log(minute);
}

function rotateHour(hour){
    if(hour > 12){
        document.getElementById("hour").style.transform = `rotate(${(hour - 12) * 60 -90}deg)`
    }
    else{
        document.getElementById("hour").style.transform = `rotate(${hour * 60 -90}deg)`
    }
}

function main(){
    const time = UpdateTime();
    const { seconds , minutes , hours } = time;
    rotateSec(seconds);
    rotateMin(minutes);
    rotateHour(hours);
}

main();
setInterval(main, 1000);