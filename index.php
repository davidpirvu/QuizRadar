<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">

    <?php

    $category = "math";

    if(isset($_GET["category"])) {
        $category = $_GET["category"];
    }

    ?>

    <script>
        var category = '<?php echo $category; ?>';
    </script>
</head>
<body>

<div id="container">
   <ul>
       <li><a href="?category=math">Math</a></li>
       <li><a href="?category=history">History</a></li>
   </ul>
<p id="titlu">Incepe Testul (<?php echo $category; ?>)</p>
    <h2 id="test_status"> </h2>

    <button id="button">Restart</button>
    <div id="test">    </div>
</div>

<script src="js/lib/jquery/jquery-2.1.3.js"></script>
<script src="app.js"> </script>
</body>
</html>