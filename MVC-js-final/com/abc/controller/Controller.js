// JavaScript Document
function Controller(){
	//cache code if manifest is declared
	cacheCode();
	
	// load the view components
	p.loadScript([
	"com.abc.view.Button",
	"com.abc.view.ListItem",
	"com.abc.view.List",
	],"dev",onSuccess);
	
	
	//when scripts are loaded
function onSuccess(){


Model.getInstance().userlist = new List();
Model.getInstance().userlist.render(p.get("userlist"));

Model.getInstance().userdetails = new List();
Model.getInstance().userdetails.setButtonTitle("Home");
Model.getInstance().userdetails.render(p.get("userdetails"));


if(window.navigator.onLine){
	
p.ajax({
	//url:"data/data.JSON?id="+new Date().getTime(),
	url:"data/datajson.php?id="+new Date().getTime(),
	dataType:"json",
	success:onAjaxSuccess,
	failure:onAjaxFailure,
	});
}else{
	
	var ldata = window.localStorage.getItem("userlist");
	if(ldata != ""){
	Model.getInstance().userlist.setData(JSON.parse(ldata).items);
	}else{
		alert("no local data available");
	}
}
toplevelevents();
hashcode();
}



function onuserend(event){
	p.get("userlist").style.webkitTransition="none";
}
function onudend(event){
		p.get("userdetails").style.webkitTransition="none";
}

function onHash(){
	hashcode();
}






function hashcode(){
	var x = window.location.hash;
	
	var pp = x.split(";");
	
	if(pp[0] =="" || pp[0]=="#1"){
	
	p.get("userdetails").style.webkitTransform = "translateX(100%)";
	
	
	p.get("userlist").style.webkitTransform = "translateX(0%)";
	}else if(pp[0] =="#2"){
	
	p.get("userlist").style.webkitTransform = "translateX(-100%)";
	
	
	p.get("userdetails").style.webkitTransform = "translateX(0%)";
	}
	
	
	
	if(pp[1] != null){
		p.ajax({
		url:"data/getcustomer.php",
		data:"cid="+pp[1]+"&name=vivek",
		type:"POST",
		dataType:"json",
		success:function(data){
			Model.getInstance().customerdetails = data;
	Model.getInstance().userdetails.setData(Model.getInstance().customerdetails.items);
	
		},
		failure:function(){
		}
	});
	}
}


function onuserclick(event){
if(event.mydata == "Edit"){
p.ajax({
		url:"data/getcustomer.php",
		data:"cid="+Model.getInstance().cid+"&name=vivek",
		type:"POST",
		dataType:"json",
		success:function(data){
			Model.getInstance().customerdetails = data;
				p.get("userdetails").style.webkitTransition = "all 1s ease-in-out";
		p.get("userlist").style.webkitTransition = "all 1s ease-in-out";
	
	p.get("userdetails").style.webkitTransform = "translateX(0%)";
	window.location.hash = "2;"+Model.getInstance().cid;
	
	Model.getInstance().userdetails.setData(Model.getInstance().customerdetails.items);
		},
		failure:function(){
		}
		
	});
}
}



// on home click

function onBtnClick(event){
if(event.mydata == "Home"){
	p.get("userdetails").style.webkitTransition = "all 1s ease-in-out";
	p.get("userdetails").style.webkitTransform = "translateX(100%)";
	
		p.get("userlist").style.webkitTransition = "all 1s ease-in-out";
	p.get("userlist").style.webkitTransform = "translateX(0%)";
	window.location.hash = "1";
}

}


function onAjaxSuccess(data){
	Model.getInstance().customers = data;
window.localStorage.setItem("userlist",JSON.stringify(Model.getInstance().customers));
Model.getInstance().userlist.setData(Model.getInstance().customers.items);
}

function onAjaxFailure(){
	alert("Connection error, could not parse file.");
}





function onChecking(event){
	//alert("checking");
}
function onNoUpdate(event){
	//alert("noupdate");
}

function onDownloading(event){
	//alert("dowloading");
}

function onProgress(event){
	//alert("progress");
}
function onCached(event){
	//alert("cached");
}

function onUpdateReady(event){
	window.applicationCache.swapCache();
}


function cacheCode(){
	window.applicationCache.addEventListener("checking",onChecking);
window.applicationCache.addEventListener("noupdate",onNoUpdate);
window.applicationCache.addEventListener("downloading",onDownloading);
window.applicationCache.addEventListener("progress",onProgress);
window.applicationCache.addEventListener("cached",onCached);
window.applicationCache.addEventListener("updateready",onUpdateReady);
}


function toplevelevents(){
p.get("userlist").addEventListener("button-click",onuserclick);
p.get("userdetails").addEventListener("button-click",onBtnClick);
p.get("userlist").addEventListener("transitionend",onuserend);
p.get("userdetails").addEventListener("transitionend",onudend);
window.addEventListener("hashchange",onHash);

}



	
	
}
