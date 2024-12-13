//data bound driven by model
function List(){
	var container;
	var header;
	var inner;
	var items=[];
	var selectedItem;
	var someButton;
	var display = true;
	function initialize(){
		container = document.createElement("div");
		header = document.createElement("div");
		inner = document.createElement("div");
		container.appendChild(header);
		container.appendChild(inner);
		someButton = new Button();
		someButton.setStyle("float:right");
		someButton.setScale(0.75,0.75);
		someButton.setIcon("assets/ands.png");
		someButton.setTitleEnabled("none");
		someButton.render(header);
		container.addEventListener("list-item-click",onClick);
		header.addEventListener("button-click",onBtnClick);
	}
	
	function onBtnClick(event){
	//alert("do something");
	//event.stopPropagation();
	}
	
	function onClick(event){
	if(selectedItem != null){
		selectedItem.normal();
	}
	selectedItem = event.xyz;
	}
	
	function style(){
		container.className = "list";
		header.className = "list-header";
		inner.className = "list-inner";
	}
	function update(){
	}
	
	initialize();
	style();
	update();
	
	this.setData = function(arr){
		items =[];
	inner.innerHTML = "";
		
		for(var i=0;i<arr.length;i++){
				var l = new ListItem();
			if(arr[i].title != undefined){
			l.setTitle(arr[i].title);
			}
			
			if(arr[i].description != undefined){
			l.setDescription(arr[i].description);
			}
			
			if(arr[i].image != undefined){
			l.setImage(arr[i].image);
			}
			
			if(arr[i].id != undefined){
			l.setID(arr[i].id);
			}
			
			l.render(inner);
			items.push(l);
			
		}
		
		
	}
	
	function updateSizes(){
		for(var i=0;i<items.length;i++){
			items[i].updateSize();
		}
	}
	
	this.setButtonTitle = function(k){
		someButton.setTitle(k);
	}
	
	this.render = function(k){
		k.appendChild(container);
		updateSizes();
	}
	
	
	
	
}
