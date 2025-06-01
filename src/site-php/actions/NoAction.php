<?php

class NoAction extends Action implements ActionInterface
{
    public function execute()
    {
        $this->view->render(Action::ACTION_MENU);
    }
}
