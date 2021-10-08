/*
Controller do tipo profissional
*/


const tipoProfissionalModel = require("../model/tipoProfissionalModel");

exports.getTipoProfissional = function(){
    return tipoProfissionalModel.getTipoProfissional();
}

exports.getTipoProfissionalById = function(id){
    return tipoProfissionalModel.getTipoProfissionalById(id);
}

exports.saveTipoProfissional = function(tipoProfissional){
    return tipoProfissionalModel.saveTipoProfissional(tipoProfissional);
}

exports.updateTipoProfissional = function(id, tipoProfissional){
    const tipoProfissionalId = parseInt(id);
    return tipoProfissionalModel.updateTipoProfissional(tipoProfissionalId, tipoProfissional);
}

exports.deleteTipoProfissional = function(id){
    return tipoProfissionalModel.deleteTipoProfissional(id);
}