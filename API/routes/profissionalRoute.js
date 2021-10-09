/*
Routes do rofissional
*/

const express = require('express');
const router = express.Router();
const profissionalController = require('../bin/controller/profissionalController');
const tipoProfissionalController = require('../bin/controller/tipoProfissionalController');

//quando ocorrer uma solicitação GET para encontrar todos os profissionais.
router.get('/profissional', async function(req, res, next){
    const profissional = await profissionalController.getProfissional();
    res.json(profissional.rows);
});

router.get('/profissional/:id', async function(req, res){
    const profissional = await profissionalController.getProfissionalById(req.params.id);
    res.json(profissional.rows);
});

router.post('/profissional', async function(req, res){
    const profissional = req.body;
    const newProfissional = await profissionalController.saveProfissional(profissional);
    const tipoProfissional = await tipoProfissionalController.getTipoProfissional(); //tipos de profissionais
    
    //se ao tentar inserir o profissional, retornar um erro.
    if(newProfissional.code){
        res.json(newProfissional);
    //se não ocorrer nenhum erro ao inserir o novo profissional.
    }else{
        //devolve as informações do cadastro realizado.
        res.json(newProfissional.rows);
    }
});

router.put('/profissional/:id', async function(req, res){
    const profissional = req.body;
    const profissionalPut = await profissionalController.updateProfissional(req.params.id, profissional);
    res.json(profissionalPut);
})

router.delete('/profissional/:id', async function(req, res){
    const profissionalDelete = await profissionalController.deleteProfissional(req.params.id);
    res.json(profissionalDelete);
})

module.exports = router;