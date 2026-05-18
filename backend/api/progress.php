<?php

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$game = $data->game;
$score = $data->score;

$sql = "INSERT INTO progress(email, game, score)
VALUES('$email','$game','$score')";

if(mysqli_query($conn,$sql)){
  echo json_encode(["message"=>"saved"]);
}else{
  echo json_encode(["message"=>"error"]);
}

?>