<?php
require '../vendor/autoload.php';
require '../config/config.php';

$array=[];

foreach ($db->query('SELECT * FROM clientes') as $k=>$row) {

    $array[$k]=(array('id' => $row['id'],'cnpj'=>$row['cnpj'],'empresa'=>$row['nome_empresa']));

}

Flight::json($array);
