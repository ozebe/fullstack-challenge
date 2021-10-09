/*
Routes do rofissional
*/

const express = require('express');
const router = express.Router();
const profissionalController = require('../bin/controller/profissionalController');
const tipoProfissionalController = require('../bin/controller/tipoProfissionalController');

//quando ocorrer uma solicitação GET para encontrar todos os funcionários.
router.get('/profissional', async function(req, res, next){
    const profissional = await profissionalController.getProfissional();
    //res.json(profissional.rows);
    res.render('./profissional/index', { title: 'Profissionais', data: profissional.rows});
});

//quando ocorrer uma solicitação GET para adicionar um novo usuário.
router.get('/profissional/add', async function(req, res, next){
    const tipoProfissional = await tipoProfissionalController.getTipoProfissional();
    //const profissional = await profissionalController.getProfissional();
    //res.json(profissional.rows);
    res.render('./profissional/add', { title: 'Adicionar novo profissional', data: tipoProfissional.rows});
});

router.get('/profissional/:id', async function(req, res){
    const profissional = await profissionalController.getProfissionalById(req.params.id);
    res.json(profissional.rows);
});

router.post('/profissional', async function(req, res){
    const profissional = req.body;
    const newProfissional = await profissionalController.saveProfissional(profissional);
    res.json(newProfissional);
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