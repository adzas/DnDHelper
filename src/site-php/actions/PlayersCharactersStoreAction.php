<?php

class PlayersCharactersStoreAction extends Action implements ActionInterface
{
    public function execute()
    {
        $this->view->render('menu');
        $this->view->render('players_character_form', $this->storePlayersCharactersData());
    }

    public function storePlayersCharactersData()
    {
        // character_name
        // character_class
        // character_content
        var_dump($this->request->data['character_content']);
        $dataStorageHelper = new DataStorageHelper();
        $characters = $dataStorageHelper->getCharacterStorage();

        return [
            'characters' => $characters,
            'action' => $this->request->action ?: Action::ACTION_PLAYERS_CHARACTER,
        ];
    }
}