/*
Controller do Profissional
*/


const profissionalModel = require("../model/profissionalModel");

exports.getProfissional = function(){
    return profissionalModel.getProfissional();
}

exports.getProfissionalById = function(id){
    //se ao buscar o profissinal pelo ID, não for repassado um número, retorna null.
    const profissionalId = parseInt(id);
    if(isNaN(profissionalId)){
        return null;
    }else{
        return profissionalModel.getProfissionalById(profissionalId);

    }
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