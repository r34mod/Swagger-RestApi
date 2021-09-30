'use strict';

var admin = [
  {
    id: 1,
    rol: "administrador",
    nombre: "Enrique",
    departamento: "Ventas",
    email: "en@hotmail.com",
    username: "kike",
    password: "1234",
    id_super: 2
  }
]

/**
 * Agrega un nuevo admin
 * 
 *
 * body Administrador Administrador agregado
 * returns List
 **/
exports.addAdmin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin.push(body)]
    };
    if(admin.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = admin;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create supervisor
 * Create supervisor by admin
 *
 * id_admin String 
 * id_super String 
 * body SupervisoresAdmin Create super (optional)
 * returns SupervisoresAdmin
 **/
exports.createSuperbyAdmin = function(id_admin,id_super,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin.push(body)]
    };
    if(admin.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = admin;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Elimina el administrador por username
 * Elimina el administrador
 *
 * id String El username que sera eliminado
 * no response value expected for this operation
 **/
exports.deleteAdministrador = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete supervisor
 * Delete supervisor by admin
 *
 * id_admin String 
 * id_super String 
 * no response value expected for this operation
 **/
exports.deleteSuperbyAdmin = function(id_admin,id_super) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Muestra el admin especifico
 * Devuelve un administrador
 *
 * id Long 
 * returns Administrador
 **/
exports.getAdminByUsername = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin[id-1]]
    };
    if(admin.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = admin;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all administradores
 *
 * returns List
 **/
exports.getAllAdmin = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin]
    };
    if(admin.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = admin;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update super by admin
 * Update super by admin
 *
 * id_admin String 
 * id_super String 
 * returns ArraySuper
 **/
exports.getSuperbyAdmin = function(id_admin,id_super) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin[id_super-1]]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza el administrador
 * Solo se hace por el usuario especifico
 *
 * id String Actualizar supervisor
 * body Supervisores Actualizar supervisor
 * returns Administrador
 **/
exports.updateAdministrador = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[admin[id-1].push(body)]
    };
    if(admin.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = admin;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update supervisor
 * Update supervisor by admin
 *
 * id_admin String 
 * id_super String 
 * body SupervisoresAdmin 
 * returns SupervisoresAdmin
 **/
exports.updateSuperbyAdmin = function(id_admin,id_super,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

