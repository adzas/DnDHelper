<?php

class Action
{
    const ACTION_MENU = 'menu';
    // edit players characters
    const ACTION_PLAYERS_CHARACTER = 'players_characters';
    // edit enemy types
    const ACTION_ENEMY_TYPES = 'enemy_types';
    // edit configuration
    const ACTION_CONFIGURATION = 'configuration';
    // edit configuration list
    const ACTION_CONFIGURATION_LIST = 'configuration_list';
    
    protected Request $request;
    protected View $view;
    
    public function __construct(Request $request) {
        $this->request = $request;
        $this->view = new View($this->getAction());
    }

    public function getAction(): string
    {
        return $this->request->action ?? self::ACTION_MENU;
    }
}
