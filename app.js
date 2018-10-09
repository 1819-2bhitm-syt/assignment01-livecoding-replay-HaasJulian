let hallo = function(who){
    console.log("Hallo " + who());
};


let getName = function(){

    return "Welt";
};

hallo(getName);

hallo(function(){

    return "node.js";
});


let hi= function(w){
    w("Hallo Welt! ");
};

hi (function(abc){
    console.log(abc);
});