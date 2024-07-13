<?php 
  require_once 'dbconnect.php';
  header('Content-Type: application/json');
  $response = array(); 

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $password = $email = "";
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $confirmpassword = trim($_POST['confirmpassword']);
    $email = trim($_POST['email']);

    if (empty($username) || empty($password) || empty($confirmpassword) || empty($email)) {
        $response['success'] = false;
        $response['message'] = "Credentials empty! Please try again.";
    } else if ($password != $confirmpassword) {
        $response['success'] = false;
        $response['message'] = "Password and Confirm Password is not the same!";
    } else {
        $sql = "INSERT INTO user (username, password, email) VALUES ('$username', '$password', '$email')";
        $result = mysqli_query($conn, $sql);
        
        if($result) {
            $response['success'] = true;
            $response['message'] = "User registered successfully!";
        } else {
            $response['success'] = false;
            $response['message'] = "Error: " . mysqli_error($conn);
        }
    }
  } else {
    $response['success'] = false;
    $response['message'] = "Uh oh, Invalid request method!";
  }

  mysqli_close($conn);
  echo json_encode($response);
?>