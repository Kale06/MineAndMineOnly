<?php 
  require_once 'dbconnect.php';
  header('Content-Type: application/json');
  $response = array(); 

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $password = "";
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        $response['success'] = true;
        $response['message'] = "Credentials empty! Please try again.";
    } else {
        $sql = "SELECT * FROM user WHERE username = '$myusername' and passcode = '$mypassword'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_num_rows($result);      
        if($row > 0) {
            $response['success'] = true;
            $response['message'] = "Login successful.";
        } else {
            $response['success'] = false;
            $response['message'] = "Invalid password, try again.";
        }
    }
  } else {
    $response['success'] = false;
    $response['message'] = "Uh oh, Invalid request method!";
  }

  mysqli_close($conn);
  echo json_encode($response);
?>