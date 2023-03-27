import { Imovel } from './imovel.model';

export class Locacao{
  Id:number
  DataInicio:Date
  DataFim:Date
  ValorMensal:number
  Imovel:Imovel
}
