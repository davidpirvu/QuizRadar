<?php
include "connect-db.php";
// declar variabile in afara functiei pentru ca le folosesc in ambele situatii ale functiei
$question = $_GET["Intrebare"];
$answers = $_GET["Raspunsuri"];
$correct = $_GET["VariantaCorecta"];
$category = $_GET["Categorie"];

// SQL modify
if(isset($_GET["id"]) && $_GET["id"] != '') {     // Daca 1. id este dat si ($$=true pentru ambele) 2. inclusiv  id obilgatoriu diferit(!=) de valoarea nimic ('')
    //sql to update person
    $id = $_GET["id"];       // cer un ID. Citim id-ul si vedem daca e id-ul nostru.
    $sql = "UPDATE quiztable SET Intrebare='$question', Raspunsuri='$answers', VariantaCorecta='$correct', Categorie='$category' WHERE id=$id";  // construiesc SQL
} else {
    // sql to add person
    $sql = "INSERT INTO quiztable (question, answers, correct, category) VALUES ('$question', '$answers', '$correct', '$category')";  // construiesc SQL\
}
$conn->query($sql);     // fac solicitare pe SQL creat . Doar pentru valoarea adevarata a functiei
$conn->close();         // inchid conexiunea

header('Location: ../Edit.html');  // mergi inapoi la aceasta adresa
?>
?>
