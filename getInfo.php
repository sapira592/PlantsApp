<?php
    include 'db.php';
      
    $query1 = "SELECT name,medicineInfo FROM tbl_editPlants_208 WHERE ID=1";
    $result= $conn->query($query1);
    if(!$result){
        die("DB query faild.");
    }   
    
    list($name,$info) = $result->fetch_row(); 
    
    echo $name. "<br>" .$info;   
   
    mysqli_free_result($result);
    mysqli_close($conn);

?>