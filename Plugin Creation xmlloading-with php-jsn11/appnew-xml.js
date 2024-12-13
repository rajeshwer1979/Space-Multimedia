// JavaScript Document
window.addEventListener("load",onLoad);

var userlist;


function onLoad(event){

p.loadScript(["com.abc.view.Button",
"com.abc.view.List",
"com.abc.view.ListItem"],"dev",onSuccess);

}

function onSuccess(){
//connect to server and get the data
userlist = new List();
userlist.render(document.body);
p.ajax({
	url:"data/data.php?id="+new Date().getTime(),
	dataType:"xml",
	success:onAjaxSuccess,
	failure:onAjaxFailure,
	});
}

function onAjaxSuccess(data){
	

var arr = [];
var items = data.documentElement.getElementsByTagName("post1");
for(var i=0;i<items.length;i++){
	var obj = {};
	obj.title = items[i].getElementsByTagName("title")[0].firstChild.nodeValue;
	obj.description = items[i].getElementsByTagName("description")[0].firstChild.nodeValue;
	arr.push(obj);
}

userlist.setData(arr);

}

function onAjaxFailure(){
	alert("fails");
}


