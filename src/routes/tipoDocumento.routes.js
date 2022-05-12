const { Router } = require("express");
const { check } = require("express-validator");

const { obtenerTipoDocumentos, buscarPorId } = require("../controllers/tipoDocumento.controller");
const { existTipoDocumento } = require("../helpers/db-validator");

const route = Router();

route.get("/", obtenerTipoDocumentos);

route.get("/:id", [
    check("id").custom(existTipoDocumento),
], buscarPorId);

module.exports = route;