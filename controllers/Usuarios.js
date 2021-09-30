'use strict';

var utils = require('../utils/writer.js');
var Usuarios = require('../service/UsuariosService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Usuarios.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Usuarios.deleteUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  Usuarios.getAllUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByUsername = function getUserByUsername (req, res, next) {
  var id = req.swagger.params['id'].value;
  Usuarios.getUserByUsername(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Usuarios.updateUser(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
