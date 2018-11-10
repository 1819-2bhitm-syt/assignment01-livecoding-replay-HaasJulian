function Person(vorname, nachname){
    this.vorname=vorname;
    this.nachname= nachname;
}


Person.prototype.getName=function(){
  return this.vorname+" "+this.nachname
};

let hans = new Person("Hans", "Müller");
console.log(hans.getName());

//Objektorientierung

function Person2(vorname2, nachname2){
    this.vorname2=vorname2;
    this.nachname2= nachname2;
}

Person2.prototype.getName=function(){
    return this.vorname2+" "+this.nachname2
};

let hans2 = new Person2("Hans", "Müller");
//console.log(hans2.getName());
let p={
    vorname:"Erik",
    nachname:"Müller"
};
p.__proto__=Person2.prototype;

console.log(p.getName());


