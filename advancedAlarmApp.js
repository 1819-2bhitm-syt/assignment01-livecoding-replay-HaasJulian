// Tick //
let logTick = true;
let seconds = 10;

// Tick Tack //
let timer = setInterval(() => {
    if(logTick){
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick = !logTick;
}, 1000*seconds+100);

