<?php

class Controller
{
    public $request;
    public $action;
    public $submit = null;

    public function __construct()
    {
        $this->setRequest();
        $this->setRequestType();
    }

    public function executeAction()
    {
        $this->action->execute();
    }

    public function setRequestType()
    {
        switch ($this->submit) {
            case Action::ACTION_CHECK_STATE:
                $this->action = new CheckStateAction($this->request);
                break;
    
            case Action::ACTION_START_THE_BATTLE:
                $this->action = new StartTheBattleAction($this->request);
                break;
    
            case Action::ACTION_ADD_CHARACTER:
                $this->action = new AddCharacterAction($this->request);
                break;
            
            default:
                $this->action = new NoAction($this->request);
                break;
        }
    }

    public function setSubmit()
    {
        if (isset($this->request->date['submit'])) {
            $this->submit = $this->request->date['submit'];
        }
    }

    public function setRequest()
    {
        $this->request = new Request();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->request->setRequest($_POST);
        } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $this->request->setRequest($_GET);
        } else {
            $this->request->unknownRequest();
        }
        $this->setSubmit();
    }
}
