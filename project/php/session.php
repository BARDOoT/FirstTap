<?php 
session_start();
      if($_SESSION["loggedin"] == 1){
	echo '<a class="btn btn-primary" href="../html/home.