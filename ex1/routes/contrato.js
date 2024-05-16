var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

router.get('/contratos', function(req, res, next) {
  //GET /contratos?entidade=EEEE
  if (req.query.entidade){
    Contrato.entidadeContratosList(req.query.entidade)
      .then(entidades=>{
        res.json(entidades)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de contratos",error:erro })
      })
  }
  //GET /contratos?nipc=BBBB
  else if(req.query.nipc){
    Contrato.nipcContratosList(req.query.nipc)
      .then(entidades=>{
        res.json(entidades)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de contratos",error:erro })
      })
  }
  //GET /contratos?tipo=AAA
  else if (req.query.tipo){
    Contrato.tipoContratosList(req.query.tipo)
      .then(tipos=>{
        res.json(tipos)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de contratos",error:erro })
      })
  }
  //GET /contratos
  else{
    Contrato.list()
      .then(contratos=>{
        res.json(contratos)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de contratos",error:erro })
      })
  }
});

// GET /contratos/entidades
router.get('/contratos/entidades', function(req, res, next) {
  Contrato.entidadesList()
    .then(entidades=>{
      res.json(entidades)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter lista de Contratos",error:erro })
    })
});

// GET /contratos/tipos
router.get('/contratos/tipos', function(req, res, next) {
  Contrato.tiposList()
    .then(tipos=>{
      res.json(tipos)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter lista de Contratos",error:erro })
    })
});

// GET /contratos/:id
router.get('/contratos/:id', function(req, res, next) {
  Contrato.getContrato(req.params.id)
    .then(contrato=>{
      res.json(contrato)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter Contrato",error:erro })
    })
});

// POST /contratos
router.post('/contratos', function(req, res, next) {
  Contrato.addContrato(req.body)
    .then(contrato=>{
      res.status(201).json(contrato)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar Contrato",error:erro })
    })
});

// DELETE /contratos/:id
router.delete('/contratos/:id', function(req, res, next) {
  Contrato.deleteContrato(req.params.id)
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar Contrato",error:erro })
    })
});

// PUT /contratos/:id
router.put('/contratos/:id', function(req, res, next) {
  const contratoId = req.params.id;
  const contratoAtualizado = req.body; 
  
  Contrato.updateContrato(contratoId, contratoAtualizado)
      .then(contratoAtualizado => {
          if (contratoAtualizado) {
              res.json(contratoAtualizado); 
          } else {
              res.status(404).json({ message: "Contrato não encontrado" });
          }
      })
      .catch(erro => {
          res.status(500).json({ message: "Erro ao atualizar contrato", error: erro });
      });
});


module.exports = router;