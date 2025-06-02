<?php

class NoAction extends Action implements ActionInterface
{
    public function execute()
    {
        $this->view->render(Action::ACTION_MENU, $this->getMenuItems());
    }

    public function getMenuItems()
    {
        return [
            'menu' => [
                Action::ACTION_MENU => 'Menu',
                Action::ACTION_CONFIGURATION_LIST => 'Konfiguracja ogólna',
                Action::ACTION_PLAYERS_CHARACTER => 'Players Characters',
                Action::ACTION_CONFIGURATION => 'Konfiguracja wrogów',
                Action::ACTION_ENEMY_TYPES => 'Typy wrogów',
            ],
            'action' => $this->request->action ?: Action::ACTION_MENU,
        ];
    }
}
