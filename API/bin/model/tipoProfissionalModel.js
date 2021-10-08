/*
Model do Tipo Profissional
*/
const database = require('../config/database');

exports.getTipoProfissional = function(){
    return database.query("select * from fullstackChallenge.tipoProfissional order by fullstackChallenge.tipoProfissional.descricao");
}

exports.getTipoProfissionalById = function(id){
    return database.query("select * from fullstackChallenge.tipoProfissional where id = $1", [id]);
}

exports.saveTipoProfissional = function(tipoProfissional){
    return database.query('insert into fullstackChallenge.tipoProfissional (descricao, situacao, updatedAt, createdAt) values ($1, $2, current_timestamp, current_timestamp) returning *', [tipoProfissional.descricao, tipoProfissional.situacao]);
};

exports.updateTipoProfissional = function(id, tipoProfissional){
    return database.query('update fullstackChallenge.tipoProfissional set descricao = $1, situacao = $2, updatedAt = current_timestamp where id = $3 returning *', [tipoProfissional.descricao, tipoProfissional.situacao, id]);
}

exports.deleteTipoProfissional = function(id){
    return database.query('delete from fullstackChallenge.tipoProfissional where id = $1', [id]);
}