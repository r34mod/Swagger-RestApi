'use strict';

var utils = require('../utils/writer.js');
var Supervisores = require('../service/SupervisoresService');

module.exports.createSuper = function createSuper (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Supervisores.createSuper(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createUserSupervisor = function createUserSupervisor (req, res, next) {
  var id_super = req.swagger.params['id_super'].value;
  var id_user = req.swagger.params['id_user'].value;
  var body = req.swagger.params['body'].value;
  Supervisores.createUserSupervisor(id_super,id_user,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSuper = function deleteSuper (req, res, next) {
  var id = req.swagger.params['id'].value;
  Supervisores.deleteSuper(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUserbySuper = function deleteUserbySuper (req, res, next) {
  var id_super = req.swagger.params['id_super'].value;
  var id_user = req.swagger.params['id_user'].value;
  Supervisores.deleteUserbySuper(id_super,id_user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSuper = function getAllSuper (req, res, next) {
  Supervisores.getAllSuper()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSupervisorByUsername = function getSupervisorByUsername (req, res, next) {
  var id = req.swagger.params['id'].value;
  Supervisores.getSupervisorByUsername(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserbySuper = function getUserbySuper (req, res, next) {
  var id_super = req.swagger.params['id_super'].value;
  var id_user = req.swagger.params['id_user'].value;
  Supervisores.getUserbySuper(id_super,id_user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSupervisor = function updateSupervisor (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Supervisores.updateSupervisor(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserbySuper = function updateUserbySuper (req, res, next) {
  var id_super = req.swagger.params['id_super'].value;
  var id_user = req.swagger.params['id_user'].value;
  var body = req.swagger.params['body'].value;
  Supervisores.updateUserbySuper(id_super,id_user,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
