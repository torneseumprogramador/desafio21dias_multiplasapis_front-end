import api from "../servicos/api";
import React, { useState, useEffect } from "react";
import Usuario from "../models/Usuario";
import Tarefa from "../models/Tarefa";
import Empresa from "../models/Empresa";

const Body: React.FC = () =>{
  const [usuarios, setUsuarios] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  const carregaEndpoints = () => {
    const getData = async () => {  
      const requestUsuarios = await api.get('/usuarios');
      const listaUsuario = [];
      for(let i in requestUsuarios.data){
        listaUsuario.push(new Usuario(requestUsuarios.data[i]));
      }
      setUsuarios(listaUsuario);

      const requestTarefas = await api.get('/tarefas.json');
      const listaTarefa = [];
      for(let i in requestTarefas.data){
        listaTarefa.push(new Tarefa(requestTarefas.data[i]));
      }
      setTarefas(listaTarefa);

      const requestEmpresas = await api.get('/empresas');
      const listaEmpresa = [];
      for(let i in requestEmpresas.data){
        listaEmpresa.push(new Empresa(requestEmpresas.data[i]));
      }
      setEmpresas(listaEmpresa);
    }  
    getData()  
  }

  useEffect(() => {  
    carregaEndpoints();
  }, []);

  // ====== Delete na minha API =======
  // const deletePorId = async (id) => {
  //   await api.delete(`/empresas/${id}`);
  // }
  // deletePorId(1);

  // ====== Update na minha API =======
  // const updatePorId = async (id) => {
  //   await api.put(`/empresas/${id}`, {
  //     nome: "Didox Business",
  //     razaoSocial: "Danilo Aparecido informática",
  //     email: "danilo@didox.com",
  //     cnpj: "43.102.396/0001-90"
  //   });
  // }
  // updatePorId(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const razao_social = document.getElementById("razao_social").value;
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;

    if(nome === "" || razao_social === "" || cnpj === "" || email === ""){
      alert("Preencha os campos corretamente");
      return;
    }

    try{
      await api.post('/empresas', {
        nome: nome,
        razaoSocial: razao_social,
        email: email,
        cnpj: cnpj
      });
    }
    catch(err){
      alert(JSON.stringify(err));
      return;
    }
    
    alert("Empresa cadastrada com sucesso");

    carregaEndpoints();
  }

  return (
    <div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome da empresa" />
          </div>
          <div className="form-group">
            <label htmlFor="razao_social">Razão Social</label>
            <input type="text" className="form-control" id="razao_social" placeholder="Razão Social"/>
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" className="form-control" id="cnpj" placeholder="CNPJ"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="E-mail"/>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>

      <hr/>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Empresas</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <table className="table table-bordered dataTable" id="dataTable" width="100%" aria-describedby="dataTable_info">
                <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>Razão Social</th>
                      <th>E-mail</th>
                      <th>CNPJ</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>Razão Social</th>
                      <th>E-mail</th>
                      <th>CNPJ</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </tfoot>
                <tbody>
                  {empresas.map((empresa, i) => {
                      return (
                        <tr>
                          <td>{empresa.id}</td>
                          <td>{empresa.nome}</td>
                          <td>{empresa.razaoSocial}</td>
                          <td>{empresa.email}</td>
                          <td>{empresa.cnpj}</td>
                          <td>{empresa.dataCriacao}</td>
                          <td>{empresa.dataAtualizacao}</td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Usuarios</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <table className="table table-bordered dataTable" id="dataTable" width="100%" aria-describedby="dataTable_info">
                <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>IdEmpresa</th>
                      <th>Observação</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>IdEmpresa</th>
                      <th>Observação</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </tfoot>
                <tbody>
                  {usuarios.map((usuario, i) => {
                      return (
                        <tr>
                          <td>{usuario.id}</td>
                          <td>{usuario.nome}</td>
                          <td>{usuario.email}</td>
                          <td>{usuario.idEmpresa}</td>
                          <td>{usuario.observacao}</td>
                          <td>{usuario.dataCriacao}</td>
                          <td>{usuario.dataAtualizacao}</td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Tarefas</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <table className="table table-bordered dataTable" id="dataTable" width="100%" aria-describedby="dataTable_info">
                <thead>
                    <tr>
                      <th>Id</th>
                      <th>Id do Evento</th>
                      <th>Titulo</th>
                      <th>Descrição</th>
                      <th>Situação</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Id do Evento</th>
                      <th>Titulo</th>
                      <th>Descrição</th>
                      <th>Situação</th>
                      <th>Data de Criação</th>
                      <th>Data de Atualização</th>
                    </tr>
                </tfoot>
                <tbody>
                  {tarefas.map((tarefa, i) => {
                      return (
                        <tr>
                          <td>{tarefa.id}</td>
                          <td>{tarefa.idEvento}</td>
                          <td>{tarefa.titulo}</td>
                          <td>{tarefa.descricao}</td>
                          <td>{tarefa.situacaoId}</td>
                          <td>{tarefa.dataCriacao}</td>
                          <td>{tarefa.dataAtualizacao}</td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
