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
            case 'characters':
                include('./views/characters.php');
                break;
            case 'pre':
                $obj = $options;
                include('./views/pre.php');
                break;
            
            default:
                include('./forms/add.php');
                break;
        }
    }
}