const stopwatchDisplayEl = document.getElementById("stopwatch-display");
const startb = document.getElementById("start");
const pauseb = document.getElementById("pause");
const playb = document.getElementById("play");
const lapb = document.getElementById("lap");
const resetb = document.getElementById("reset");
const savedLaps = document.getElementById("saved-laps");

// let secondsD = document.getElementById("seconds").value;
// let minutesD = document.getElementById("minutes").value;
// let hoursD = document.getElementById("hours").value;
let centisecondsD = 0;
let secondsD = 0;
let minutesD = 0;
let hoursD = 0;
let csecs, secs, mins, hrs;
function timedisplay(){
    csecs = centisecondsD < 10 ? "0" + centisecondsD : centisecondsD;
    secs = secondsD < 10 ? "0" + secondsD : secondsD ;
    mins = minutesD < 10 ? "0" + minutesD : minutesD ;
    hrs = hoursD < 10 ? "0" + hoursD : hoursD ;
    stopwatchDisplayEl.textContent = hrs + ":" + mins + ":" + secs + ":" + csecs;
};
timedisplay();
function stopwatch(){
    let display = setInterval(function(){
        if(!isPaused){
            centisecondsD++;
            if(centisecondsD===100){
                centisecondsD=0;
                secondsD=secondsD+1;
            }
            if(secondsD===60){
                secondsD=0;
                minutesD=minutesD+1;
            };
            if(minutesD===60){
                minutesD=0;
                hoursD=hoursD+1;
            };
            timedisplay();
        }
    },10)
}

startb.addEventListener("click",function(){
    isPaused=false;
    stopwatch();
    startb.style.display = "none";
    pauseb.style.display = "inline-block";
    lapb.style.display = "inline-block";
    resetb.style.display = "inline-block";
    }
)
pauseb.addEventListener("click",function(){
    console.log("pause");
    isPaused=true;
    pauseb.style.display = "none";
    playb.style.display = "inline-block";
    }
)
playb.addEventListener("click",function(){
    isPaused=false;
    playb.style.display = "none";
    pauseb.style.display = "inline-block";

})
for(let lap=0; lap<lapb.length; lap++){
    lapb[lap].addEventListener("click", function(){
        let output=0;
        output += '<p>stopwatchDisplayEl.textContent</p>';
        console.log(output)
        savedLaps.innerHtml = output;
    })
}
    // console.log(stopwatchDisplayEl.textContent)
    // savedLaps.textContent.stopwatchDisplayEl;

resetb.addEventListener("click", function(){
    location.reload();
})

// function stopwatch(){
//     begintimer++;
//     stopwatchDisplayEl.textContent = begintimer;
//     let timerInterval=setTimeout(function(){
        // if(seconds===60){
        //     seconds=0;
        //     minutes=minutes+1
        // }
        // if(minutes===60){
        //     minutes=0
        //     hours=hours+1
        // }
//     },1000)
// }