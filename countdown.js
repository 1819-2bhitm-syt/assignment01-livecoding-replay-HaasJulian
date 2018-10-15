
// Tick //
let counter = 10;


let logTick = true;
let seconds = 10;

// Tick Tack //
let timer = setInterval(() => {
    console.log(counter);
    if(logTick){
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick = !logTick;
    counter = counter-1;
}, 1000*seconds+100);

