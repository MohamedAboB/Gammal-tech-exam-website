<?php
$email = $_SESSION["email"];

// Database connection parameters
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'gammal');
 
$result = "";
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $value = $_POST['value'];
    $rowId = $_POST['row_id'];

    // Escape any special characters to prevent SQL injection
    $value = $link->real_escape_string($value);
    $rowId = $link->real_escape_string($rowId);

    // Insert the value into the database
    $sql = "UPDATE users SET result = '$value' WHERE id = '$rowId'";

    if ($link->query($sql) === TRUE) {
        $_SESSION["email"] = $email;
        echo "Data inserted successfully";
        header("Location: ratingpage.php");
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

}
// Close the database connection
$link->close();
?>
