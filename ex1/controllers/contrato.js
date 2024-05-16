var Contrato = require('../models/contrato')

// Planta list
module.exports.list = () =>{
    return Contrato.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getContrato = id =>{
    return Contrato.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.entidadeContratosList = entidade =>{
    return Contrato.find({"entidade_comunicante":entidade})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.tipoContratosList = tipo =>{
    return Contrato.find({"tipoprocedimento":tipo})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.nipcContratosList = tipo =>{
    return Contrato.find({"NIPC_entidade_comunicante":tipo})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.entidadesList = () =>{
    return Contrato.distinct("entidade_comunicante").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.tiposList = () =>{
    return Contrato.distinct("tipoprocedimento").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}



module.exports.addContrato = (contrato) => {
    return Contrato.collection.insertOne(contrato)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }


module.exports.deleteContrato = id =>{
    return Contrato.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.updateContrato = (id, contratoAtualizado) => {
    return Contrato.findOneAndUpdate(
        { _id: id }, 
        contratoAtualizado, 
        { new: true } 
    )
    .then(dados => {
        return dados;
    })
    .catch(erro => {
        return erro;
    });
};
