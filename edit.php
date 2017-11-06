<?php
$pin = isset ($_POST["pin"])?$_POST["pin"]:"";
if($pin!="4123"){
    header('Location: ./index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit</title>
    <link rel="stylesheet" href="css/style-edit.css">

</head>
<body>

<div class="edit">

    <div id="content">
        <form action="date/save-db.php" id="question-form">
            <input type="hidden" name="id">
            <input type="text" name="question" placeholder="Intrebare" required>
            <input type="text" name="answers" placeholder="Raspunsuri" required>
            <input type="text" name="correct" placeholder="VariantaCorecta" required>
            <input type="text" name="category" placeholder="Categorie" required>
            <button>Save</button>
        </form>

        <table id="question-list">
            <thead>
            <tr>
                <th>Intrebare</th>
                <th>Raspunsuri</th>
                <th>VariantaCorecta</th>
                <th>Categorie</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>

</div>


<script src="js/lib/jquery/jquery-2.1.3.js"></script>
<script src="js/edit.js"></script>

</body>
</html>