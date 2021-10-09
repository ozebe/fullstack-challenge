/*
Model do Profissional
*/
const database = require('../config/database');

const tipoProfissionalModel = require('../model/tipoProfissionalModel');

exports.getProfissional = async function(){
    let profissional = await database.query("select * from fullstackChallenge.profissional order by fullstackChallenge.profissional.nome");
    let tipoProfissional = await tipoProfissionalModel.getTipoProfissional();

    //itera no vetor de profissionais e adicionar as propriedades do tipo de profissão
    for(let p of profissional.rows){
        for(tp of tipoProfissional.rows){
            if(p.tipoprofissional == tp.id){
                p.tipoprofissional = tp
            }
        }
    }
    return profissional;
}

exports.getProfissionalById = async function(id){
    let profissional = await database.query("select * from fullstackChallenge.profissional where id = $1", [id]);
    let tipoProfissional = await tipoProfissionalModel.getTipoProfissionalById(profissional.rows[0].tipoprofissional);
    profissional.rows[0].tipoprofissional = tipoProfissional.rows;

    return profissional;
    //return database.query("select * from fullstackChallenge.profissional where id = $1", [id]);
}

exports.saveProfissional = function(profissional){
    //tenta salvar o profissional, caso ocorra um erro, devolve o erro na solicitação, para ser tratado.
    const query =  database.query('insert into fullstackChallenge.profissional (nome, telefone, email, tipoprofissional, situacao, updatedAt, createdAt) values ($1, $2, $3, $4, $5, current_timestamp, current_timestamp) returning *', [profissional.nome, profissional.telefone, profissional.email, profissional.tipoprofissional, profissional.situacao]).catch(e => {
        return(e);
    });
    return query;
};

exports.updateProfissional = function(id, profissional){
    return database.query('update fullstackChallenge.profissional set nome = $1, telefone = $2, email = $3, tipoprofissional = $4, situacao = $5, updatedAt = current_timestamp where id = $6 returning *', [profissional.nome, profissional.telefone, profissional.email, profissional.tipoProfissional, profissional.situacao, id]);
}

exports.deleteProfissional = function(id){
    return database.query('delete from fullstackChallenge.profissional where id = $1', [id]);
}