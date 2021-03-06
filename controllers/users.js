'use strict';
let User = require('../models/User');

// GET
function getAll(request, response) {
  User.find(function(error, users) {
    if(error) response.json({message: 'Could not find any users'});

    response.json({users: users});
  }).select('-__v');
}

// POST
function createUser(request, response) {
  var user = new User(request.body);

  user.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate user b/c:' + error});

    response.json({user: user});
  });
}

// GET
function getUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    response.json({user: user});
  }).select('-__v');
}

function updateUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    if(request.body.name) user.name = request.body.name;
    if(request.body.location) user.start = request.body.location;
    if(request.body.status) user.end = request.body.status;

    user.save(function(error) {
      if(error) response.json({messsage: 'Could not update user b/c:' + error});

      response.json({message: 'User successfully updated', user: user});
    });
  }).select('-__v');
}

function removeUser(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete user b/c:' + error});

    response.json({message: 'User successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser
}
