/*
Controller do Profissional
*/


const profissionalModel = require("../model/profissionalModel");

exports.getProfissional = function(){
    return profissionalModel.getProfissional();
}

exports.getProfissionalById = function(id){
    return profissionalModel.getProfissionalById(id);
}

exports.saveProfissional = function(profissional){
    return profissionalModel.saveProfissional(profissional);
}

exports.updateProfissional = function(id, profissional){
    const profissionalId = parseInt(id);
    return profissionalModel.updateProfissional(profissionalId, profissional);
}

exports.deleteProfissional = function(id){
    return profissionalModel.deleteProfissional(id);
}