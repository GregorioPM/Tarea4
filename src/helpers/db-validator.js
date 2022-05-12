const { request, response } = require("express");
const {
    Cargo,
    Empleado,
    TipoConvenio,
    TipoDocumento,
    Empresa,
    Convenio
} = require("../models");

const existCargo = async(id) => {
    const cargo = await Cargo.findOne({ where: { carg_id: id } });
    if (!cargo) {
        throw new Error(`el cargo con el id ${id} no se encuentra registrado en la base de datos`);
    }
}

const existEmpleado = async(id) => {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
        throw new Error(`el empleado con el id ${id} no se encuentra registrado en la base de datos`);
    }
}

const existEmpresaPorId = async(id) => {
    const empresa = await Empresa.findByPk(id);
    if (empresa) {
        throw new Error(`Ya existe una empresa asociada a ese nit`);
    }
}

const noExistEmpresaPorId = async(id) => {
    const empresa = await Empresa.findByPk(id);
    if (!empresa) {
        throw new Error(`No existe una empresa con el id insertado`);
    }
}

const existEmpresaPorcorreo = async(correo) => {
    const empresa = await Empresa.findOne({where:{empr_correo:correo}});
    if (empresa) {
        throw new Error(`Ya existe una empresa con el mismo correo`);
    }
}

const noExistEmpresaPorcorreo = async(correo) => {
    const empresa = await Empresa.findOne({where:{empr_correo:correo}});
    if (!empresa) {
        throw new Error(`No existe una Empresa registrada`);
    }
}

const existEmpresaPorNombre = async(nombre) => {
    const empresa = await Empresa.findOne({where:{empr_nombre:nombre}});
    if (empresa) {
        throw new Error(`Ya existe una empresa con el mismo correo`);
    }
}

const existTipoConvenio = async(id = "") => {
    const tipoConvenio = await TipoConvenio.findByPk(id);
    if (!tipoConvenio) {
        throw new Error(`No existe ningun tipo de convenio asociado al id: ${id}`);
    }
}

const existTipoDocumento = async(id) => {
    const tipoDocumento = await TipoDocumento.findByPk(id);
    if (!tipoDocumento) {
        throw new Error(`No existe ningun tipo de documento asociado al id: ${id}`);
    }
}

const existConvenio=async(req=request,res=response,next)=>{
    const {id}=req.params;
    const convenio=await Convenio.findByPk(id);
    if(!convenio){
        return res.status(204).json({});
    }

    req.convenio=convenio;
    next();
}



module.exports = {
    existCargo,
    existEmpleado,
    existTipoConvenio,
    existTipoDocumento,
    existEmpresaPorId,
    existEmpresaPorcorreo,
    existEmpresaPorNombre,
    noExistEmpresaPorcorreo,
    noExistEmpresaPorId,
    existConvenio
}