<?php
header("Content-type:text/xml");
echo file_get_contents("http://ibnlive.in.com/ibnrss/top.xml");
?>