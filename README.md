## Teste para candidatos à vaga de Programador.

Olá, segue abaixo a explicação de como fiz para criar e rodar o projeto.

## Programas utilizados no projeto

- WAMP (PHP 7.4)
- Visual Studio Code
- Composer + Nodejs (Reactjs)

## Sobre o Projeto

O projeto se trata de um Formulario de Cadastro de Clientes.
Foi desenvolvido com ReactJs, utilizando Bootstrap e CSS para alguns detalhes de estilo.
Para testes no frontend foi utilizado o npm start para rodar a aplicação.
Para testes na API foi utilizado o WAMP como Servidor Web, foi necessário incluir o script .htacess ao utilizar o FlightPHP.

## Estrutura do Projeto

A pasta inicial refere-se ao projeto em ReactJs, o scripts relacionados ao projeto estão em src/componentes. 
Na pasta componentes, estão os scripts js e css referente ao Formulário de Cadastro(Cadastro.js) e a Lista de Clientes(Lista.js), como tambem o script api.js que serve para configurar a url da API que será chamada nas requisições.

A pasta flight-php refere-se a API feita com o Framework FlightPHP. 
Nela contém a pasta api, com o script ApiController.php que é a classe com as funções que serão chamadas nas rotas.
Foram criadas duas rotas no index.php:
/listar - Para listar os Clientes
/salvar - Para Salvar os Clientes
A pasta config possui o script config.php que refere-se a configurações do projeto.




