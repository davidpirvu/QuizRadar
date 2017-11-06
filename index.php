<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style-index.css">

    <?php

    $category = "IT";

    if (isset($_GET["category"])) {
        $category = $_GET["category"];
    }

    ?>

    <script>
        var category = '<?php echo $category; ?>';
    </script>
</head>
<body>

<div id="container">
    <br>

    <ul class="menu">
        <li><a href="?category=IT">IT</a></li>
        <li><a href="?category=Matematica">Matematica</a></li>
        <li><a href="?category=Istorie">Istorie</a></li>
    </ul>
    <p id="titlu">Incepe Testul (<?php echo $category; ?>)</p>

    <button id="button">Restart</button>
    <div id="test"></div>
</div>

<form id="login" action="edit.php" method="post">
    <input type="password" placeholder="pin" name="pin">
    <button>Login</button>
</form>

<script src="js/lib/jquery/jquery-2.1.3.js"></script>
<script src="app.js"></script>
</body>
</html>