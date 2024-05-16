var mongoose = require('mongoose');

var contratoSchema = new mongoose.Schema({
  _id: Number,
  nAnuncio: String,
  tipoprocedimento: String,
  objectoContrato: String,
  dataPublicacao: Date,
  dataCelebracaoContrato: Date,
  precoContratual: Number,
  prazoExecucao: Number,
  NIPC_entidade_comunicante: Number,
  entidade_comunicante: String,
  fundamentacao: String
});

module.exports = mongoose.model('Contrato', contratoSchema);
