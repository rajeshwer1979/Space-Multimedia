// JavaScript Document
window.addEventListener("load",onLoad);



function onLoad(event){
	
p.loadScript([
"com.abc.model.Model",
"com.abc.controller.Controller"],"dev",onSuccess);

}

function onSuccess(){
	Model.getInstance().controller = new Controller();
}


