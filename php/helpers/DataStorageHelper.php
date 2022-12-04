<?php

class DataStorageHelper
{
    const STORAGE_FILE_PATH = '../storage/characters.json';
    const STORAGE_LOG_FILE_PATH = '../storage/log.txt';
    
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

        return json_decode($data, true);
    }

    public function addCharacter(array $data = [])
    {
        $content = [];
        $content[] = $data;
        
        return $this->addContent($content, self::STORAGE_FILE_PATH);
    }

    public function addContent(array $data = [], string $filePath = ''): bool
    {
        $current_data = $this->getContent();
        Debuger::logInfo('$current_data', $current_data, __CLASS__, __FUNCTION__, __LINE__);
        Debuger::logInfo('$data', $data, __CLASS__, __FUNCTION__, __LINE__);

        Debuger::logInfo('!empty($current_data)', !empty($current_data), __CLASS__, __FUNCTION__, __LINE__);
        if (!empty($current_data)) {
            Debuger::logInfo('array_merge', count($current_data).' and '.count($data), __CLASS__, __FUNCTION__, __LINE__);
            $content = array_merge($current_data, $data);
        } else {
            $content = $data;
        }

        $res = $this->storeContent($content, $filePath);

        return $res !== false ? true : $res;
    }

    public function storeContent(array $content =[], string $filePath): bool
    {
        Debuger::logInfo('$content', $content, __CLASS__, __FUNCTION__, __LINE__);
        $res = file_put_contents($filePath, json_encode($content));
        Debuger::logInfo('file_put_contents', $res, __CLASS__, __FUNCTION__, __LINE__);
        
        return $res !== false ? true : $res;
    }

    public function storeLog(string $log)
    {
        if (file_exists(self::STORAGE_LOG_FILE_PATH)) {
            $curr_content = file_get_contents(self::STORAGE_LOG_FILE_PATH);
            $curr_content .= PHP_EOL . $log;
            file_put_contents(self::STORAGE_LOG_FILE_PATH, $curr_content);
        }
    }
}
