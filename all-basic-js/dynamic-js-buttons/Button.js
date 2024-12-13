function Button(){
	//construct object first
	this.container = document.createElement("div");
	this.title = document.createElement("p");
	this.title.innerHTML = "Button";
	this.container.appendChild(this.title);
	//document.body.appendChild(this.container);
	
}


Button.prototype.setTitle = function(k){
this.title.innerHTML = k;	
}

Button.prototype.setColor = function(k){
this.title.style.color = k;
}

Button.prototype.paint = function(k){
	k.appendChild(this.container);
}


