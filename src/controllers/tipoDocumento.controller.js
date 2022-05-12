const { response, request } = require("express");
const { TipoDocumento } = require("../models");

const obtenerTipoDocumentos = async(req = request, res = response) => {
    const tipoDocumentos = await TipoDocumento.findAll();
    res.status(200).json({
        tipoDocumentos
    });
}

const buscarPorId = async(req = request, res = response) => {
    const { id } = req.params;
    const tipoDocumento = await TipoDocumento.findByPk(id);
    if (!tipoDocumento) {
        return res.status(209).json({
            msg: `No se encontro ningun Tipo de Documento asociado al id ${id}`
        });
    }
    return res.status(200).json({
        tipoDocumento
    });
}

module.exports = {
    obtenerTipoDocumentos,
    buscarPorId
}