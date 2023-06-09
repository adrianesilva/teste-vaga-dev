<?php
require 'vendor/autoload.php';
require 'api/ApiController.php';

/*
Abaixo estão Listadas as Rotas da API
*/

Flight::route('/', function(){});

Flight::route('GET /listar', ['ApiController' , 'listar']);

Flight::route('POST|OPTIONS /salvar', ['ApiController' , 'salvar']);

//Flight::route('PUT /editar', function(){});

//Flight::route('DELETE /deletar', function(){});

Flight::start();

