<?php
header("Content-type:text/xml");
mysql_connect("localhost","root","");
mysql_select_db("classicmodels");


$q = mysql_query("SELECT * FROM customers LIMIT 0,15");

$str = "<customers>";
while($row = mysql_fetch_object($q)){
	$str .= "<node1>";
	$str .= "<title><![CDATA[".$row->customerName."]]></title>";
	$str .= "<description>".$row->contactLastName."</description>";
	$str .= "</node1>";
}

$str .= "</customers>";

echo $str;
?>