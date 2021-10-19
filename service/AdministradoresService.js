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
];


var supers = [
  {
    id_admin: 1,
    id: 1,
    username: "Juan01",
    firstname: "Juan",
    rol: "supervisor",
    email: "usuario@hotmail.es",
    password: "1234",
    departmento: "AF"
  },
  {
    id_admin: 2,
    id: 2,
    username: "Mario01",
    firstname: "Mario",
    rol: "supervisor",
    email: "usuario@hotmail.es",
    password: "1234",
    departmento: "AF"
  }
];

var longAdmin = admin.length;

var longSuper = supers.length;
/**
 * Agrega un nuevo admin
 * 
 *
 * body Administrador Administrador agregado
 * returns List
 **/
exports.addAdmin = function(id,body) {
  return new Promise(function(resolve, reject) {
    /**
     *  Hacer variable con la longitud del array y meter las id
     *  let cont = admin.length();
     * 
     */
    if(id<=longAdmin){
      console.log("error admin");
    }else{
      longAdmin++;
      var examples = {};
      examples['application/json'] = {
        body:[admin.push(body)]
      };
      if(admin.length > 0){
        resolve(examples[Object.keys(examples)[0]]) = admin;
      }
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
      if(id_super<=longSuper){
        console.log("Error super admin");
      }else{
        longSuper++;
        var examples = {};
        examples['application/json'] = {
          body:[supers.push(body)]
        };
        if(supers.length > 0){
          resolve(examples[Object.keys(examples)[0]]) = supers;
        }
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
    admin.splice((id-1), 1);
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
    supers.splice((id_super-1),1);
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
      body:[supers[id_super-1]]
    };
    if(supers.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = supers;
    }
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
    admin.splice((id-1),1);
    var examples = {};
    examples['application/json'] = {
      body:[admin.splice((id-1),0,(body))]
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
    supers.splice((id-1),1);
    var examples = {};
    examples['application/json'] = {
      body:[supers.splice((id-1),0,(body))]
    };
    if(supers.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = supers;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

