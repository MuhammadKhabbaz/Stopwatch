const setTime = document.getElementById("set-time")
const timeEl = document.getElementById("time-left");
const userInpt = document.querySelector("input");
const blinkEL = document.getElementById("blink")
//buttons
const startb = document.getElementById("start");
const stopb = document.getElementById("stop");
const resetb = document.getElementById("reset");
const playb = document.getElementById("play")


function countdown(begintime){
    timeEl.textContent = begintime + " seconds left";
    let timerInterval = setInterval(function(){
        if(!isPaused){
            begintime--;
            timeEl.textContent = begintime + " seconds left";
            if(begintime < 10){
                blinkEL.className="blink-bg";
            }
            if(begintime <= 0) {
                clearInterval(timerInterval); // Stops execution of action at set interval
                setTime.style.display = "block";
                startb.style.display = "inline-block";
                stopb.style.display = "none"
                blinkEL.className="red";
            }
        }
    }, 1000);
};

startb.addEventListener("click",function(){
    userInpt.value;
    console.log(userInpt.value);
    if (userInpt.value == ""){
            timeEl.textContent = "enter a number"
            blinkEL.className="red";
            stopb.style.display = "none";
            startb.style.display = "none";
            resetb.style.display = "inline-block";
            setTime.style.display = "none"
            return
        }
    blinkEL.classList.remove("red");
    countdown(userInpt.value);
    setTime.style.display = "none";
    startb.style.display = "none";
    stopb.style.display = "inline-block";
    resetb.style.display = "inline-block";
    isPaused=false;
});

stopb.addEventListener("click", function(){
    console.log("stop");
    isPaused = true;
    playb.style.display = "inline-block";
    blinkEL.style.animationPlayState= "paused";
})

playb.addEventListener("click", function(){
    isPaused = false;
    playb.style.display = "none";
    blinkEL.style.animationPlayState= "running";
})

resetb.addEventListener("click", function(){
    location.reload();
})
