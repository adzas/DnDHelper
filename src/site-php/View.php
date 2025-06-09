<?php

class View
{
    private ?string $action;

    public function __construct(?string $action) {
        $this->action = $action;
    }

    public function render(string $type = '', array $options = [])
    {
        $action = $this->action;
        $viewData = $options;
        switch ($type) {
            case 'menu':
                include('./views/menu.php');
                break;

            case 'players_character_form':
                include('./forms/players_character_form.php');
                break;

            case 'pre':
                include('./views/pre.php');
                break;
            
            default:
                
                break;
        }
    }
}