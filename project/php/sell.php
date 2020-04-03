
<?php
	session_start();
	if($_SESSION["user"] == ""){
        echo '<h1>You must be logged in. </h1><br><a href="../html/login.html">Log In</a>';
		
    } else {
		include 'functions.php';
		$amt = $_POST["amountToSell"];
		
        $user = $_SESSION["user"];
		