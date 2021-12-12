export default class Tarefa{
  constructor(tarefa){
    this.id = tarefa.id;
    this.idEvento = tarefa.id_evento;
    this.titulo = tarefa.titulo;
    this.descricao = tarefa.descricao;
    this.situacaoId = tarefa.situacao_id;
    this.dataCriacao = tarefa.data_criacao;
    this.dataAtualizacao = tarefa.data_atualizacao;
  }
}
