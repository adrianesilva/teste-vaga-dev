<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Accept: application/json');
header("Access-Control-Allow-Headers: Content-Type");

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=teste','root',''));

