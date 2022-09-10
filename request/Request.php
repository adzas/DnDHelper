<?php

class Request
{
    protected $RequestType = null;
    protected $warning = '';
    protected $data = [];
    
    public function unknownRequest()
    {
        $this->warning = 'unknown Request';
        $this->data = [];
    }

    public function setRequest(Array $data = [])
    {
        $this->data = $data;
    }
}
