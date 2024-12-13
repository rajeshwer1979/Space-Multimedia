// JavaScript Document
function Test(){
	this.height =100;
}


Test.prototype.calc = function(x,y){
return x+y;
}


Test.prototype.static = function(a){
return "hello"+a;
}

Test.prototype.overload = function(){
	console.log(arguments[0]);
}


Test.prototype.abcd = 1100;

