<?php
// Database connection parameters
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'gammal');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Process the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the form
    $q1 = $_POST["q1"];
    $q2 = $_POST["q2"];
    $q3 = $_POST["q3"];
    $q4 = $_POST["q4"];
    $q5 = $_POST["q5"];
    $examRating = $_POST["examRating"];

    // Insert data into the feedback table
    $sql = "INSERT INTO feedback (q1, q2, q3, q4, q5, examRating) 
            VALUES ('$q1', '$q2', '$q3', '$q4', '$q5', '$examRating')";

if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
    header("Location: result.php");

} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

}

// Close the database connection
$link->close();
?>
