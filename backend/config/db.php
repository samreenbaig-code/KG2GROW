<?php

$host = "localhost";

$user = "root";

$pass = "";

$db = "clevercubs";


$conn = new mysqli(

    $host,
    $user,
    $pass,
    $db

);


if ($conn->connect_error) {

    die("Database connection failed");

}


session_start();

?>