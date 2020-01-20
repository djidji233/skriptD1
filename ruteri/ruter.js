const path = require("path");
const express = require("express");
const ruter = express.Router();
const oglasi = require("../controller/oglasiCtr.js");

ruter.post('/oglasi/load/', oglasi.loadOglasi);
ruter.post('/oglasi/delete/', oglasi.deleteOglas);
ruter.post('/oglasi/add/', oglasi.addOglas);

module.exports = ruter;