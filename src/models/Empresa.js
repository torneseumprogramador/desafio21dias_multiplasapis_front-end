export default class Usuario{
  constructor(usuario){
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.razaoSocial = usuario.razaoSocial;
    this.cnpj = usuario.cnpj;
    this.email = usuario.email;
    this.dataCriacao = usuario.dataCriacao;
    this.dataAtualizacao = usuario.dataAtualizacao;
  }
}
