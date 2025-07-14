<?php

class PlayAction extends Action implements ActionInterface
{
    public function execute()
    {
        $viewData = [
            'action' => Action::ACTION_PLAY,
            'title' => 'Walka',
            'initiativeList' => [],//DataStorageHelper::getCBattlefield(),
        ];

        $this->view->render('battlefield', $viewData);
    }
}
