<?php

class DataStorageHelper
{
    const STORAGE_FILE_PATH = './storage/characters.json';
    
    public function getCharacterStorage()
    {
        $characters_storage = file_get_contents(self::STORAGE_FILE_PATH);

        return json_decode($characters_storage);
    }

    public function getContent()
    {
        if (file_exists(self::STORAGE_FILE_PATH)) {
            $data = file_get_contents(self::STORAGE_FILE_PATH);
        }

        return json_decode($data);
    }

    public function addContent(array $data = [])
    {
        $current_data = $this->getContent();
        $content = array_merge(json_decode($current_data), $data);
        $res = file_put_contents(self::STORAGE_FILE_PATH, json_encode($content));
        echo "DataStorageHelper::addContent -> file_put_contents: <br/>";
        echo __CLASS__."::".__FUNCTION__." -> file_put_contents: ";
        var_dump($res);
    }
}
