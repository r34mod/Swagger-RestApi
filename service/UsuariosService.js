'use strict';


var user = [
  { 
    id_super: 1,
    id:1,
    username:"Mario01",
    firstname:"Mario",
    rol:"usuario",
    email:"usuario@hotmail.es",
    password:"1234",
    departmento:"AF"
  },
  { 
    id_super: 1,
    id:2,
    username:"Paco01",
    firstname:"Paco",
    rol:"usuario",
    email:"usuario@hotmail.es",
    password:"1234",
    departmento:"AF"
  },
  {
    id_super: 2,
    id:3,
    username:"Maria16",
    firstname:"Maria",
    rol:"usuario",
    email:"usuario@hotmail.es",
    password:"1234",
    departmento:"AF"
  },
  {
    id_super: 2,
    id:4,
    username:"Mario01",
    firstname:"Mario",
    rol:"usuario",
    email:"usuario@hotmail.es",
    password:"1234",
    departmento:"AF"
  }
];

/**
 * Crea el usuario del super
 * 
 *
 * body UsuariosSuper El username que sera eliminado
 * returns UsuarioGet
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body:[user.push(body)]
    };
    
    if(user.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = user;
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
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all users
 *
 * returns List
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
     body: [user]
    };
    if(user.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = user;
    }  if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    }
     else {
      resolve();
    }
  });
}


/**
 * Muestra la informacion del usuario
 * Muestra la informacion del username dado
 *
 * id String Username a mostrar
 * returns UsuarioGet
 **/
exports.getUserByUsername = function(id) {
  var pos=0;
  for(var i = 0; i < user.length; i++) {
      if(user[i].id === id){
        pos = i;
        console.log(pos);
      }
  }
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      body: [user[id-1]]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza el usuario
 * 
 *
 * id String Usuario actualizado
 * body Usuario 
 * returns UsuarioGet
 **/
exports.updateUser = function(id,body) {
  return new Promise(function(resolve, reject) {
    
    var examples = {};
    examples['application/json'] = {
      body:[user[id-1].push(body)]
    };
    if(user.length > 0){
      resolve(examples[Object.keys(examples)[0]]) = user;
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

