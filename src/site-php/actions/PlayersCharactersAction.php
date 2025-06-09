<?php

class PlayersCharactersAction extends Action implements ActionInterface
{
    public function execute()
    {
        $this->view->render('menu');
        $this->view->render('players_character_form', $this->getPlayersObject());
    }

    public function getPlayersObject()
    {
        $dataStorageHelper = new DataStorageHelper();
        $characters = $dataStorageHelper->getCharacterStorage();

        return [
            'characters' => $characters,
            'action' => $this->request->action ?: Action::ACTION_PLAYERS_CHARACTER,
        ];
    }
}