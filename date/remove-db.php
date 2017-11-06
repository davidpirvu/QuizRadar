<?php
include "connect-db.php";

if(isset($_GET["id"])) {     // transmit un ID
    $id = $_GET["id"];          // cer un ID

    // sql to delete a record
    $sql = "DELETE FROM quiztable WHERE id=$id"; // construiesc SQL
    $conn->query($sql);                         //  fac conexiunea?
    $conn->close();                             // inchid conexiunea
}

header('Location: ../edit.php');
?>
