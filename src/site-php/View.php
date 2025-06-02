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
        $viewData = $options;
        switch ($type) {
            case 'menu':
                include('./views/menu.php');
                break;

            case 'pre':
                include('./views/pre.php');
                break;
            
            default:
                
                break;
        }
    }
}