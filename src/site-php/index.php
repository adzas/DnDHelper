<?php
session_start();

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require_once('./sources.php');
$controller = new Controller(); // zbiera informacje o requescie
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- my JS -->
    <script src="./main.js" type="module"></script>
    <!-- rpg icons -->
    <link rel="stylesheet" href="../site-js/rpg-icons/css/rpg-awesome.min.css">
    <!-- my style -->
    <link rel="stylesheet" href="./style.css">
    <!-- w3schools for progress bar -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <title>Wsparcie Mistrza Gry - konfiguracja</title>
</head>
<body>
    <?php $controller->executeAction(); ?>
</body>
</html>