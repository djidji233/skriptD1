const oglasi = require('../db/fje.js');

exports.loadOglasi = function (req,res) {
    oglasi.loadOglasi().then((result)=> {
        res.status(200).send({data: result, status: 200});
    });
}

exports.deleteOglas = function (req,res) {
    oglasi.deleteOglas(req.body.id).then((result)=> {
        res.status(200).send({data: result, status: 200});
    });
}

exports.addOglas = function (req,res) {
    oglasi.addOglas(req.body).then((result)=> {
        res.status(200).send({data: result, status: 200});
    });
}