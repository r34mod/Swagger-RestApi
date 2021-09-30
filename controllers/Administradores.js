'use strict';

var utils = require('../utils/writer.js');
var Administradores = require('../service/AdministradoresService');

module.exports.addAdmin = function addAdmin (req, res, next) {
  var body = req.swagger.params['body'].value;
  Administradores.addAdmin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createSuperbyAdmin = function createSuperbyAdmin (req, res, next) {
  var id_admin = req.swagger.params['id_admin'].value;
  var id_super = req.swagger.params['id_super'].value;
  var body = req.swagger.params['body'].value;
  Administradores.createSuperbyAdmin(id_admin,id_super,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdministrador = function deleteAdministrador (req, res, next) {
  var id = req.swagger.params['id'].value;
  Administradores.deleteAdministrador(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSuperbyAdmin = function deleteSuperbyAdmin (req, res, next) {
  var id_admin = req.swagger.params['id_admin'].value;
  var id_super = req.swagger.params['id_super'].value;
  Administradores.deleteSuperbyAdmin(id_admin,id_super)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminByUsername = function getAdminByUsername (req, res, next) {
  var id = req.swagger.params['id'].value;
  Administradores.getAdminByUsername(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAdmin = function getAllAdmin (req, res, next) {
  Administradores.getAllAdmin()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSuperbyAdmin = function getSuperbyAdmin (req, res, next) {
  var id_admin = req.swagger.params['id_admin'].value;
  var id_super = req.swagger.params['id_super'].value;
  Administradores.getSuperbyAdmin(id_admin,id_super)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdministrador = function updateAdministrador (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Administradores.updateAdministrador(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSuperbyAdmin = function updateSuperbyAdmin (req, res, next) {
  var id_admin = req.swagger.params['id_admin'].value;
  var id_super = req.swagger.params['id_super'].value;
  var body = req.swagger.params['body'].value;
  Administradores.updateSuperbyAdmin(id_admin,id_super,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
