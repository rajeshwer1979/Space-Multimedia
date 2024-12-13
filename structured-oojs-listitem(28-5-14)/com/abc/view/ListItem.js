function ListItem(){
	var container;
	var imageContainer;
	var contentContainer;
	var buttonContainer;
	var title;
	var description;
	var replyButton;
	var editButton;
	var me = this;
	
	
	var tempImage;
	var preloader;
	
	var first = true;
	
	//private settables
	var _title = "Title";
	var _description = "Description";
	var _image = "images/1.jpg";
	var _temp;
	
	function initialize(){
		container = document.createElement("div");
		imageContainer = document.createElement("div");
		contentContainer = document.createElement("div");
		buttonContainer = document.createElement("div");
		title = document.createElement("h1");
		description = document.createElement("p");
		contentContainer.appendChild(title);
		contentContainer.appendChild(description);
		contentContainer.appendChild(buttonContainer);
		container.appendChild(imageContainer);
	    container.appendChild(contentContainer);
		
		
		replyButton = new Button();
		editButton = new Button();
		
		
		replyButton.setStyle("float:right");
		editButton.setStyle("float:right");
		
		replyButton.setTitle("Reply");
		replyButton.setBgColor("#f00");
		editButton.setBgColor("#369");
		editButton.setTitle("Edit");
		
		
		replyButton.render(buttonContainer);
		editButton.render(buttonContainer);
		var dummy = document.createElement("div");
		dummy.setAttribute("style","clear:both");
		container.appendChild(dummy);
		
		
		preloader = document.createElement("img");
		preloader.src = "assets/preloader.gif";
		preloader.setAttribute("width",20);
		imageContainer.appendChild(preloader);
		
		 
		window.addEventListener("resize",onResize);
		
		//for loading
		tempImage = document.createElement("img");
		
		if(window.navigator.platform.toLowerCase() == "win32"){
				container.addEventListener("button-click",ff1);
		container.addEventListener("mouseover",onOver);
		container.addEventListener("mouseout",onOut);
		container.addEventListener("click",onClick);
		}else{
			container.addEventListener("touchstart",onTouchStart);
			container.addEventListener("touchend",onTouchEnd);
			
		}
	
	}
	
	function onTouchStart(event){
			event.currentTarget.style.backgroundColor = "rgba(7,137,233,0.15)";
	}
	function onTouchEnd(event){
			event.currentTarget.style.backgroundColor = "rgba(7,137,233,1)";
			title.style.color = "#FFF";
			description.style.color = "#FFF";
		container.removeEventListener("touchstart",onTouchStart);
		container.removeEventListener("touchend",onTouchEnd);

		var evt = document.createEvent("Event");
		evt.initEvent("list-item-click",true,true);
		evt.xyz = me;
		container.dispatchEvent(evt);
	}
	function onOver(event){
		event.currentTarget.style.backgroundColor = "rgba(7,137,233,0.15)";
	}
	function onOut(event){
		event.currentTarget.style.backgroundColor = "#ffffff";
	}
	function onClick(event){
			event.currentTarget.style.backgroundColor = "rgba(7,137,233,1)";
			title.style.color = "#FFF";
			description.style.color = "#FFF";
		container.removeEventListener("mouseover",onOver);
		container.removeEventListener("mouseout",onOut);
		container.removeEventListener("click",onClick);
		
		var evt = document.createEvent("Event");
		evt.initEvent("list-item-click",true,true);
		evt.xyz = me;
		container.dispatchEvent(evt);
		
	}
	
	function ff1(event){
		
	
	if(event.mydata == "Edit"){
		title.style.color = "#f00";
	}else{
	   title.style.color = "#0f0";
	}
	event.stopPropagation();

	
	}
	
	function style(){
		container.className = "list-item";
		imageContainer.className = "image";
		contentContainer.className = "content";
		
	}
	function update(){
		title.innerHTML = _title;
		description.innerHTML = _description;
		if(first == true){
			tempImage.src= _image;
		preloader.style.display = "block";
		tempImage.onload = function(){
			preloader.style.display = "none";
			imageContainer.style.backgroundImage = "url("+_image+")";
		}
		first = false;
		}
		
	}
	
	//call once
	initialize();
	style();
	update();
	
	
	this.normal = function(){
			container.style.backgroundColor = "#FFFFFF";
			title.style.color = "#333";
			description.style.color = "#666";
		container.addEventListener("mouseover",onOver);
		container.addEventListener("mouseout",onOut);
		container.addEventListener("click",onClick);
	}
	
	this.setTitle = function(k){
		_title = k;
		update();
	}
	
	this.setDescription = function(k){
		_description = k;
		update();
	}
	
	this.setImage = function(k){
		if(k != _image){
		_image = k;
		tempImage.src= _image;
		preloader.style.display = "block";
		tempImage.onload = function(){
			preloader.style.display = "none";
			imageContainer.style.backgroundImage = "url("+_image+")";
		}
		tempImage.onerror = function(){
			preloader.style.display = "none";
			//imageContainer.style.backgroundImage = "url("+_image+")";
		}
		}
		
	}
	
	
	
	function onResize(event){
		contentContainer.style.width = (container.clientWidth-imageContainer.clientWidth-30)+"px";
	}
	
	this.updateSize = function(){
			contentContainer.style.width = (container.clientWidth-imageContainer.clientWidth-30)+"px";
	}
	
	this.render = function(k){
		
		k.appendChild(container);
		contentContainer.style.width = (container.clientWidth-imageContainer.clientWidth-30)+"px";
	}
	
	
}

