// JavaScript Document
window.addEventListener("load",onLoad);

var userlist;
var userdetails;


function onLoad(event){

window.applicationCache.addEventListener("checking",onChecking);
window.applicationCache.addEventListener("noupdate",onNoUpdate);
window.applicationCache.addEventListener("downloading",onDownloading);
window.applicationCache.addEventListener("progress",onProgress);
window.applicationCache.addEventListener("cached",onCached);
window.applicationCache.addEventListener("updateready",onUpdateReady);

p.loadScript(["com.abc.view.Button",
"com.abc.view.List",
"com.abc.view.ListItem"],"dev",onSuccess);

document.getElementById("userlist").addEventListener("button-click",onuserclick);

document.getElementById("userdetails").addEventListener("button-click",onBtnClick);
document.getElementById("userlist").addEventListener("transitionend",onuserend);
document.getElementById("userdetails").addEventListener("transitionend",onudend);

window.addEventListener("hashchange",onHash);

document.getElementById("userlist").addEventListener("datasend",onDataSend);
}

function onuserend(event){
	document.getElementById("userlist").style.webkitTransition="none";
}
function onudend(event){
		document.getElementById("userdetails").style.webkitTransition="none";
}

function onHash(){
	hashcode();
}


function hashcode(){
	var x = window.location.hash;
	
	var pp = x.split(";");
	
	if(pp[0] =="" || pp[0]=="#1"){
	
	document.getElementById("userdetails").style.webkitTransform = "translateX(100%)";
	
	
	document.getElementById("userlist").style.webkitTransform = "translateX(0%)";
	}else if(pp[0] =="#2"){
	
	document.getElementById("userlist").style.webkitTransform = "translateX(-100%)";
	
	
	document.getElementById("userdetails").style.webkitTransform = "translateX(0%)";
	}
	
	if(pp[1] != null){
		p.ajax({
		url:"data/getcustomer.php",
		data:"cid="+pp[1]+"&name=vivek",
		type:"POST",
		dataType:"json",
		success:function(data){
	userdetails.setData(data.items);	
		},
		failure:function(){
throw new Error("Userdetails data not loaded");
		} 
	});
	}	
}


function onDataSend(event){
	p.ajax({
		url:"data/getcustomer.php",
		data:"cid="+event.cid+"&name=vivek",
		type:"POST",
		dataType:"json",
		success:function(data){
				document.getElementById("userdetails").style.webkitTransition = "all 1s ease-in-out";
		document.getElementById("userlist").style.webkitTransition = "all 1s ease-in-out";
	
	document.getElementById("userdetails").style.webkitTransform = "translateX(0%)";
	window.location.hash = "2;"+event.cid;
	
	userdetails.setData(data.items);
	
		},
		failure:function(){
		}
		
		
		
	});
}


function onuserclick(event){
if(event.mydata == "Edit"){
	
/*
		document.getElementById("userlist").style.webkitTransition = "all 1s ease-in-out";
	document.getElementById("userlist").style.webkitTransform = "translateX(-100%)";
	
	document.getElementById("userdetails").style.webkitTransition = "all 1s ease-in-out";
	document.getElementById("userdetails").style.webkitTransform = "translateX(0%)";
	window.location.hash = "2";
	*/
}


}

function onBtnClick(event){
if(event.mydata == "Home"){
	document.getElementById("userdetails").style.webkitTransition = "all 1s ease-in-out";
	document.getElementById("userdetails").style.webkitTransform = "translateX(100%)";
	
		document.getElementById("userlist").style.webkitTransition = "all 1s ease-in-out";
	document.getElementById("userlist").style.webkitTransform = "translateX(0%)";
	window.location.hash = "1";
}

}



function onSuccess(){
	//alert(window.navigator.onLine);
//connect to server and get the data
userlist = new List();
userlist.render(document.getElementById("userlist"));

userdetails = new List();
userdetails.setButtonTitle("Home");
userdetails.render(document.getElementById("userdetails"));


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
	userlist.setData(JSON.parse(ldata).items);
}

hashcode();

}


function onAjaxSuccess(data){
window.localStorage.setItem("userlist",JSON.stringify(data));
userlist.setData(data.items);
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
