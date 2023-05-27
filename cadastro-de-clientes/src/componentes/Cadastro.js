import './Cadastro.css';

/*
  Componente com Formulário de Cadastro dos Clientes
*/
export default function Cadastro() {
    return (
            <div className="container">
              <div className="FormHeader">
                  <div className="form-group col-sm">
                  <label>Formulário de Cadastro</label>
                  </div>
                </div>
              <form>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label>CNPJ</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-sm-7">
                    <label>Nome da Empresa</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-3">
                    <label>CEP</label>
                    <input type="text" className="form-control"  />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Endereço</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label>Número</label>
                    <input type="text" className="form-control"  />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-5">
                    <label>Bairro</label>
                    <input type="text" className="form-control"  />
                  </div>
                  <div className="form-group col-sm-2">
                    <label>UF</label>
                    <select className="form-control">
                      <option defaultValue="0"></option>
                      <option value="1">AC</option>
                      <option value="2">AL</option>
                      <option value="3">CE</option>
                      <option value="4">DF</option>
                      <option value="5">GO</option>
                      <option value="6">MG</option>
                      <option value="7">PI</option>
                      <option value="8">RJ</option>
                      <option value="9">SP</option>
                      <option value="9">TO</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Cidade</label>
                    <select className="form-control">
                      <option defaultValue="0"></option>
                      <option value="1">Belo Horizonte</option>
                      <option value="2">Brasília</option>
                      <option value="3">Fortaleza</option>
                      <option value="4">Goiânia</option>
                      <option value="5">Maceió</option>
                      <option value="6">Palmas</option>
                      <option value="7">Rio Branco</option>
                      <option value="8">Rio de Janeiro</option>
                      <option value="9">São Paulo</option>
                      <option value="9">Teresina</option>
                    </select>
                  </div>
                </div>
                  <button className="btn btn-primary" >Salvar</button>
                  <button className="btn btn-secondary">Cancelar</button>
              </form>
            </div>
    )
  }