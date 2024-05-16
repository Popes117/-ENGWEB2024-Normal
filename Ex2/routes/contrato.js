var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos")
    .then(dados=>{
      res.render('listaContratos',{contratos:dados.data,d:data})
    })
    .catch(erro=>{
  
      res.render('error', { error: erro,message:"Erro a obter lista de Contratos" });
    })
});
// http://localhost:16001/entidades/:nipc
router.get('/entidades/:nipc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos?nipc="+req.params.nipc)
      .then(dados=>{
        if (dados.data.length!=0) res.render('entidade', { entidades: dados.data, d:data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter lista de plantas da espécie" });
      })
});

// http://localhost:16001/:id
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos/"+req.params.id)
      .then(dados=>{
        res.render('contrato', { contrato: dados.data, d:data});
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter Contrato" });
      })

  
});

module.exports = router;