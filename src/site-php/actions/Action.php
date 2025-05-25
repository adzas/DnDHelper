<?php

class Action
{
    const ACTION_MENU = 'menu';
    const ACTION_ADD_CHARACTER = 'add_character';
    const ACTION_START_THE_BATTLE = 'start_the_battle';
    const ACTION_CHECK_STATE = 'check_state';
    const ACTION_CLEAR_CHARACTERS = 'clear_characters';
    
    protected $request;
    protected $view;
    
    public function __construct(Request $request) {
        $this->view = new View();
        $this->request = $request;
    }
}
