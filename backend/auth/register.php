<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users(name,email,password)
VALUES('$name','$email','$password')";

if(mysqli_query($conn,$sql)){

    echo json_encode([
        "success"=>true,
        "message"=>"Account created"
    ]);

}else{

    echo json_encode([
        "success"=>false,
        "message"=>"Register failed"
    ]);

}