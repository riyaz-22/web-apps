<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_start();
    $username = $_SESSION['username'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    // Check if the user already exists in the database
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // If the user exists, update their details
        $stmt = $conn->prepare("UPDATE users SET age = ?, dob = ?, contact = ? WHERE username = ?");
        $stmt->bind_param("ssss", $age, $dob, $contact, $username);
    } else {
        // If the user does not exist, insert their details
        $stmt = $conn->prepare("INSERT INTO users (username, age, dob, contact) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $age, $dob, $contact);
    }

    if ($stmt->execute() === TRUE) {
        echo "Profile updated!";
    } else {
        echo "Error updating profile: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
