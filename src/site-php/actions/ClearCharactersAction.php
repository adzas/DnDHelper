<?php

class ClearCharactersAction extends Action implements ActionInterface
{
    public function execute()
    {
        $dataHelper = new DataStorageHelper();
        $dataHelper->storeContent(DataStorageHelper::STORAGE_FILE_PATH, []);
        $this->view->render(Action::ACTION_MENU, [
            'message' => 'Wyczyszczono listę postaci',
            'characters' => $dataHelper->getCharacterStorage(),
        ]);
    }
}
