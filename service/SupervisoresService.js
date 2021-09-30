'use strict';

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
]

/**
 * Crea el usuario del super
 * 
 *
 * id String 
 * body UsuariosSuper El username que sera eliminado
 * returns ArraySuper
 **/
exports.createSuper = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[supers.push(body)]
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
 * Crea el usuario del super
 * 
 *
 * id_super String 
 * id_user String Crea un obj supervisor
 * body UsuariosSuper El username que sera eliminado
 * returns ArrayUser
 **/
exports.createUserSupervisor = function(id_super,id_user,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[supers.push(body)]
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
 * Delete user by super
 * Delete user
 *
 * id String El username que sera eliminado
 * no response value expected for this operation
 **/
exports.deleteSuper = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user by super
 * Delete user
 *
 * id_super String El username que sera eliminado
 * id_user String El username que sera eliminado
 * no response value expected for this operation
 **/
exports.deleteUserbySuper = function(id_super,id_user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all supervisores
 *
 * returns List
 **/
exports.getAllSuper = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body: [supers]
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
 * Devuelve la informacion 
 * Devuelve un supervisor
 *
 * id Long 
 * returns ArraySuper
 **/
exports.getSupervisorByUsername = function(id) {
  var pos;
  for(var i = 0; i < supers.length; i++) {
      if(supers[i].id === id){
        pos == i;
      }
  }
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[supers[id-1]]
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
 * Update user by super
 * Update user by super
 *
 * id_super String 
 * id_user String 
 * returns ArrayUser
 **/
exports.getUserbySuper = function(id_super,id_user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body: [supers[id_super-1]]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza el supervisor
 * Solo se hace por el usuario especifico
 *
 * id String Actualizar supervisor
 * body Supervisores Actualizar supervisor
 * returns ArraySuper
 **/
exports.updateSupervisor = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[supers[id-1].push(body)]
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
 * Update user by super
 * Update user by super
 *
 * id_super String 
 * id_user String 
 * body UsuariosSuper 
 * returns ArrayUser
 **/
exports.updateUserbySuper = function(id_super,id_user,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[supers[id_super-1].push(body)]
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

