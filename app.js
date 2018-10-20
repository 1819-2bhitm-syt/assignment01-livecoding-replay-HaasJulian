let hallo = function(str){
    str="Hallo + "+str;
};

let welt="Welt";
hallo(welt);
console.log(welt);


//Objekte

let halloObject= function(obj){
  obj.name="Halo "+obj.name;
};

let o ={
   name: "Welt"
};

halloObject(o);
console.log(o);

//Objekte2

let halloObject1= function(obj){
    obj=null;
};

let o1 ={
    name: "Welt"
};

halloObject(o1);
console.log(o1);

//Beispiele
let obj2={value: 10};

function increase(obj2){
    obj2.value++;
}

increase(obj2);
console.log(obj2)