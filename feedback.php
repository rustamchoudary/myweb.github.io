<?php
if (isset($_POST['submit'])) {
	$name= $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$text = $_POST['text'];

	// Database connection
	$conn = new mysqli('localhost','root','','db_connect');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {

		$stmt = $conn->prepare("insert into feedback(name, email, phone, text) values(?, ?, ?, ?)");
		$stmt->bind_param("ssis", $name, $email, $phone, $text);
		$execval = $stmt->execute();

		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}

}
?>
