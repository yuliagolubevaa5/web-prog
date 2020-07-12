<?php

$connection = mysqli_connect('localhost', 'root', '', 'mysql');

if($connection == false){
    echo '$connection = Нет; ';
    exit();
} else {
    echo '$connection = Да; ';
}


if(!empty($_POST['name'])){
    $name = $_POST['tname'];
} else echo 'error';
    
if(!empty($_POST['surname'])){
    $surname = $_POST['surname'];
}
if(!empty($_POST['email'])){
    $email = $_POST['email'];
}
if(!empty($_POST['password'])){
    $password = $_POST['password'];
}


echo($fname);
print($name);
print($surname);

$sql = "INSERT INTO `mytable`(`name`, `surname`, `email`, `password`) VALUES ('$firstname','$lastname','$email', '$password')";

$result = mysqli_query($connection, $sql);

if ($result == false) {
    print("Произошла ошибка при выполнении запроса");
}