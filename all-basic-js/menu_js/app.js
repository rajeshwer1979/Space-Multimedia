// JavaScript Document
function dosomething(){

}

function overs(a,b){
a.style.backgroundColor = b;
a.style.color = "#FFF";
if(a.children.length == 1){
a.children[0].style.display = "block";
}

}



function outs(a){
a.style.backgroundColor = "#FFF";
a.style.color = "#333";
if(a.children.length>0){
a.children[0].style.display = "none";
}
}

function clicks(a){
	alert("ok");
}

