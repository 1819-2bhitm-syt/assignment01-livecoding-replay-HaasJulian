// OBject Literal Syntax
const circle = {
    radius: 1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw1');
    }
};

circle.draw();

//Factories
function createCircle(radius){
    return{
        radius,
        draw1: function(){
            console.log('draw2');
        }
    };
}
const circle1 = createCircle(1);
circle1.draw1();


//Konstruktor
function Circle(radius){
    console.log('this', this);
    this.radius= radius;
    this.draw=function(){
      console.log('draw');
    };
}

const another = new Circle(1);

/* Wenn man new weglässt
function Circle1(radius){
    console.log('this', this);
    this.radius= radius;
    this.draw=function(){
        console.log('draw');
    };
}

const another1 =  Circle1(1);
*/
// Objekte Implementieren
let x={};
let name ='hallo';
let ok=false;
let total=1;

// Anzeigen der erstellenden Funktion
let name5='susi';
console.log('name = ', name5, name5.constructor);

