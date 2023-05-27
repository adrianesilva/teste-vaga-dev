import './Lista.css';

/*
  Componente com a Lista dos Clientes Cadastrados
*/
export default function Lista() {

    return (
            <div className="container">
                <div></div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-secondary text-center">
                        <th>CNPJ</th>
                        <th>Nome da Empresa</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td></td>
                        </tr>
                        <tr className=" text-center">
                            <td></td>
                        </tr>
                        <tr className=" text-center">
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}