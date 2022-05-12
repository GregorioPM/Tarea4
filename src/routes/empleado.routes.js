const { Router } = require("express");
const { check } = require("express-validator");

const { crearEmpleado, listarEmpleados, buscarPorId, eliminarById, actualizar } = require("../controllers/Empleado.controller");
const { existEmpleado } = require("../helpers/db-validator");
const { validarCampos } = require("../middlewares");

const route = Router();

route.post("/", [
    check("empl_documento", "debe existir el documento").notEmpty(),
    check("empl_documento", "el documento debe ser numérico").isNumeric(),
    check("tido_id", "debe existir el tipo de documento").notEmpty(),
    check("empl_nombres", "deben existir los nombres").notEmpty(),
    check("carg_id", "debe existir el cargo").notEmpty(),
    validarCampos
], crearEmpleado);

route.get("/", listarEmpleados);

route.get("/:id", [
    check("id").custom(existEmpleado),
], buscarPorId);

route.put("/:id", [
    check("tido_id", "debe existir el tipo de documento").notEmpty(),
    check("empl_nombres", "deben existir los nombres").notEmpty(),
    check("carg_id", "debe existir el cargo").notEmpty(),
    check("id").custom(existEmpleado),
    validarCampos
], actualizar);

route.delete("/:id", [
    check("id", "El id no debe ser nulo").notEmpty(),
    check("id").custom(existEmpleado),
    validarCampos
], eliminarById);

module.exports = route;