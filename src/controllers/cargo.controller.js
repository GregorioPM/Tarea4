const { response, request } = require("express");
const { Cargo } = require("../models");
const { listar, paginate, actualizarGeneric } = require("../repositories/crud-generic.js")


const crearCargo = async(req, res = response) => {
    const data = req.body;
    let cargo = await Cargo.findOne({ where: { carg_nombre: data.carg_nombre } });
    if (cargo) {
        return res.status(400).json({
            msg: "Ya existe un cargo con el mismo nombre"
        });
    }
    cargo = new Cargo(data);
    await cargo.save();
    return res.status(200).json({
        cargo
    });
}

const listarCargos = async(req = request, res = response) => {
    // const { q, page, limit, orderBy, orderDirection } = req.query;
    const cargos = await listar({ model: Cargo });
    if (!cargos) {
        return res.status(209).json({
            msg: "Actualmente no se encuentra ningun cargo registrado"
        });
    }

    return res.status(200).json({ cargos });
}

const buscarPorId = async(req = request, res = response) => {

    const { id } = req.params;
    const cargo = await Cargo.findOne({ where: { carg_id: id } })

    if (!cargo) {
        return res.status(209).json({
            msg: `No se encontro ningun cargo asociado al id ${id}`
        });
    }

    return res.status(200).json({
        cargo
    });
}

const actualizar = async(req, res) => {
    const { id } = req.params;
    const body = req.body;
    const cargo = await actualizarGeneric({ model: Cargo, id, body });

    // cargo.carg_nombre = carg_nombre;

    // await cargo.save();

    return res.status(200).json({
        msg: "Actualizado corrrectamente",
        cargo
    });

}

const eliminarById = async(req = request, res = response) => {
    const { id } = req.params;
    const cargo = await Cargo.findOne({ where: { carg_id: id } });

    cargo.destroy();
    return res.status(200).json({
        msg: "Se ha eliminado correctamente el cargo"
    });

}

module.exports = {
    crearCargo,
    listarCargos,
    buscarPorId,
    eliminarById,
    actualizar
}