const { response, request } = require("express");
const { Cargo, Empleado, TipoDocumento } = require("../models");
const { listar } = require("../repositories/crud-generic.js");

const crearEmpleado = async(req, res = response) => {
    const data = req.body;
    let empleado = await Empleado.findOne({ where: { empl_documento: data.empl_documento } });
    if (empleado) {
        return res.status(400).json({
            msg: "Ya existe un empleado con el mismo documento"
        });
    }
    empleado = new Empleado(data);
    await empleado.save();
    return res.status(200).json({
        empleado
    });
}

const listarEmpleados = async(req = request, res = response) => {
    const include = [{ model: Cargo }, { model: TipoDocumento }];
    const empleados = await listar({ model: Empleado, include });
    if (!empleados) {
        return res.status(209).json({
            msg: "Actualmente no se encuentra ningun Empleado registrado"
        });
    }
    return res.status(200).json({ empleados });
}

const buscarPorId = async(req = request, res = response) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id, {
        include: [{ model: Cargo }, { model: TipoDocumento }]
    });
    if (!empleado) {
        return res.status(209).json({
            msg: `No se encontro ningun Empleado asociado al id ${id}`
        });
    }
    return res.status(200).json({
        empleado
    });
}

const actualizar = async(req, res) => {
    const { id } = req.params;
    const { tido_id, empl_nombres, carg_id } = req.body;
    empleado = await Empleado.findByPk(id);
    empleado.tido_id = tido_id;
    empleado.empl_nombres = empl_nombres;
    empleado.carg_id = carg_id;
    await empleado.save();
    return res.status(200).json({
        msg: "Actualizado corrrectamente",
        empleado
    });
}

const eliminarById = async(req = request, res = response) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    empleado.destroy();
    return res.status(200).json({
        msg: "Se ha eliminado correctamente el Empleado"
    });
}

module.exports = {
    crearEmpleado,
    listarEmpleados,
    buscarPorId,
    eliminarById,
    actualizar
}