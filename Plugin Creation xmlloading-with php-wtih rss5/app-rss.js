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
	url:"data/rss.php?id="+new Date().getTime(),
	dataType:"xml",
	success:onAjaxSuccess,
	failure:onAjaxFailure,
	});
}

function onAjaxSuccess(data){
	alert(data);
	var items = data.documentElement.getElementsByTagName("item");
	

	var arr = [];
	for(var i=0;i<items.length;i++){
		var obj = {};
		//obj.image = items[i].getElementsByTagName("image")[0].firstChild.nodeValue;
		obj.title = items[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		var desc = items[i].getElementsByTagName("description")[0].firstChild.nodeValue;
		var starr = desc.split("/>");
		var starr1 = starr[0].split('"');
		
		obj.description= starr[1];
		obj.image = starr1[1];
		arr.push(obj);
	}
	
	userlist.setData(arr);

	
}

function onAjaxFailure(){
	alert("fails");
}


