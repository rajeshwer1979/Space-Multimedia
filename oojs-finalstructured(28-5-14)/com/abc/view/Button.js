// JavaScript Document
function Button(){
	
	//private member
     var container;
	 var title;
	 var icon;
	 
	 //private settables
	 var _title = "Button";
	 var _icon = "assets/default.png";
	 var _bgColor = "#fc0";
	
	//private methods
	function initialize(){
		container = document.createElement("div");
		title = document.createElement("p");
		icon = document.createElement("img");
		icon.setAttribute("width",24);
		icon.setAttribute("height",24);
		var dummy = document.createElement("div");
		dummy.setAttribute("style","clear:both");
		container.appendChild(icon);
		container.appendChild(title);
		container.appendChild(dummy);
		//events
		container.addEventListener("mouseover",onOver);
		container.addEventListener("mouseout",onOut);
		container.addEventListener("click",onClick);
	}
		
	
	function style(){
		container.className = "button";
	}
	function update(){
		title.innerHTML = _title;
		icon.src = _icon;
		container.style.backgroundColor = _bgColor;
	}

  //call the core methods once
  
  
	initialize();
	style();
	update();

	
	//event responses
	function onOver(event){
		container.style.backgroundColor = "#333";
	}
	function onOut(event){
			container.style.backgroundColor = _bgColor;
	}
	function onClick(event){
	//send data or initialize bubbling phase
	var evt = document.createEvent("Event");
	evt.mydata = _title;
	evt.initEvent("button-click",true,true);
	container.dispatchEvent(evt);
	}
	
	//setters
    this.setTitle = function(k){
		_title = k;
		update();
	}
	this.setIcon = function(k){
		_icon = k;
		update();
	}
	this.setBgColor = function(k){
		_bgColor = k;
		update();
	}
	this.setStyle = function(k){
	container.setAttribute("style",k);
	}
	this.setScale = function(a,b){
		container.style.MozTransform = "scale("+a+","+b+")";
		container.style.webkitTransform = "scale("+a+","+b+")";
	}
	this.setTitleEnabled = function(k){
		title.style.display = k;
	}
	
	//public method
	
	this.render = function(k){
		k.appendChild(container);
	}
	
	
}
