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
	url:"data/data.xml?id="+new Date().getTime(),
	dataType:"xml",
	success:onAjaxSuccess,
	failure:onAjaxFailure,
	});
}

function onAjaxSuccess(data){
	
	var items = data.documentElement.getElementsByTagName("post1");

	var arr = [];
	for(var i=0;i<items.length;i++){
		var obj = {};
		obj.image = items[i].getElementsByTagName("image")[0].firstChild.nodeValue;
		obj.title = items[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		obj.description = items[i].getElementsByTagName("description")[0].firstChild.nodeValue;
		arr.push(obj);
	}
	
	userlist.setData(arr);

	
}

function onAjaxFailure(){
	alert("fails");
}


