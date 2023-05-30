<?php
require './vendor/autoload.php';
require './config/config.php';

class ApiController{

    /*
        Função que lista os clientes salvos banco de dados
    */
    public static function listar() {
        
        $db = Flight::db();

        $array=[];

        foreach ($db->query('SELECT * FROM clientes') as $k=>$row) {

            $array[$k]=(array('id' => $row['id'],'cnpj'=>$row['cnpj'],'empresa'=>$row['nome_empresa']));

        }

        Flight::json($array);
        
    }

    /*
        Função que salva os clientes no banco de dados
    */
    public static function salvar(){

        $db = Flight::db();

        $dadosJson = file_get_contents("php://input");
        $dados = json_decode($dadosJson,true);

        $cnpj = (isset($dados['cnpj']) ? $dados['cnpj'] : '');
        $empresa = (isset($dados['empresa']) ? $dados['empresa'] : '');
        $cep = (isset($dados['cep']) ? $dados['cep'] : '');
        $endereco = (isset($dados['endereco']) ? $dados['endereco'] : '');
        $numero = (isset($dados['numero']) ? $dados['numero'] : 0);
        $bairro = (isset($dados['bairro']) ? $dados['bairro'] : '');
        $uf = (isset($dados['uf']) ? $dados['uf'] : '');
        $cidade = (isset($dados['cidade']) ? $dados['cidade'] : '');

        //Verificação se o cnpj e empresa estão preenchidos
        if($cnpj != '' && $empresa !=''){

            $query="INSERT INTO clientes (cnpj, nome_empresa, cep, endereco, numero, bairro, uf, cidade) VALUES ('$cnpj','$empresa','$cep','$endereco',$numero,'$bairro','$uf','$cidade')";

            if($db->exec($query)) {
                Flight::json(array("Salvo com Sucesso"));
            }else{
                Flight::json(array("Erro ao Salvar no BD"));
            }

        }else{

            Flight::json(array("Erro ao Salvar"));
        }

    }


}