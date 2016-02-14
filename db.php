<?php
    
    $conn = new mysqli("166.62.8.11", "auxstudDB5", "auxstud5DB1!", "auxstudDB5"); 

    if ($conn->connect_error) {
    die('Connect Error (' . $conn->connect_errno . ') '
            . $conn->connect_error);
    }   
 
    mysqli_query( $conn, "SET NAMES 'utf8'");  

?>