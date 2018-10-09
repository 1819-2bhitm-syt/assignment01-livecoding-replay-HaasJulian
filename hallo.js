console.log("ich bin die hallo.js - Datei");

let data ={

    name: "Welt"
};

module.exports = data;


let data1 ={
    name:function(){
        return "Welt";
    }

};
module.exports = data1;

let data2={
    name: function(){
        return "Welt";
}
};

let data4={
  name: function(prefix){
      return prefix+"Welt";
  }

};


