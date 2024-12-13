<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script>
function deletes(k){
	k.parentNode.parentNode.style.display = "none";
}

function edits(k){
	k.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.color = "#00f";
	k.parentNode.parentNode.getElementsByTagName("h1")[0].setAttribute("contenteditable","true");
}

</script>

<style>
.post{
	border:1px solid #e2e2e2;
	padding:4px;
	margin:4px;
}
.post h1{
	margin:0px;
	line-height:35px;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:20px;
	
	color:#c00;
	
}
.post p{
	margin:0px;
	line-height:16px;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:14px;
	margin-bottom:20px;
	
}
.post div h3{
	float:left;
	padding-left:10px;
	padding-right:10px;
	margin:0px;
	line-height:30px;
	background-color:#c00;
	color:#FFF;
	font-size:12px;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:normal;
	margin-right:5px;
	cursor:pointer;
	}


.post div h3:hover{
	
	background-color:#369;
	
	}
</style>
</head>

<body>



<?php
for($i=0;$i<10;$i++){
?>
<div class="post">
<h1>Some Important Title <?php echo $i ?></h1>
<p>Some New Here, something happened,.....</p>
<div>
<h3 onclick="edits(this)">Edit</h3>
<h3 onclick="deletes(this)">Delete</h3>
<div style="clear:both"></div>
</div>
</div>


<?php
}
?>

</body>
</html>
