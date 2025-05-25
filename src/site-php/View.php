<?php

class View
{
    public function setPlayer()
    {

    }

    public function setEnemy()
    {

    }

    public function render(string $type = '', array $options = [])
    {
        switch ($type) {
            case 'menu':
                include('./forms/menu.php');
                break;

            case 'characters':
                include('./views/characters.php');
                break;

            case 'pre':
                $obj = $options;
                include('./views/pre.php');
                break;

            case 'start_the_battle':
                include('./views/battle.php');
                break;
            
            default:
                include('./forms/add.php');
                break;
        }
    }
}