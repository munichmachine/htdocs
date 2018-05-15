<?php
//change these values to whatever your own database server requires
$link = mysql_connect('knivedalen.mysql.domeneshop.no', 'knivedalen', 'wzRge2Fg'); //Connects to the database at "localhost"
if(!$link) {
    //halt execution if cannot connect
    die("Cannot connect to the database!");
}
mysql_select_db('knivedalen', $link); //Assuming you have a database named "test" set up
?>