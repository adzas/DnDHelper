<?php

class AddCharacterAction extends Action implements ActionInterface
{
    public function execute()
    {
        $character['name'] = $this->request->data['name'];
        $character['initiative'] = $this->request->data['initiative'];
        $character['is_player'] = isset($this->request->data['is_player']) ? 1 : 0;
        $character['strength'] = $this->request->data['strength'];
        $character['dexterity'] = $this->request->data['dexterity'];
        $character['wisdom'] = $this->request->data['wisdom'];
        $character['intelligence'] = $this->request->data['intelligence'];
        $character['charisma'] = $this->request->data['charisma'];
        $character['condition'] = $this->request->data['condition'];
        $this->view->render('menu');
        $dataHelper = new DataStorageHelper();
        $dataHelper->addContent($character);
    }
    
}
