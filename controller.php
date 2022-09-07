<?php
require_once('calculator.php');
require_once('character.php');
require_once('view.php');

if (isset($_POST)) {

}
if (isset($_SESSION)) {

}
$view = new View();
$view->setPlayer();
$view->setEnemy();
$view->render();
