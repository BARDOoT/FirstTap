<?php 
session_start();
      if($_SESSION["loggedin"] == 1){
	echo '<a class="btn btn-primary" href="../html/home.html"><h3>Home</h3></a>';
        echo '<a class="btn btn-primary" href="../html/buysell.html"><h3>Buy/Sell</h3></a>';
        echo '<a class="btn btn-primary" href="../html/send.html"><h3>Send</h3></a>';
      