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

    //renderiza a pagina de visualização de todos os profissionais.
    res.render('./profissional/index', { title: 'Profissionais', data: profissional.rows, message: null, type: 'alert-success'});
});

//quando ocorrer uma solicitação GET para adicionar um novo profissional.
router.get('/profissional/add', async function(req, res, next){
    const tipoProfissional = await tipoProfissionalController.getTipoProfissional();

    //renderiza a pagina de inclusão de profissional.
    res.render('./profissional/add', { title: 'Adicionar novo profissional', data: tipoProfissional.rows, message: null});
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
        //se o erro for referente a duplicidade.
        if(newProfissional.code == '23505'){
            res.render('./profissional/add', { title: 'Profissionais', data: tipoProfissional.rows, message: 'Não foi possível salvar, existem dados duplicados: ' + newProfissional.detail, type: 'alert-danger'});
        
        //se o erro for referente a outra condição
        }else{
            res.render('./profissional/add', { title: 'Profissionais', data: tipoProfissional.rows, message: 'Erro crítico: ' + newProfissional.detail, type: 'alert-danger'});
        }
    //se não ocorrer nenhum erro ao inserir o novo profissional.
    }else{
        //redireciona para o index de profissionais, buscando todos os cadastrados.
        const profissionals = await profissionalController.getProfissional();
        res.render('./profissional/index', { title: 'Profissionais', data: profissionals.rows, message: newProfissional.rows[0].nome + ' adicionado!', type: 'alert-success'});
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