<?php

class Request
{
    protected $RequestType = null;
    protected string $warning = '';
    public array $data = [];
    public ?string $action = null;
    
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
