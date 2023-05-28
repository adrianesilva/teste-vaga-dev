<?php

require '../vendor/autoload.php';
require '../config/config.php';

$dadosJson = file_get_contents("php://input");
$dados = json_decode($dadosJson,true);

$query=$db->prepare("INSERT INTO empresas (cnpj, nome_empresa, cep, endereco, numero, bairro, uf, cidade) VALUES (:cnpj,:empresa,:cep,:endereco,:numero,:bairro,:uf,:cidade)");

$query->bindParam(":cnpj",$dados['cnpj']);
$query->bindParam(":empresa",$dados['empresa']);
$query->bindParam(":cep",$dados['cep']);
$query->bindParam(":endereco",$dados['endereco']);
$query->bindParam(":numero",$dados['numero']);
$query->bindParam(":bairro",$dados['bairro']);
$query->bindParam(":uf",$dados['uf']);
$query->bindParam(":cidade",$dados['cidade']);

if($query->execute()) {
    Flight::json(array(res=>"sucesso"));
}else{
    Flight::json(array(res=>"erro ao salvar"));
}

