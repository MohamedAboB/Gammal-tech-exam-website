<?php

session_start();

if(isset($_SESSION['id'])) {
  $id = $_SESSION['id'];
  echo "user is : $id "; 
}



// Fetch more user-related data from the database
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'gammal');

/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql = "SELECT result FROM users WHERE id = '$id'"; // Assuming 'id' is the primary key column
$data = $link->query($sql);
$result = "";

if ($data->num_rows > 0) {
  $row = $data->fetch_assoc();
  $result = $row["result"];
} else {
  echo "0 results";
}

if(isset($_POST['submit'])){
  header("Location: ../home(logged in)/");

} 

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exam</title>
    <link rel="shortcut icon" href="../media/gammal_logo4.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css" />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  </head>
  <body>
    <header>
      <div class="logo1">
        <img src="2.png" />
      </div>
    </header>
    <section class="Rdisplaying">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div id="result">
            <h1>Result</h1>
            <div class="line"></div>
             <div class="labels">
                <div class="flex">
                  <input type = "text" class = "l1" disabled = "disabled" value = "<?php echo $result; ?>">
                  <p>Of</p>
                  <input type = "text" class= "l1" disabled = "disabled" value = "6">
                </div>
                <div class="linfo">
                  <input type = "text" disabled = "disabled" value = "STATUS">
                </div>
                <div class="linfo">
                  <input type = "text" disabled = "disabled" value = "PERCENTAGE">
                </div>
                
                <div class="btn">
                  <button name="submit" type="submit" value="Submit"> <i class='bx bxs-home'></i> Home</button>        
                </div>
            </div>
        </div>
    </form>
    </section>

    <footer class="footer">
        <div class="footerp1">
          <p>&copy; 2024 Gammal Tech</p>
        </div>
      </footer>
  
      <script src="script.js"></script>
    </body>
  </html>
  