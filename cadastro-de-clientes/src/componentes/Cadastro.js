import React, { useEffect, useState } from "react";
import './Cadastro.css';
import api from "./api.js";

/*
  Componente com Formulário de Cadastro dos Clientes
*/
export default function Cadastro() {

  const [inputs, setInputs] = useState();

const handleChange = (event) => {
  const name =  event.target.name;
  const value = event.target.value;
  
  setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
  event.preventDefault();
  api.post('/salvar', inputs).then(function(response){
        console.log(response);
        
    });
}

    return (
            <div className="container">
              <div className="FormHeader">
                  <div className="form-group col-sm">
                  <label>Formulário de Cadastro</label>
                  </div>
                </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label>CNPJ</label>
                    <input type="text" className="form-control" name="cnpj" onChange={handleChange} />
                  </div>
                  <div className="form-group col-sm-7">
                    <label>Nome da Empresa</label>
                    <input type="text" className="form-control" name="empresa" onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-3">
                    <label>CEP</label>
                    <input type="text" className="form-control" name="cep" onChange={handleChange} />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Endereço</label>
                    <input type="text" className="form-control" name="endereco" onChange={handleChange} />
                  </div>
                  <div className="form-group col-sm-2">
                    <label>Número</label>
                    <input type="text" className="form-control" name="numero" onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-5">
                    <label>Bairro</label>
                    <input type="text" className="form-control" name="bairro" onChange={handleChange} />
                  </div>
                  <div className="form-group col-sm-2">
                    <label>UF</label>
                    <select className="form-control" name="uf" onChange={handleChange}>
                      <option defaultValue="0"></option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="GO">GO</option>
                      <option value="MG">MG</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="SP">SP</option>
                      <option value="TO">TO</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Cidade</label>
                    <select className="form-control" name="cidade" onChange={handleChange}>
                      <option defaultValue="0"></option>
                      <option value="Belo Horizonte">Belo Horizonte</option>
                      <option value="Brasília">Brasília</option>
                      <option value="Fortaleza">Fortaleza</option>
                      <option value="Goiânia">Goiânia</option>
                      <option value="Maceió">Maceió</option>
                      <option value="Palmas6">Palmas</option>
                      <option value="Rio Branco">Rio Branco</option>
                      <option value="Rio de Janeiro">Rio de Janeiro</option>
                      <option value="São Paulo9">São Paulo</option>
                      <option value="Teresina">Teresina</option>
                    </select>
                  </div>
                </div>
                  <button className="btn btn-primary" >Salvar</button>
                  <button className="btn btn-secondary">Cancelar</button>
              </form>
            </div>
    )
  }