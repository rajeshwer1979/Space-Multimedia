<?php
mysql_connect("localhost","root","");
mysql_select_db("classicmodels");

$p = $_POST['cid'];


$q = mysql_query("SELECT * FROM customers WHERE customerNumber = '$p'");


$row = mysql_fetch_object($q);



echo '{"items":[{"title":"'.$row->phone.'","description":"'.$row->addressLine1.'","id":"'.$p.'"}]}';
?>