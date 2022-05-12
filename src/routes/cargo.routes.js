const { Router } = require("express");
const { check } = require("express-validator");

const { crearCargo, listarCargos, buscarPorId, eliminarById, actualizar } = require("../controllers/cargo.controller");
const { existCargo } = require("../helpers/db-validator");
const { validarCampos } = require("../middlewares");

const route = Router();

route.post("/", [
    check("carg_nombre", "debe existir el nombre").notEmpty(),
    validarCampos
], crearCargo);

route.get("/", listarCargos);

route.get("/:id", buscarPorId);

route.delete("/:id", [check("id", "El id no debe ser nulo").notEmpty(),
    check("id").custom(existCargo),
    validarCampos
], eliminarById);

route.put("/:id", [check("carg_nombre", "Debe epecificar un nombre para el cargo").notEmpty(),
    check("id").custom(existCargo),
    validarCampos
], actualizar);

module.exports = route;