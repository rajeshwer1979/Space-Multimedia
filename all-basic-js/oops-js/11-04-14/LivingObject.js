// JavaScript Document
function LivingObject(){
	this.life= "yes";
}

function Human(){
	this.hands = 2;
}

function Man(){
	this.legs = 2;
}

Human.prototype = new LivingObject();
Man.prototype = new Human();