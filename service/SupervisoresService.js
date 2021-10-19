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
    username:"Pedro",
    firstname:"Pedro",
    rol:"usuario",
    email:"usuario@hotmail.es",
    password:"1234",
    departmento:"AF"
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
]

var longSuper = supers.length;
var longUser = user.length;
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
    if(id<=longSuper){
      console.log("error id supers");
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
    if(id_user <= longUser){
      console.log("error user super");
    }else{
      longUser++;
      var examples = {};
      examples['application/json'] = {
        body:[user.push(body)]
      };
      if(user.length > 0){
        resolve(examples[Object.keys(examples)[0]]) = user;
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
 * Delete user by super
 * Delete user
 *
 * id String El username que sera eliminado
 * no response value expected for this operation
 **/
exports.deleteSuper = function(id) {
  return new Promise(function(resolve, reject) {
    for(var i = 0; i < user.length; i++) {
      if(user[i].id_super != id){
        supers.splice((id-1),1);
        resolve();
      }else{
        var examples = {};
      examples['application/json'] = {
        body:'NOT success'
    };
      }
    }
    
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
    user.splice((id_user-1),1);
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
      body: [user[id_super-1]]
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
    user.splice((id-1),1);
    var examples = {};
    examples['application/json'] = {
      body:[user.splice((id-1),0,(body))]
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

