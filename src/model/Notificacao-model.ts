import {Chamado} from "./Chamado-model";

export class Notificacao{
  idNotificacao: number;
  descricao: string;
  data: Date;
  chamado: Chamado;


  constructor(idNotificacao ?: number, descricao ?: string, data ?: Date, chamado ?: Chamado) {
    this.idNotificacao = idNotificacao;
    this.descricao = descricao;
    this.data = data;
    this.chamado = chamado;
  }
}
