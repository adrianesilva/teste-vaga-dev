<?php
require 'vendor/autoload.php';


/*
Abaixo estão Listadas as Rotas da API
*/
Flight::route('/', function(){});

Flight::route('POST /salvar', function(){});

Flight::route('GET /listar', function(){});

Flight::route('PUT /editar', function(){});

Flight::route('DELETE /deletar', function(){});

Flight::start();

