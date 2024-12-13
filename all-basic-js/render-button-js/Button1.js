// JavaScript Document

function Button1(){
	var container = document.createElement("div");
	var title = document.createElement("p");
	title.innerHTML = "Button";
	container.appendChild(title);

	this.setTitle = function(k){
		title.innerHTML = k;
	}
	this.render = function(k){
		k.appendChild(container);
	}
	
}


