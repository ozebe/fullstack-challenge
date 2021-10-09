/*
Model do Profissional
*/
const database = require('../config/database');

exports.getProfissional = function(){
    return database.query("select * from fullstackChallenge.profissional order by fullstackChallenge.profissional.nome");
}

exports.getProfissionalById = function(id){
    return database.query("select * from fullstackChallenge.profissional where id = $1", [id]);
}

exports.saveProfissional = function(profissional){
    return database.query('insert into fullstackChallenge.profissional (nome, telefone, email, tipoprofissional, situacao, updatedAt, createdAt) values ($1, $2, $3, $4, $5, current_timestamp, current_timestamp) returning *', [profissional.nome, profissional.telefone, profissional.email, profissional.tipoprofissional, profissional.situacao]);
};

exports.updateProfissional = function(id, profissional){
    return database.query('update fullstackChallenge.profissional set nome = $1, telefone = $2, email = $3, tipoprofissional = $4, situacao = $5, updatedAt = current_timestamp where id = $6 returning *', [profissional.nome, profissional.telefone, profissional.email, profissional.tipoProfissional, profissional.situacao, id]);
}

exports.deleteProfissional = function(id){
    return database.query('delete from fullstackChallenge.profissional where id = $1', [id]);
}