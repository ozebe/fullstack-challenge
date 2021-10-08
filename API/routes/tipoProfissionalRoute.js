/*
Routes do Tipo Profissional
*/

const express = require('express');
const router = express.Router();
const tipoProfissionalController = require('../bin/controller/tipoProfissionalController');

router.get('/tipoProfissional', async function(req, res){
    const tipoProfissional = await tipoProfissionalController.getTipoProfissional();
    res.json(tipoProfissional.rows);
});

router.get('/tipoProfissional/:id', async function(req, res){
    const tipoProfissional = await tipoProfissionalController.getTipoProfissionalById(req.params.id);
    res.json(tipoProfissional.rows);
});

router.post('/tipoProfissional', async function(req, res){
    const tipoProfissional = req.body;
    const newtipoProfissional = await tipoProfissionalController.saveTipoProfissional(tipoProfissional);
    res.json(newtipoProfissional);
});

router.put('/tipoProfissional/:id', async function(req, res){
    const tipoProfissional = req.body;
    const tipoProfissionalPut = await tipoProfissionalController.updateTipoProfissional(req.params.id, tipoProfissional);
    res.json(tipoProfissionalPut);
})

router.delete('/tipoProfissional/:id', async function(req, res){
    const tipoProfissionalDelete = await tipoProfissionalController.deleteTipoProfissional(req.params.id);
    res.json(tipoProfissionalDelete);
})

module.exports = router;