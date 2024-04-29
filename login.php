<?php

$servername = "kocicka";
$username = 'username';
$password = 'password';
$dbname = 'loginadmindb';

$conn = new mysqli($servername, $usernamer, $password, $dbnamer);

//connection check
if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



//username and password from form
$usernamer = $_POST['username'];
$password = $_POST['password'];

//injection protection
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

$hashed_password = md5($password);

if($result->num_rows == 1) {
    //succesful
    echo "Login succesful";
} else {
    //failed
    echo "Login failed";
}

$conn->close();

?>