<?php

class Controller
{
    public Request $request;
    public ActionInterface $action;
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

    public function setRequest()
    {
        Debuger::logInfo('$_SERVER[\'REQUEST_METHOD\']', $_SERVER['REQUEST_METHOD'], __CLASS__, __FUNCTION__, __LINE__);
        $this->request = new Request();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->request->setRequest($_POST);
        } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $this->request->setRequest($_GET);
        } else {
            $this->request->unknownRequest();
        }
        // Capture 'action' from GET if present
        if (isset($_GET['action'])) {
            $this->request->action = $_GET['action'] ?? null;
            Debuger::logInfo('$_GET[\'action\']', $this->request->action, __CLASS__, __FUNCTION__, __LINE__);
        }
        $this->setSubmit();
    }

    public function setRequestType()
    {
        switch ($this->request->action) {
            // case Action::ACTION_CONFIGURATION:
            //     $this->action = new ConfigurationAction($this->request);
            //     break;
    
            // case Action::ACTION_CONFIGURATION_LIST:
            //     $this->action = new ConfigurationListAction($this->request);
            //     break;

            // case Action::ACTION_ENEMY_TYPES:
            //     $this->action = new ClearCharactersAction($this->request);
            //     break;

            case Action::ACTION_PLAYERS_CHARACTER:
                $this->action = new PlayersCharactersAction($this->request);
                break;
            
            default:
                $this->action = new HomeAction($this->request);
                break;
        }
        Debuger::logInfo('$this->action', get_class($this->action), __CLASS__, __FUNCTION__, __LINE__);
    }

    public function setSubmit()
    {
        if (isset($this->request->data['submit'])) {
            Debuger::logInfo('$this->request->data[\'submit\']', $this->request->data['submit'], __CLASS__, __FUNCTION__, __LINE__);
            $this->submit = $this->request->data['submit'];
            unset($this->request->data['submit']);
        }
    }
}
