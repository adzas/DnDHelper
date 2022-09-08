<?php
session_start();

require_once('./Calculator.php');
require_once('./characters/Character.php');
require_once('./characters/ChPlayer.php');
require_once('./characters/ChEnemy.php');
require_once('./View.php');

$view = new View();
if (isset($_POST) && !empty($_POST)) {
    if ('check_state' === $_POST['submit']) {
        $view->render('pre', $_SESSION);
    } elseif ('add_character' === $_POST['submit']) {
        $session_k = count($_SESSION);
        $_SESSION[$session_k]['is_player'] = $_POST['is_player'];
        $_SESSION[$session_k]['initiative'] = $_POST['initiative'];
        $_SESSION[$session_k]['name'] = $_POST['name'];
        $_SESSION[$session_k]['initiative'] = $_POST['initiative'];
        $_SESSION[$session_k]['is_player'] = $_POST['is_player'];
        $_SESSION[$session_k]['strength'] = $_POST['strength'];
        $_SESSION[$session_k]['dexterity'] = $_POST['dexterity'];
        $_SESSION[$session_k]['wisdom'] = $_POST['wisdom'];
        $_SESSION[$session_k]['intelligence'] = $_POST['intelligence'];
        $_SESSION[$session_k]['charisma'] = $_POST['charisma'];
        $_SESSION[$session_k]['condition'] = $_POST['condition'];
    }
}
if (isset($_SESSION)) {
    foreach ($_SESSION as $characterData) {
        if ($characterData['is_player']) {
            new ChPlayer($_SESSION);
        } else {
            new ChEnemy($_SESSION);
        }
    }
    $view->setPlayer();
    $view->setEnemy();
    $view->render('');
}
