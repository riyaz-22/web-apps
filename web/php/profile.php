<?php


$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$mongodb = $mongoClient->web;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_start();
    $username = $_SESSION['username'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    $usersCollection = $mongodb->users;
    $filter = ['username' => $username];
    $update = ['$set' => ['age' => $age, 'dob' => $dob, 'contact' => $contact]];
    $options = ['upsert' => true]; 

    $result = $usersCollection->updateOne($filter, $update, $options);

    if ($result->getModifiedCount() === 1) {
        echo "Profile updated!";
    } else {
        echo "Error updating profile";
    }
}

?>
