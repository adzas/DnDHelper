<?php

class Debuger
{
    public static function logInfo($message, $info, $className, $functionName, $line)
    {
        if (is_array($info)) {
            $value = print_r($info, true);
        } else {
            $value = $info;
        }
        $value = date('Y-m-d H:i:s').' - '.$className."::".$functionName." l:".$line.PHP_EOL.$message.': '.$value;
        $dataHelper = new DataStorageHelper();
        $dataHelper->storeLog($value);
    }
}
