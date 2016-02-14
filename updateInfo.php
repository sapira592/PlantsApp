<?php
    include 'db.php';
 
       if(isset($_POST['name1'])){
        $name = mysqli_real_escape_string($conn, $_POST['name1']); // from url
        $info = mysqli_real_escape_string($conn, $_POST['info1']);
        
        
        //insert the new data
        $query2 = "UPDATE tbl_editPlants_208 SET medicineInfo='$info' WHERE name='$name'";
        $result= $conn->query($query2);
        if(!($result)){
            die("UPDATE query faild.");
        }
        
        //get the new info
        $result= $conn->query($query1);
        if(!($result)){
            die("SELECT query faild.");
        }
    }
    
    list($name,$info) = $result->fetch_row();
  
    //echo json_encode(array("name" => $name,"info" => $info));
    
    mysqli_free_result($result);
    mysqli_close($conn);
    
    
?>