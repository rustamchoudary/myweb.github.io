<?php
 if (isset($_POST['submit'])) {
	$name= $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$service = $_POST['service'];
	$date = $_POST['date'];
	$queries = $_POST['queries'];
	// Database connection
 
	$conn = new mysqli('localhost','root','','db_connect');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {

		$stmt = $conn->prepare("insert into information(name, email, phone, service, date, queries) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssisss", $name, $email, $phone, $service, $date, $queries);
		$execval = $stmt->execute();

		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
}
?>


