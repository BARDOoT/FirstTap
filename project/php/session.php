<?php 
session_start();
      if($_SESSION["loggedin"] == 1){
	echo '<a class="btn btn-primary" href="../html/home.html"><h3>Home</h3></a>';
        echo '<a class="btn btn-primary" href="../html/buysell.html"><h3>Buy/Sell</h3></a>';
        echo '<a class="btn btn-primary" href="../html/send.html"><h3>Send</h3></a>';
        echo '<a class="btn btn-primary" href="../html/graphs.html"><h3>Graphs</h3></a>'; 
        echo '<a class="btn btn-primary" href="../html/plans.html"><h3>Plans</h3></a>'; 
        echo '<a class="btn btn-primary" href="../html/myAccount.html"><h3>My Account</h3></a>';
        echo '<a class="btn btn-primary" href="../php/logout.php"><h3>Sign Out</h3></a>';
        
        echo 'Logged in as: ', $_SESSIO