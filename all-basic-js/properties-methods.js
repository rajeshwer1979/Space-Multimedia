function LivingObject(){ // constructor or classname is LivingObject
this.height = 100;  //Global var and property is height
}

function Sleep(){// constructor or classname child of LivingObject
this.sleeping = 2; // Global var
}
Sleep.prototype = new LivingObject();  // Inheritance mehtod constructer


LivingObject.prototype.Human = function(){  //mehtod constructer
   var eat = 10; // Local Var
  console.log(eat);
document.write("hello" + eat + "<br>");
}

LivingObject.prototype.weight = 150; // prototype calling