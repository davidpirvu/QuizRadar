<?php
include "connect-db.php";
// declar variabile in afara functiei pentru ca le folosesc in ambele situatii ale functiei
$question = $_GET["question"];
$answers = $_GET["answers"];
$correct = $_GET["correct"];
$category = $_GET["category"];

// SQL modify
if(isset($_GET["id"]) && $_GET["id"] != '') {     // Daca 1. id este dat si ($$=true pentru ambele) 2. inclusiv  id obilgatoriu diferit(!=) de valoarea nimic ('')
    //sql to update person
    $id = $_GET["id"];       // cer un ID. Citim id-ul si vedem daca e id-ul nostru.
    $sql = "UPDATE quiztable SET question='$question', answers='$answers', correct='$correct', category='$category' WHERE id=$id";  // construiesc SQL
} else {
    // sql to add person
    $sql = "INSERT INTO quiztable (question, answers, correct, category) VALUES ('$question', '$answers', '$correct', '$category')";  // construiesc SQL\
}
$conn->query($sql);     // fac solicitare pe SQL creat . Doar pentru valoarea adevarata a functiei
$conn->close();         // inchid conexiunea

header('Location: ../edit.php');  // mergi inapoi la aceasta adresa
?>