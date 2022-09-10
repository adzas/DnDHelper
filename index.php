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
    <title>WsparcieMistrzaGry</title>
</head>
<body>
    <?php $controller->executeAction(); ?>
</body>
</html>