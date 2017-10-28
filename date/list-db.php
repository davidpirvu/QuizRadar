<?php
include "connect-db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies

$category = "math";

if(isset($_GET["category"])) {
    $category = $_GET["category"];
}

$sql = "SELECT * FROM quiztable WHERE category = '$category' ORDER BY RAND() LIMIT 10";  // selectare pe categorie, cu limitare la 10 intrebari
$result = $conn->query($sql);  // cer rezultatele facand query din $sql pe conn(xiune). Stochez in result.

$quiz = array();                // creez un json in care voi pune datele

if ($result->num_rows > 0) {                    // daca sunt inregistrari, atunci se face while
    while ($row = $result->fetch_assoc()) {     // citeste rezultatele si face la fel pentru toate rezultatele
        $quiz[] = array(                        // adauga obiect in array. Obiectul(json) de mai jos.
            "id" => $row["id"],                 // valori copiate in array-ul $quiz din rand din baza de date
            "question" => $row["question"],     // valori copiate in array-ul $quiz din rand din baza de date
            "correct" => $row["correct"],
            "answers" => json_decode($row["answers"]),       // valori copiate in array-ul $quiz din rand din baza de date
        );
    }
}
$conn->close();

echo json_encode($quiz, true);

?>