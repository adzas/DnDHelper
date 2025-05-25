<?php

class CheckStateAction extends Action implements ActionInterface
{
    public function execute()
    {
        $dataHelper = new DataStorageHelper();
        $characters_storage = $dataHelper->getCharacterStorage();
        $this->view->render('menu');
        $this->view->render('pre', [$characters_storage]);
    }
}
