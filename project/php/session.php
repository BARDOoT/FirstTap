<?php 
session_start();
      if($_SESSION["loggedin"] == 1){
	echo '<a class="btn btn-primary" href="../html/home.html"><h3>Home</h3></a>';
        echo '<