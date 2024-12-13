<?php
mysql_connect("localhost","root","");
mysql_select_db("classicmodels");


$q = mysql_query("SELECT * FROM customers");

$str = '{"items":[';
$arr = array();
while($row = mysql_fetch_object($q)){
	
	$str1 = '{"id":"'.$row->customerNumber.'","title":"'.$row->customerName.'","description":"'.$row->contactLastName.'"}';
	array_push($arr,$str1);

}

$str2 = implode(",",$arr);

$str .= $str2;

$str .= "]}";

echo $str;
?>