export default class Usuario{
  constructor(usuario){
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.idEmpresa = usuario.idEmpresa;
    this.observacao = usuario.observacao;
    this.dataCriacao = usuario.dataCriacao;
    this.dataAtualizacao = usuario.dataAtualizacao;
  }
}
