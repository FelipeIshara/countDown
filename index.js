let countDownElement = document.querySelector("#countdown")
let startingMinutes;
let time = startingMinutes * 60;
let timer;
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")

//covert time

convertTime()



console.log(document.getElementById("startingMin").value)
document.getElementById("startingMin").onchange = function(){;
    time = document.getElementById("startingMin").value * 60;
    convertTime()
}




















//start function
startBtn.onclick = function(){
    setIntervalStatus(true);
    this.disabled = true;
    pauseBtn.disabled = false;
}
//reset
document.querySelector("#reset").onclick = function(){
    setIntervalStatus(false)
    time = document.getElementById("startingMin").value * 60;
    if(!time){
        time = 25 * 60;
    }
    setIntervalStatus(true)
    pauseBtn.disabled = false;
    startBtn.disabled = true;
}
//pause
pauseBtn.onclick = function(){
    setIntervalStatus(false)
    this.disabled = true;
    startBtn.disabled = false;
}



function convertTime(){
    if(!time){
        time = 25 * 60;
    }
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    countDownElement.innerHTML = `${minutes}:${seconds}`
}



function setIntervalStatus(status){
    
    if(status){
    timer = setInterval(countdown, 1000);
    }
    else{
        clearInterval(timer)
    }
}



function countdown(){
    if(time>0){
        time--;
        convertTime()
    } else {
        setIntervalStatus(false);
        alert("alarm");
        time = startingMinutes * 60;
        convertTime()
        startBtn.disabled = false;
    }
}