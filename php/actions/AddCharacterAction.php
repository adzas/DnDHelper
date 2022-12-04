<?php

class AddCharacterAction extends Action implements ActionInterface
{
    public function execute()
    {
        Debuger::logInfo('$this->request->data', $this->request->data, __CLASS__, __FUNCTION__, __LINE__);
        if (empty($this->request->data)) {
            $this->view->render(Action::ACTION_MENU);
            echo "Uzupełnij formularz";
            $this->view->render(Action::ACTION_ADD_CHARACTER);
        } else {
            $character['name'] = $this->request->data['name'];
            $character['initiative'] = $this->request->data['initiative'];
            $character['is_player'] = isset($this->request->data['is_player']) ? 1 : 0;
            $character['strength'] = $this->request->data['strength'];
            $character['dexterity'] = $this->request->data['dexterity'];
            $character['wisdom'] = $this->request->data['wisdom'];
            $character['intelligence'] = $this->request->data['intelligence'];
            $character['charisma'] = $this->request->data['charisma'];
            $character['condition'] = $this->request->data['condition'];
            $this->view->render(Action::ACTION_MENU);
            $dataHelper = new DataStorageHelper();
            $resultFromAddContent = $dataHelper->addCharacter($character);
            Debuger::logInfo('$resultFromAddContent', $resultFromAddContent, __CLASS__, __FUNCTION__, __LINE__);
            if ($resultFromAddContent) {
                echo "Dodane pozycję do listy";
                $this->view->render(Action::ACTION_ADD_CHARACTER);
            }
        }
    }
    
}
